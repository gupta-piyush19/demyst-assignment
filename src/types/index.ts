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
  establishedYear: number
  balanceSheet: BalanceSheet
  requestedLoanAmount: number
}

export type CompanyDetails = {
  name: string
  email: string
  businessName: string
  establishedYear: string
  loanAmount: string
  accountingProvider: string
}
