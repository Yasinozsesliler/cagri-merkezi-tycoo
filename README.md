# Call Center Simülatör

Premium idle çağrı merkezi yönetim oyunu. Tek sayfalık statik site: derleme adımı yok.

## Vercel'e yükleme

**Yol 1 — Vercel CLI (en hızlısı)**
1. Bilgisayarında Node.js kurulu olsun.
2. Bu klasörün içinde terminal aç ve çalıştır:
   ```
   npx vercel
   ```
3. Vercel hesabınla giriş yap, soruları varsayılan cevaplarla geç (Framework: *Other*).
4. Önizleme adresi gelir. Kalıcı canlı adres için:
   ```
   npx vercel --prod
   ```

**Yol 2 — GitHub üzerinden (güncellemeler otomatik yayınlanır)**
1. Bu klasörü bir GitHub deposuna yükle.
2. vercel.com/new → "Import Git Repository" → depoyu seç → Framework Preset: *Other* → Deploy.
3. Depoya her yeni yükleme otomatik olarak siteye yansır.

## Dosyalar
- `index.html` — oyunun tamamı
- `manifest.webmanifest`, `icons/` — telefona "Ana ekrana ekle" ile uygulama gibi kurulabilmesi için
- `sw.js` — internet yokken de açılabilmesi için önbellek
- `vercel.json` — önbellek başlıkları

Kayıtlar oyuncunun tarayıcısında (localStorage) tutulur.
