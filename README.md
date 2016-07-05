#Voice recognize


## How to start:

* bower install mnvoice
* import file mnvoice.js <bower_components/mnvoice/mnvoice.js>
* start application using the following comands:

```javascript
var retorno = MnVoice.escutar();
retorno.onresult = function(escrita){
	var fala = MnVoice.transcrever(escrita);
}
```
* var "fala" will contain retur from microphone