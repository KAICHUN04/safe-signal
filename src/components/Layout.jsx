import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#070B1A] text-slate-100">
      <div className="bg-grid">
        <NavBar />
        <main className="relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

