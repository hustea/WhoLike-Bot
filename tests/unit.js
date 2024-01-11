/*
    WhoLike Bot
    Unit Test
*/

const BotClass = require("../src/index");
const Bot = new BotClass();

global.config = require("../config");
global.libs = {
    axios: require("axios").default,
    Converter: require("../src/converter")
}

const UrunList = [
    "Gaming Konsol",
    "Yüz Havlusu",
    "Bilgisayar",
    "Yüz Bakım Kremi",
    "Lazerli Kalem",
    "Telefon",
    "Klavye"
];

async function main(){
    console.time("7 Adet Ürün Tipi Sorgulama + Conversion");
    for (const product of UrunList){
        await Bot.searchProduct(product)
    }
    console.timeEnd("7 Adet Ürün Tipi Sorgulama + Conversion")
}

main();