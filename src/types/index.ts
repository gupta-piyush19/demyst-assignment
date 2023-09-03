export type BalanceSheet = MonthlyBalanceSheet[]

export type MonthlyBalanceSheet = {
  year: number
  month: number
  profitOrLoss: number
  assetsValue: number
}

export type Outcome = {}

export interface OutcomeBody {
  name: string
  EstablishedYear: number
  balanceSheet: BalanceSheet
  requestedLoanAmount: number
}
