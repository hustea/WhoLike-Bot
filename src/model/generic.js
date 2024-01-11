/*

  Örnek Ürün Modeli:
  (DİKKAT! Ürün modeli değişiklik gösterebilir, revisyona açıktır.)

{
        urunAdi: "Wireless Joystick - Playstation 4 Dualshock clone",
        urunLink: "https://trendyol.com/urunlinkdsajdshaksdhas",
        urunDetay: "Lorem Ipsum Dolor Sit Amet. Constectur Elit",
        urunFiyat: [156.3, "TRY"],
        urunYildiz: 4.2,
        urunBegeni: 21245,
        urunAntiBegeni: 613,
        urunSevgiDegeri: 0.8,
        urunYorumlar: [
            {
                paylasanKisi: "Ali Poyraz AYDIN"
                yorum: "Lorem Ipsum Dolor Sit Amet"
                yıldız: 3.2,
                sevgiOrani: 0.5
            },
            {
                paylasanKisi: "Emirhan SAVCİ"
                yorum: "Lorem Ipsum Dolor Sit Amet"
                yıldız: 4.3,
                sevgiOrani: 0.8
            }
        ]
}
*/

class Urun {
    constructor(product = {
        urunId: 0,
        urunKategori: "",
        urunAdi: "",
        urunLink: "",
        urunDetay: "",
        urunFiyat: [0, "TRY"],
        urunYildiz: 0,
        urunBegeni: 0,
        urunAntiBegeni: 0,
        urunSevgiDegeri: 0,
        urunYorumlar: []
    }){ Object.assign(this, product); }
}

module.exports = Urun;