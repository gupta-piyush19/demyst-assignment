import {AccountingSoftware} from '@/lib/apiUtils'
import {NextResponse} from 'next/server'

export async function GET(req: Request) {
  const applicationId = req.headers.get('application-id')

  if (!applicationId) {
    return NextResponse.json(
      {error: 'application-id is required'},
      {
        headers: {'content-type': 'application/json'},
        status: 400,
      },
    )
  }

  const accountingSoftware = new AccountingSoftware()
  const sheet = accountingSoftware.getBalanceSheet()

  return NextResponse.json(
    {data: sheet},
    {
      headers: {'content-type': 'application/json'},
      status: 200,
    },
  )
}
