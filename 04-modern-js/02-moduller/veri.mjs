/*
  ============================================================
  MODÜL: veri.mjs
  ============================================================
  Veriyi ayrı bir modülde tutmak çok yaygındır: kod düzenli kalır,
  aynı veriyi birçok yerden import edebilirsin.
*/

// Named export: ürün listemiz (Ders 02/03'ten tanıdık)
export const urunler = [
  { ad: "Klavye", fiyat: 450, stokta: true },
  { ad: "Mouse", fiyat: 250, stokta: true },
  { ad: "Monitör", fiyat: 3200, stokta: false },
];
