const KEY_PREFIX = 'safe-signal:'

export function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function writeJSON(key, value) {
  try {
    localStorage.setItem(KEY_PREFIX + key, JSON.stringify(value))
  } catch {
    // ignore write errors (private mode / quota)
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(KEY_PREFIX + key)
  } catch {
    // ignore
  }
}

