(function($, synth, langGroup) {

    function getVoices(langGroup) {
        var langGroupRegEx = new RegExp('^' + langGroup, 'g');        
        return synth.getVoices().filter(voice => voice.lang.match(langGroupRegEx));        
    }

    function speak(text, voice) {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.rate = .4;
        synth.speak(utterance);
    }

    function getText() {
        return $('.sentence .pre').text() + $('.correct .answer').text() + $('.sentence .post').text();
    }

    getVoices(langGroup).map(voice => {
            $(`<button class="btn btn-default " title="Play sentence audio" style="display: inline-block;">
                <span class="glyphicon glyphicon-volume-up">${voice.lang} - ${voice.name}</span>
               </button>`)
                .on('click', () => speak(getText(), voice))
                .insertAfter('.play-sentence-audio');
        });
    

})(jQuery, window.speechSynthesis, clozemaster.targetLanguageIso);
