import { NextResponse } from 'next/server'

export async function middleware() {
  const res = NextResponse.next()
  res.headers.set('x-process-env', JSON.stringify(process.env))
  return res
}
