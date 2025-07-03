const btn = document.getElementById('btn');
const txtInput = document.getElementById('textInput');
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
	speech.voice = voices[0];

	voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
voiceSelect.addEventListener("change", () => {
	speech.voice = voices[voiceSelect.value];

});

btn.addEventListener("click", () => {
	speechSynthesis.cancel(); //stops ongoing and start new
	speech.text = txtInput.value;
	window.speechSynthesis.speak(speech);
	
	//fix where constantly going back to default voice
 	const selectedVoice = voices.find(v => v.voiceURI === voiceSelect.value);
    if (selectedVoice) {
      speech.voice = selectedVoice;
    }
});
