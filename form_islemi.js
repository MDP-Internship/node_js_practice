var http = require('http');
var url = require('url');
http.createServer(function (req, res) {

  var URL_BILESEN = url.parse(req.url, parseQueryString=true);
  console.log(URL_BILESEN.KULLANICI_ADI);

  if (URL_BILESEN.query.KULLANICI_ADI) {
    var name = URL_BILESEN.query.KULLANICI_ADI;
    res.end(name); // sayfada basilan html 
  }else{
    var sayfa =
    '<!DOCTYPE html>'+
    '<form>' +
    '<input id=KULLANICI_ADI name=KULLANICI_ADI placeholder="ADI GIR" gerekli>'+
    '<button type=submit>GIR</button>'+
    '</form>';

    res.end(sayfa);
  }
}).listen(8000, "127.0.0.1");
console.log('Server http://127.0.0.1:8080/');