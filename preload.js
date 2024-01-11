// Burası Preload kısmı, Arkaplan da aktif olacak kısım burasıdır.
global.config = require("./config");
global.libs = {
    axios: require("axios").default,
    Converter: require("./src/converter")
}

const axios = require("axios").default;

class BotPreload {
    constructor(){
        this.botInstance = new ( require("./src/index") )();
    }

    async process(queueString){
        let output = await (async () => {
            if      (queueString.startsWith("https://")) return await this.botInstance.getProductByURL  (       queueString      );
            else if (queueString.startsWith("id://"))    return await this.botInstance.getProductByID   (queueString.substring(5));
            else                                         return await this.botInstance.getProductsByName(       queueString      );
        })();
        output.auth = config.apiKey;
        await axios.post(config.apiUrl + config.apiEndpoints.write, output);
    }

    // Cronjob işleyişini ayarla
    cron(ms){
        let _JOBID = 0;
        const _JOB = async () => {
            // Aratımı Queue modundaymışçasına
            // işle (DIRTY HACK, FIP)
            clearInterval(_JOBID);
            console.log("cron: iterated.");

            // Aratılacak listeyi elden geçir ve
            // aratımı tamamla. 
            // (FIXME: Liste sağlayıcısı yok.)
            let list = ["gaming kulaklık"];
            for (const query of list)
                await this.process(query);

            // Aratım tamamlanınca queue'a geri
            // işle. (DIRTY HACK, FIP)
            _JOBID = setInterval(_JOB, ms)
        };
        _JOBID = setInterval(_JOB, ms);
    }
}

let Current = new BotPreload();
Current.cron(5_000);

