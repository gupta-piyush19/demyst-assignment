import {DecisionEngine} from '@/lib/apiUtils'
import {OutcomeBody} from '@/types'

export async function POST(req: Request) {
  const applicationId = req.headers.get('application-id')
  if (!applicationId) {
    return new Response(JSON.stringify({error: 'application-id is required'}), {
      headers: {'content-type': 'application/json'},
      status: 400,
    })
  }

  const body = await req.json()
  const {name, establishedYear, balanceSheet, requestedLoanAmount}: OutcomeBody = body

  const netProfitOrLoss = balanceSheet.reduce((acc: number, curr) => {
    return acc + curr.profitOrLoss
  }, 0)

  const netAssetsValue = balanceSheet.reduce((acc: number, curr) => {
    return acc + curr.assetsValue
  }, 0)

  const decisionEngine = new DecisionEngine()
  const {outcome, preAssessment, approvedLoanAmount} = decisionEngine.getOutcome(
    {netAssetsValue, netProfitOrLoss},
    requestedLoanAmount,
  )

  return new Response(
    JSON.stringify({
      data: {
        name,
        establishedYear,
        outcome,
        preAssessment,
        approvedLoanAmount,
      },
    }),
    {
      headers: {'content-type': 'application/json'},
      status: 200,
    },
  )
}
