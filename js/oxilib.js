class Oxilib {
    constructor(respType, isAsinc = true){
        this.respType = respType;

         //Általános HttpRequqst hívás.
        this._sendHttpRequest = (method, url, data) => {
            //Promis létrhozása.
            const promise = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url, isAsinc);
    
                xhr.responseType = this.respType;

                if (data) {
                    xhr.setRequestHeader("Content-Type", "application/json");
                }   
                xhr.onload =  () => {
                    if (xhr.status >= 400) {
                        reject(xhr.response);
                } else {
                        resolve(xhr.response);
                }
            };
                //Hálózati, vagy egyéb okok miatt nincsen adat elérés.
                xhr.onerror = () => {
                    reject("Valami hiba történt");
                };
                xhr.send(JSON. stringify(data));
            });
            return promise;
        }
    };

    //Esemény kezelők deklarációi.
    getData = (method, url) => {
        return this._sendHttpRequest(method, url)
    }

    postData = (method, url, data) => {
       return this._sendHttpRequest(method, url, data)
    };
}
