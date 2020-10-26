const unvan = require("test");

const daire = require("ara");

http
  .createServer(function (res, req) {
    unvan.doc("Abdullah Oğuz");
    unvan.prof("Fatih Oguz");
  })
  .listen(3200);

console.log("yarıcapı 5 olan dairenin alanı : " + daire.alan(5));
console.log("yarıcapı 5 olan dairenin cevresi :" + daire.cevre(4));
