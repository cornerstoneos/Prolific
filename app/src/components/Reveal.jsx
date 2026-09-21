import { motion } from 'framer-motion'
import { t } from '../theme'

// Scroll-triggered reveal. Wrap every section and card in this.
export default function Reveal({ children, delay = 0, style, as = 'div', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      {...rest}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: t.ease, delay }}
      style={style}
    >
      {children}
    </M>
  )
}
