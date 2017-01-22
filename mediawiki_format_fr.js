var box = document.forms.editform.elements.wpTextbox1,
    replaces = [
        ['"(.*?)"', '«&nbsp;$1&nbsp;»'],        // French quotes
        ["([^'])'([^'])", '$1’$2'],             // apostrophe
        [' {2,}', ' '],                         // remove double spaces
        ['--', '-']                             // emdash
    ],
    replace;


while ( replace = replaces.pop() ) {
    box.value=box.value.replace(new RegExp(replace[0],'ig'),replace[1]);
}
