import {NextResponse} from 'next/server'

export async function GET() {
  return NextResponse.json({message: '🚀 Server is running at: http://localhost:3000/api/ 🚀 '})
}
