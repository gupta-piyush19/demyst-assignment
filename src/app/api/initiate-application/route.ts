import {NextResponse} from 'next/server'
import {createId} from '@paralleldrive/cuid2'

export async function GET(req: Request) {
  if (req.headers.get('origin') !== req.headers.get('host')) {
    return NextResponse.json({error: 'Invalid origin'}, {status: 403})
  }

  return NextResponse.json(
    {applicationId: createId(), message: 'Your Loan Application has been initiated.'},
    {status: 200},
  )
}
