'use strict';
var MnVoice = {
	escutar:function(language){

		var language = language || "pt-br";
		// Test browser support
		window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
		 
		//caso não suporte esta API DE VOZ            
		if (window.SpeechRecognition === null) {
			document.getElementById('unsupported').classList.remove('hidden');
		}else {
			//......
		}

		var recognizer = new window.SpeechRecognition();
		recognizer.lang=language;
		recognizer.continuous = true;
		recognizer.interimResults = true;

		recognizer.start();

		return recognizer;
	},
	transcrever:function(event){
		var transcript = "";
		for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal){
				transcript = event.results[i][0].transcript;
			}else{
				transcript += event.results[i][0].transcript;
			}
		}
		return transcript;
	}
}