import { useEffect } from 'react'

export default function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center px-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1030]/90 p-6 ring-1 ring-white/10 backdrop-blur">
        {title ? (
          <div className="text-base font-extrabold text-white">{title}</div>
        ) : null}
        <div className={title ? 'mt-3' : ''}>{children}</div>
      </div>
    </div>
  )
}

