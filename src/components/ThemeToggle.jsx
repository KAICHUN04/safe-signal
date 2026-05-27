import { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme } from '../lib/theme'
import Button from './Button'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <Button
      variant="secondary"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
    >
      <span className="text-xs">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </Button>
  )
}

