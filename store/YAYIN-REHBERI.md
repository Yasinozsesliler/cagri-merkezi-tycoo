# Google Play'de yayınlama rehberi

## 0. Bu depoda neler hazır?
| Klasör / dosya | Ne işe yarar |
|---|---|
| `android/` | Oyunun Android uygulaması (Capacitor 8, hedef API 36) |
| `.github/workflows/android.yml` | Her güncellemede GitHub sunucularında APK ve AAB üretir |
| `store/` | Mağaza görselleri, metinler, bu rehber |
| `privacy.html` | Gizlilik politikası (Vercel'de `/privacy` adresinde yayında) |
| `resources/` | Uygulama ikonu ve açılış ekranı kaynakları |

Paket adı: `com.ozsesliler.callcentersimulator` — Play'e ilk yüklemeden sonra **değiştirilemez**. Değiştirmek istersen ilk yüklemeden önce `capacitor.config.json`, `android/app/build.gradle` ve `android/app/src/main/res/values/strings.xml` içinde değiştir.

## 1. İmza anahtarını GitHub'a ekle (bir kez)
Sana ayrıca verilen `github-secrets.txt` dosyasındaki 4 değeri ekle:
Depo → **Settings → Secrets and variables → Actions → New repository secret**
- `ANDROID_KEYSTORE_BASE64`
- `ANDROID_KEYSTORE_PASSWORD`
- `ANDROID_KEY_ALIAS`
- `ANDROID_KEY_PASSWORD`

Sonra **Actions → Android derlemesi → Run workflow**. 5–8 dakikada depo sayfasının **Releases** bölümünde iki dosya çıkar:
- `.aab` → Play Console'a yüklenecek dosya
- `.apk` → telefona doğrudan kurup denemek için

`upload-keystore.jks` ve `github-secrets.txt` dosyalarını güvenli bir yerde yedekle. Depoya koyma.

## 2. Play Console hesabı
- play.google.com/console → geliştirici hesabı (tek seferlik 25 USD).
- **Kişisel hesaplar için kural:** 13 Kasım 2023'ten sonra açılan kişisel hesaplar, uygulamayı herkese açmadan önce **en az 12 test kullanıcısıyla 14 gün kesintisiz kapalı test** yapmak zorunda. Arkadaşlarından/ailenden 12+ kişinin Gmail adresini topla.

## 3. Uygulamayı oluştur
Play Console → **Uygulama oluştur**
- Ad: Çağrı Merkezi Tycoon · Varsayılan dil: Türkçe · Oyun · Ücretsiz

## 4. Mağaza girişi (Main store listing)
- Metinler: `store/magaza-metinleri.md`
- Uygulama simgesi: `store/icon-512.png`
- Öne çıkan görsel: `store/feature-graphic.png` (1024×500)
- Telefon ekran görüntüleri: `store/screenshots/` (8 adet, 1080×1920)
- Kategori: **Simülasyon** · Etiketler: Idle, Tycoon, İşletme

## 5. Uygulama içeriği (App content) formları
**Gizlilik politikası URL'si:** `https://SENIN-VERCEL-ADRESIN/privacy` (ör. cagri-merkezi-tycoo.vercel.app/privacy)

**Reklamlar:** Hayır, reklam içermiyor.

**Uygulama erişimi:** Tüm işlevler özel erişim olmadan kullanılabilir.

**Veri güvenliği (Data safety):**
- Uygulamanız kullanıcı verisi topluyor veya paylaşıyor mu? → **Hayır**
- (Kayıtlar yalnızca cihazda tutulur, hiçbir sunucuya gönderilmez.)

**İçerik derecelendirmesi (IARC anketi):** Kategori “Oyun”. Şiddet, cinsellik, kumar (gerçek para), uyuşturucu, kullanıcı etkileşimi/paylaşımı: **Hayır**. Oyundaki “şans çarkı” gerçek para veya satın alma içermez → “simüle kumar: hayır / gerçek para yok”. Beklenen sonuç: PEGI 3 / Herkes.

**Hedef kitle:** 13 yaş ve üzeri (13–15, 16–17, 18+). Çocuklara yönelik değil.

**Haber uygulaması:** Hayır · **COVID/sağlık:** Hayır · **Devlet uygulaması:** Hayır · **Finansal özellikler:** Yok

## 6. Kapalı test (zorunlu 14 gün)
Test et ve yayınla → **Kapalı test** → yeni kanal (ör. “Test”) →
- **Yeni sürüm oluştur** → Releases'tan indirdiğin `.aab` dosyasını yükle
- Play App Signing'i kabul et (önerilen)
- Testçiler: e-posta listesi oluştur, 12+ adres ekle → testçilere katılım bağlantısını gönder
- 14 gün boyunca 12 kişi kesintisiz kayıtlı kalmalı

## 7. Üretime (herkese açık) geçiş
14 gün dolunca Play Console'da **Üretim erişimi başvurusu** butonu açılır. Kısa anketi doldur (test sürecinde ne öğrendin, neyi düzelttin). Onaydan sonra **Üretim → Yeni sürüm** → aynı veya daha yeni `.aab` → yayınla. İnceleme genelde birkaç gün sürer.

## 8. Güncelleme yayınlamak
Depoya her yeni yükleme otomatik olarak sürüm numarası artmış yeni bir `.aab` üretir. Play Console'da ilgili kanalda **Yeni sürüm** → yeni `.aab`'yi yükle.

## Notlar
- Oyundaki şirket adları gerçek markalardan esinlenen esprili parodilerdir. İnceleme sırasında itiraz gelirse bunları kurgusal adlarla değiştirmek tek satırlık iştir.
- Uygulama internet olmadan çalışır; yazı tipleri ve tüm dosyalar uygulamanın içindedir.
