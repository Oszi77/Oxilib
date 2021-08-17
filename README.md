# Oxilib

HTML használata: <script src="./js/oxilib.js"></script> 
A saját JS kódot írhatjuk <script> tag -ek között vagy külön js fájlban pl:

<script src="./js/main.js"></script>

Gombok id attributumaihoz rendeljük általában click, vagy tetszőleges JS eseményt.

Jelenleg GET felküldés és POST letöltés lehetséges, de megoldható, hogy más metódusok is legyenek. 
Jelenleg aszinkron módban működik, de hozzáadásra kerül majd a mód választás lehetősége is a construktorban.

Válasz típusa a responseType tulajdonságban a sztandard JS XHR objektum ezen tulajdonságai használhatóak. 
.getData(method, url) method: HTTP/HTTPS metódus url: BackEnd url .postData(method, url, data) method: HTTP/HTTPS metódus url: BackEnd url data: Egy szabályos JS objektum
