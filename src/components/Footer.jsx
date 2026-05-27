import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="text-sm text-slate-300">
          <div className="font-semibold text-white">Safe Signal</div>
          <div>Spot the signs. Stay safe online.</div>
        </div>
      </Container>
    </footer>
  )
}

