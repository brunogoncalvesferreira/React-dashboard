import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app-layout'
import { Dashboard } from './pages/app/dashboard/page'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
])
