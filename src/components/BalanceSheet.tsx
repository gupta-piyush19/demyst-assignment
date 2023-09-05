import {BalanceSheet, CompanyDetails} from '@/types'
import {Button} from './ui/button'

type BalanceSheetProps = {
  details: CompanyDetails
  balanceSheet: BalanceSheet
  getOutcome: () => void
}

const nameMapping = {
  name: 'Name',
  email: 'Email',
  businessName: 'Business Name',
  establishedYear: 'Established Year',
  loanAmount: 'Loan Amount',
  accountingProvider: 'Accounting Provider',
}

export default function BalanceSheet({details, balanceSheet, getOutcome}: BalanceSheetProps) {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="companyInfo">
        {Object.keys(details).map((key, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-500">{nameMapping[key]}</span>
            <span>{details[key]}</span>
          </div>
        ))}
      </div>
      <div className="balanceSheet mt-8">
        <h2 className="text-xl text-center">{balanceSheet[0]?.year} Balance Sheet</h2>
        <table className="w-full mt-4">
          <thead>
            <tr>
              <th>Month</th>
              <th>Profit/Loss</th>
              <th>Assets Value</th>
            </tr>
          </thead>
          <tbody>
            {balanceSheet.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{item.month}</td>
                <td>{item.profitOrLoss}</td>
                <td>{item.assetsValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={getOutcome} className="mt-8 w-full">
        Check Loan Status
      </Button>
    </div>
  )
}
