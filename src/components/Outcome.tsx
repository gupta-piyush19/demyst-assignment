type OutcomeProps = {
  outcome: any
}

export default function Outcome({outcome}: OutcomeProps) {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl text-center mt-4">Loan Application Outcome</h1>
      <p>
        Congratulations! Your loan application has been{' '}
        <span className="text-green-500">{outcome.outcome}</span>
      </p>
      <div className="mt-8">
        <div className="flex justify-between">
          <span className="text-gray-500">Name</span>
          <span>{outcome.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Pre-assessment</span>
          <span>{outcome.preAssessment}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Approved Loan Amount</span>
          <span>{outcome.approvedLoanAmount}</span>
        </div>
      </div>
    </div>
  )
}
