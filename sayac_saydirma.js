const http = require("http");

var port =  8000; 
var SAYAC = 0;
http.createServer(function (req, res) {

/* console.log("ilk server deneyimi "); */
/* response.writeHead(200,{"Content-Type": "text/plain"});
response.write("MDP Group");
response.end(); */
SAYAC = SAYAC+1;
 
var path = req.url;
console.log("ISTEM=" + path + " SAYAC=" + SAYAC);
res.writeHead(200, {'Content-Type': 'text/html'}); 

if (path == "/") {
    res.end("MERHABA ISTEMCI # " + SAYAC + ".<br><a href='/sayfa2'>sayfa 2</a>\n");
} else if (path == "/sayfa2") {
    res.end("sayfa 2" +".<br><a href='/'>geri</a>\n");
}


}).listen(port);
console.log("sunucu dinleniyor");

