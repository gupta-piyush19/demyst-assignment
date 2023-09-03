export class AccountingSoftware {
  getBalanceSheet() {
    const sheet = []

    for (let month = 1; month <= 12; month++) {
      // Radom year between 2010 and 2020
      const year = Math.floor(Math.random() * 10) + 2010

      // Random profit/loss between -100,000 and 100,000
      const profitOrLoss = Math.floor(Math.random() * 200000) - 100000

      // Random assets value between 20,000 and 70,000
      const assetsValue = Math.floor(Math.random() * 50000) + 20000

      sheet.push({
        year: year,
        month: month,
        profitOrLoss: profitOrLoss,
        assetsValue: assetsValue,
      })
    }

    return sheet
  }
}

export class DecisionEngine {
  getOutcome(
    businessDetails: {netProfitOrLoss: number; netAssetsValue: number},
    requestedLoanAmount: number,
  ) {
    const {netProfitOrLoss, netAssetsValue} = businessDetails

    let preAssessment = 20
    if (netProfitOrLoss > 0) {
      preAssessment = 60
    }
    if (netAssetsValue > requestedLoanAmount) {
      preAssessment = 100
    }

    return {
      outcome: preAssessment > 0 ? 'approved' : 'declined',
      preAssessment,
      approvedLoanAmount: (requestedLoanAmount * preAssessment) / 100,
    }
  }
}
