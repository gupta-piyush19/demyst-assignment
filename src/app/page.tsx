import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'

export default function Home() {
  return (
    <div className="home bg-[#160a4c] text-white py-28">
      <div className="container">
        <div className="hero text-center">
          <h1 className={cn('heading text-6xl font-bold')}>Demyst Bank</h1>
          <p className={cn('text-[#d1cedb] text-2xl my-8')}>Banking for developers</p>
          <p className={cn('text-[#b9b6ca] text-sm')}>
            Now you can avail loans, credit cards, and other banking services with just a few
            clicks.
          </p>
          <Link href={'/loan-application'}>
            <Button className="mt-8" variant={'secondary'}>
              Get a loan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
