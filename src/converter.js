// Bu dosya, sisteme gelecek olan verilerin dönüşümünden
// sorumludur. Lütfen silmeyin, düzenlenicek ise botun
// kullandığı API'ın gönderdiği veri üzerine çalışın
const OutModel = require("./model/generic");

module.exports = {
    GenericConverter(dataIn){
        return new OutModel({
            urunId: dataIn.id,
            urunKategori: dataIn.categoryName ?? "Bilinmeyen",
            urunAdi: dataIn.name ?? "Bilinmeyen",
            urunLink: "https://trendyol.com" + (dataIn.url ?? "/404"),
            urunBegeni: Math.floor((dataIn.ratingScore ?? {totalCount: 1}).totalCount / (5 / (dataIn.ratingScore ?? {averageRating: 1}).averageRating)),
            urunAntiBegeni: (dataIn.ratingScore ?? {totalCount: 1}).totalCount - Math.floor((dataIn.ratingScore ?? {totalCount: 1}).totalCount / (5 / (dataIn.ratingScore ?? {averageRating: 1}).averageRating)),
            urunDetay: dataIn.description ?? dataIn.imageAlt ?? "",
            urunFiyat: [(dataIn.price ?? {sellingPrice: 0}).sellingPrice, "TRY"],
            urunSevgiDegeri: 5 / (dataIn.ratingScore ?? {averageRating: 1}).averageRating ?? 0,
            urunYildiz: (dataIn.ratingScore ?? {averageRating: 1}).averageRating ?? 0,
            urunYorumlar: dataIn.comments ?? []
        })
    }
}