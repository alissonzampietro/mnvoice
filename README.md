#Voice recognize


## How to start:

* bower install mnvoice
* import file mnvoice.js <bower_components/mnvoice/mnvoice.js>
* start application using the following comands:

```javascript
//como parâmetro do escutar você pode inserir a sigla do idioma que deseja que o recognizer identifique
var retorno = MnVoice.escutar("pt-br");
retorno.onresult = function(escrita){
	var fala = MnVoice.transcrever(escrita);
}
```
* var "fala" will contain retur from microphone