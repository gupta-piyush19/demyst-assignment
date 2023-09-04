import {NextResponse} from 'next/server'
import {createId} from '@paralleldrive/cuid2'
import {cookies} from 'next/headers'

export async function GET(req: Request) {
  const applicationId = createId()

  cookies().set('applicationId', applicationId)

  return NextResponse.json(
    {applicationId, message: 'Your Loan Application has been initiated.'},
    {status: 200},
  )
}
