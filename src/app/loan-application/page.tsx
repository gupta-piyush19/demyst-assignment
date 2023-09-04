'use client'

import * as React from 'react'
import Form from '@/components/Form'
import BalanceSheet from '@/components/BalanceSheet'
import Outcome from '@/components/Outcome'

export default function LoanApplication() {
  const [applicationId, setApplicationId] = React.useState(null)
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    businessName: '',
    establishedYear: '',
    loanAmount: '',
    accountingProvider: '',
  })
  const [balanceSheet, setBalanceSheet] = React.useState(null)
  const [outcome, setOutcome] = React.useState(null)

  const initiateLoan = async () => {
    const res = await fetch('/api/initiate-application')
    const data = await res.json()
    setApplicationId(data.applicationId)
  }

  React.useEffect(() => {
    initiateLoan()
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch('/api/balance-sheet', {
      method: 'GET',
      headers: {
        'application-id': applicationId || '',
      },
    })
    const data = await res.json()
    setBalanceSheet(data.data)
  }

  const getOutcome = async () => {
    if (balanceSheet) {
      const res = await fetch('/api/outcome', {
        method: 'POST',
        headers: {
          'application-id': applicationId || '',
        },
        body: JSON.stringify({
          name: form.name,
          establishedYear: form.establishedYear,
          balanceSheet,
          requestedLoanAmount: form.loanAmount,
        }),
      })

      const data = await res.json()
      console.log(data)
      setOutcome(data.data)
    }
  }

  return (
    <div className="hero">
      {!applicationId ? (
        <div className="text-center">
          <h1 className="text-2xl">Initiating Loan...</h1>
        </div>
      ) : (
        <div className="">
          <h1 className="text-xl text-center ">
            <span>Application ID:</span>
            <span className="text-blue-700"> {applicationId}</span>
          </h1>
          {outcome ? (
            <Outcome outcome={outcome} />
          ) : balanceSheet ? (
            <BalanceSheet balanceSheet={balanceSheet} details={form} getOutcome={getOutcome} />
          ) : (
            <Form form={form} setForm={setForm} handleSubmit={handleSubmit} />
          )}
        </div>
      )}
    </div>
  )
}
