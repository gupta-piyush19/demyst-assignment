'use client'

import * as React from 'react'

export default function LoanApplicationLayout({children}: {children: React.ReactNode}) {
  const [applicationId, setApplicationId] = React.useState(null)

  return (
    <div className="mt-20">
      <div className="text-center text-3xl font-semibold mb-6">Welcome to the Loan Application</div>
      <div className="container">{children}</div>
    </div>
  )
}
