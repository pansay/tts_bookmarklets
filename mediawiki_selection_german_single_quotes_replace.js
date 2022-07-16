var box = document.forms.editform.elements.wpTextbox1,
    len = box.value.length,
    start = box.selectionStart,
    end = box.selectionEnd,
    selectedText = box.value.substring(start, end),
    txtBefore = box.value.substring(0, start),
    txtAfter = box.value.substring(end, len);

selectedText = selectedText.replace(new RegExp('"(.*?)"', 'ig'), '‘‚$1‘');
box.value = txtBefore + selectedText + txtAfter;
