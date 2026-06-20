# Ders 06 — Git & GitHub Not Defteri

## Git nedir? GitHub nedir? (karıştırma!)

- **Git** = bilgisayarında çalışan bir **sürüm kontrol sistemi**. Kodunun
  fotoğraflarını (commit) çeker; "dün çalışıyordu, bugün bozuldu" derdini bitirir.
  İstediğin ana geri dönebilirsin. İnternet gerektirmez.
- **GitHub** = Git repolarını **internette saklayan** site (bulut yedeği +
  paylaşım + işbirliği). Git'in "çevrimiçi evi" gibi düşün.

> Benzetme: **Git** = oyundaki "kayıt" özelliği. **GitHub** = kayıtlarını
> buluta yükleyip her yerden erişmen.

## Temel kavramlar

- **repository (repo)** = Git'in takip ettiği proje klasörü.
- **commit** = belirli bir andaki anlık görüntü ("kayıt noktası") + bir mesaj.
- **staging (sahne)** = commit'e GİRECEK değişiklikleri seçtiğin ara alan.

İş akışı hep şu sırayla:

```
dosyaları değiştir  →  git add (sahnele)  →  git commit (kaydet)  →  git push (GitHub'a yolla)
```

## Temel komutlar

| Komut | Ne yapar |
|---|---|
| `git init` | Klasörü Git reposu yapar (bir kez, en başta) |
| `git status` | Ne değişti, ne sahnelendi — durumu gösterir |
| `git add <dosya>` | Bir dosyayı sahnele. `git add -A` → hepsini |
| `git commit -m "mesaj"` | Sahnelenenleri mesajla kaydet |
| `git log` | Geçmiş commit'leri listele (`--oneline` kısa hali) |
| `git diff` | Henüz sahnelenmemiş değişiklikleri göster |

## GitHub'a gönderme (push)

İlk kez gönderirken:

```bash
# 1) GitHub'da boş bir repo oluştur (web sitesinden veya gh ile)
# 2) Yerel repoyu o uzak repoya bağla:
git remote add origin https://github.com/KULLANICI_ADIN/REPO_ADI.git

# 3) Ana dalın adını "main" yap ve ilk kez gönder:
git branch -M main
git push -u origin main
```

Sonraki gönderimlerde sadece:

```bash
git add -A
git commit -m "değişikliği anlatan mesaj"
git push
```

## İyi commit mesajı

- Ne YAPTIĞINI kısaca anlat: "bahşiş hesaplayıcı eklendi"
- Emir kipinde, kısa ve net. Roman yazma. 🙂
