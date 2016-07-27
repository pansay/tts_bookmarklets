(function(synth, lang, langIndex) {

    var voice = synth.getVoices().filter(voice => voice.lang === lang)[langIndex],
        text = window.getSelection().toString();

    function speak(text, voice) {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.lang = lang;
        utterance.rate = .4;
        synth.speak(utterance);
    }

    speak(text, voice);

})(window.speechSynthesis, 'pt-PT', 0);
