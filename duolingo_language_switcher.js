$.post('https://www.duolingo.com/api/1/me/switch_language', {
    learning_language: 'ru',
    from_language: 'en'
}, function() {
	location.reload();
});
