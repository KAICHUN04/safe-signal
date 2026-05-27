import { readJSON, writeJSON } from './storage'

const STORAGE_KEY = 'theme'

export function getInitialTheme() {
  const saved = readJSON(STORAGE_KEY, null)
  if (saved === 'dark' || saved === 'light') return saved
  return 'dark'
}

export function applyTheme(theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  writeJSON(STORAGE_KEY, theme)
}

