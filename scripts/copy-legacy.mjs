// Copies the legacy static site (repo-root index.html + its image assets) into
// dist/ so the Netlify publish directory serves both: legacy site at /, the
// React marketing engine at /engine/.
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
mkdirSync(dist, { recursive: true })

const legacy = readdirSync(root).filter((f) => /^(index\.html|.*\.(jpe?g|png|webp|svg))$/i.test(f))

let copied = 0
for (const file of legacy) {
  if (!existsSync(join(root, file))) continue
  copyFileSync(join(root, file), join(dist, file))
  copied++
}
console.log(`[copy-legacy] copied ${copied} legacy file(s) into dist/`)
