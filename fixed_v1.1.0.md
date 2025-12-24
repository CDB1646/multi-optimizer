# Ultimate Optimizer - v1.1.0 Fix & Update Notes 🛠️

Bu sürüm, kullanıcı geri bildirimleri doğrultusunda sistem hatalarının giderildiği ve güncelleme motorunun tamamen yenilendiği "Stabilite" sürümüdür.

### 🔧 Önemli Hata Gidermeleri (Hotfixes)
- **Erişim Engeli (Permission Error) Çözüldü:** Programın `Program Files` gibi korumalı klasörlerde çalışırken hata vermesi engellendi. Tüm log ve ayar dosyaları güvenli `%LOCALAPPDATA%` yoluna taşındı.
- **Sonsuz Güncelleme Döngüsü Giderildi:** Kullanıcı en son sürümü yüklese bile tekrar güncelleme uyarısı almasına neden olan bellek senkronizasyon hatası kökten çözüldü.
- **Sayısal Sürüm Karşılaştırma:** Güncelleme kontrolü artık sürüm numaralarını metin olarak değil, sayısal değer olarak (v1.1.0 > v1.0.9) akıllıca analiz ediyor.

### 🚀 Yeni Eklenen Teknik Özellikler
- **Akıllı Bellek Tazeleme:** Kod kendini yamaladığı (Self-Patch) an, hafızadaki sürüm numarasını anında güncelleyerek yeniden başlatmaya gerek kalmadan doğru sürümü gösterir.
- **Gelişmiş Güncelleme Notları:** Yenilikler penceresinde `\n` gibi teknik kodlar yerine artık tertemiz, alt alta düzenli metinler görünüyor.
- **Dinamik Veri Yükleyici:** `Version.json` ve `main.py` arasındaki senkronizasyon %100 uyumlu hale getirildi.

### 🎨 Görsel İyileştirmeler
- **Karanlık Tema Diyalogları:** Güncelleme ve uyarı pencereleri tamamen uygulama temasına (Mor/Siyah) büründü, beyaz parlama sorunu giderildi.

**Sürüm:** v1.1.0
**Durum:** Full Stable 🎯🦾
