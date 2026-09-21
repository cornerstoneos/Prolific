import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './routes/Home'
import Engine from './routes/Engine'
import Listing from './routes/Listing'
import Schema from './routes/Schema'

// Anchor CTAs (href="#lead") must keep working after a client-side
// navigation, and a fresh route should start at the top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  // BASE_URL is '/engine/' -- the legacy static site still owns the deploy
  // root, so the SPA mounts under a subpath.
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content-engine" element={<Engine />} />
        <Route path="/listing/:slug" element={<Listing />} />
        <Route path="/schema" element={<Schema />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
