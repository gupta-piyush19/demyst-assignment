import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Button} from '@/components/ui/button'

export default function Form({
  form,
  setForm,
  handleSubmit,
}: {
  form: any
  setForm: (form: any) => void
  handleSubmit: (e: any) => void
}) {
  return (
    <form onSubmit={handleSubmit} className="flex max-w-lg mx-auto mt-4 gap-4 flex-col">
      <div className="">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />
      </div>
      <div className="">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />
      </div>
      <div className="">
        <Label htmlFor="businessName">Business Name</Label>
        <Input
          id="businessName"
          type="text"
          required
          value={form.businessName}
          onChange={e => setForm({...form, businessName: e.target.value})}
        />
      </div>
      <div className="">
        <Label htmlFor="establishedYear">Established Year</Label>
        <Input
          id="establishedYear"
          type="text"
          required
          value={form.establishedYear}
          onChange={e => setForm({...form, establishedYear: e.target.value})}
        />
      </div>
      <div className="">
        <Label htmlFor="loanAmount">Loan Amount</Label>
        <Input
          id="loanAmount"
          type="text"
          required
          value={form.loanAmount}
          onChange={e => setForm({...form, loanAmount: e.target.value})}
        />
      </div>
      <div className="">
        <Label htmlFor="accountingProvider">Accounting Provider</Label>
        <Select onValueChange={val => setForm({...form, accountingProvider: val})} required>
          <SelectTrigger className="">
            <SelectValue placeholder="Select an Accounting Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Xero">Xero</SelectItem>
            <SelectItem value="MYOB">MYOB</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Get balance sheet</Button>
    </form>
  )
}
