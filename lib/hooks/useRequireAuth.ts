import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth-context';
import type { User } from '../types/user';

export function useRequireAuth(redirectUrl?: string): User | null {
  const { user, loading } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    if (!loading && !user) void replace(redirectUrl ?? '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return user;
}
