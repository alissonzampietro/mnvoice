var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.text = "Você disse: " + transcript.textContent;
msg.lang = 'pt-BR';

msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

speechSynthesis.speak(msg);