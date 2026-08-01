import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      title={dark ? 'الوضع الفاتح' : 'الوضع الداكن'}
      aria-label="تبديل الوضع"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
