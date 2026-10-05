// Web oyununu Android uygulamasının içine konacak "www" klasörüne kopyalar.
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';
const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const f of ['index.html', 'privacy.html', 'manifest.webmanifest']) cpSync(f, `${out}/${f}`);
for (const d of ['fonts', 'icons']) if (existsSync(d)) cpSync(d, `${out}/${d}`, { recursive: true });
console.log('www hazır');
