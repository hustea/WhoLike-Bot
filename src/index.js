module.exports = class {
    constructor(){
        // DN: Örnek olarak Trendyol API'ını tanıtıyorum.
        this.apiName = "Trendyol";
        this.apiURLS = {
            suggestion: parameter => "https://public.trendyol.com/discovery-search-websfxsuggestions-santral/api/suggestions?culture=tr-TR&text=" + encodeURIComponent(parameter) + "&searchTestParameter=SuggestionQF_A%2CBrowsingHistoryCard_A%2CSuggestion_A%2CSuggestionBadges_B%2CSuggestionPopularCTR_B&platform=WEB&channelId=1",
            search:     parameter => "https://public.trendyol.com/discovery-web-searchgw-service/v2/api/infinite-scroll/sr?q=" + encodeURIComponent(parameter) + "&qt=" + encodeURIComponent(parameter) + "&st=" + encodeURIComponent(parameter) + "&os=1&pi=3&culture=tr-TR&userGenderId=1&pId=&isLegalRequirementConfirmed=false&searchStrategyType=DEFAULT&productStampType=TypeA&scoringAlgorithmId=2&fixSlotProductAdsIncluded=true&searchAbDecider=SuggestionQF_A%2CBSA_D%2CBadgeBoost_A%2CBrowsingHistoryCard_A%2CSuggestion_A%2CRelevancy_1%2CFilterRelevancy_1%2CListingScoringAlgorithmId_1%2CSmartlisting_2%2CSuggestionBadges_B%2CProductGroupTopPerformer_B%2COpenFilterToggle_2%2CRF_1%2CRR_2%2CBS_2%2CSuggestionPopularCTR_B&location=null&initialSearchText=wireless+joystick&offset=48&channelId=1"
        }
        
        // DN: Burada API hazırlık işlemlerinizi gerçekleştirin,
        //     Kullanabiliyorsanız Axios ya da node:fetch kullanın.
        //     Döndürülecek değer olarak ortak model dosyası model
        //     klasöründe bulunmaktadır.
    }

    async searchProduct(productName){
        // DN: Burada İsteklerinizi Gerçekleştirin.
        //     Aşağıdaki örnekteki gibi yapabilirsin.
        let out = await libs.axios.get(this.apiURLS.search(productName));

        // Çıkış değerleri, JSON formatında
        // out.data.result yolunda bulunur.
        // ürünler ise az önce bahsettiğim
        // yolun içindeki products yolunda
        // dize olarak bulunur.
        let data = [];
        out.data.result.products.forEach(product => {
            data.push(libs.Converter.GenericConverter(product));
        });
        
        // İsteklerinizi tamamladığınızda lütfen verilerinizi
        // işleyip ortaya çıkan veriyi geri döndürün.
        return {
            data
        };
    }

    async getProductsByName(productName){
        // DN: Burada ürünleri, ürün adına göre listele.
        //     ve listelemeyi yaparken atanan standartlara
        //     göre hazırla.

        // Kodu yazarken aşağıdaki dummy return 
        // eylemini silin.
        return this.searchProduct(productName);
    }

    async getProductByID(productID){
        // DN: Burada ürünü, ürünün ID si ile çek.
        //     ve çekilen ürünün standartlara uygun
        //     olduğuna emin ol.

        // Kodu yazarken aşağıdaki dummy return 
        // eylemini silin.
        return;
    }

    async getProductByURL(productURL){
        // DN: Burada ürünü, ürünün URL si ile çek.
        //     ve çekilen ürünün standartlara uygun
        //     olduğuna emin ol.

        // Kodu yazarken aşağıdaki dummy return 
        // eylemini silin.
        return;
    }

}