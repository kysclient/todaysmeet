import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
    // regions: ['iad1']
};

export default async function handler(req: NextRequest, res: NextResponse) {
    return new Response(JSON.stringify({
        name: `POST Hello, from ${req.url} I'm now an Edge Function!`,
    }), { status: 200 })
}
