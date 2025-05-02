import { CardActiveNow } from './components/card-active-now'
import { CardSales } from './components/card-sales'
import { CardSubscriptions } from './components/card-subscriptions'
import { CardTotalRevenue } from './components/card-total-revenue'
import { CardCharts } from './components/charts'
import { RecentSales } from './components/recent-sales'

export function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col gap-10 md:p-10 p-4'>
      <h1 className='text-4xl text-gray-100 font-semibold'>Dashboard</h1>

      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
        <CardTotalRevenue />

        <CardSubscriptions />

        <CardSales />

        <CardActiveNow />
      </div>

      <div className='flex md:flex-row flex-col gap-10'>
        <CardCharts />
        <RecentSales />
      </div>
    </div>
  )
}
