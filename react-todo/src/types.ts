/*
  Bir GÖREVİN (todo) şekli. Uygulamadaki tüm dosyalar bu tipi paylaşır.
  Ders 02'deki "nesne" + Ders 04'teki "tip" bir arada.
*/
export type Todo = {
  id: number;      // benzersiz kimlik → silme/işaretleme bunu kullanır
  metin: string;   // görev yazısı
  tamam: boolean;  // yapıldı mı? (true/false)
};
