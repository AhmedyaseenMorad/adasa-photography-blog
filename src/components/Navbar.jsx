import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-icon">📷</span>
          <span className="logo-text">عدسة</span>
        </Link>

        <div className="navbar-actions">
          <ThemeToggle />

          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="القائمة">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setOpen(false)}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setOpen(false)}
          >
            المدونة
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
