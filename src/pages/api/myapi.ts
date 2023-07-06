import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'edge',
};

export default async function POST(req: Request) {
    return new Response(JSON.stringify({
        name: `POST Hello, from ${req.url} I'm now an Edge Function!`,
    }), { status: 200 })
}
