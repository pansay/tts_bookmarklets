var box = document.forms.editform.elements.wpTextbox1,
    replaces = [
        ["([^'])'([^'])", '$1’$2'],                     // apostrophe for single '
        [' {2,}', ' '],                                 // remove non-single spaces
        ['"(.*?)"', '«$1»'],                            // French quotes from regular double quotes
        ['« (.*?) »', '«$1»'],                          // French quotes remove breaking spaces
        ['« (.*?) »', '«$1»'],                          // French quotes remove non-breaking spaces
        ['«&nbsp;(.*?)&nbsp;»', '«$1»'],                // French quotes remove non-breaking spaces TODO improve this with better regexp below
        ['«(.*?)»', '«&nbsp;$1&nbsp;»'],                // French quotes add non-breaking spaces
        ['--', '—'],                                    // French emdash
        ['— ', '—'],                                    // French emdash remove non-breaking spaces
        [' —', ' —'],                                   // French emdash remove non-breaking spaces
        ['— ([^.]*?) —', '—&nbsp;$1&nbsp;—'],           // French emdash closed add non-breaking spaces
        // grr won't work in js ['(?<!&nbsp;)— ', '—&nbsp;'],           // French emdash opened add non-breaking space
        ['((?!&nbsp;).{6}|^.{0,5})— ', '$1—&nbsp;'],    // French emdash opened add non-breaking space
        [' ([;|?|!])', '&#8239;$1'],                    // French replace breaking with non-breaking thin space before ;?!
        [' :', '&nbsp;:']                               // French replace breaking with non-breaking space before :
    ],
    replace;

while ( replace = replaces.shift() ) {
    box.value=box.value.replace(new RegExp(replace[0],'ig'),replace[1]);
}
