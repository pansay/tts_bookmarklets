// remove test out buttons
document.querySelectorAll('._2GJb6>button, a[data-test=test-out-button]').forEach(item => item.parentNode.removeChild(item));

// remove undone
document.querySelectorAll('.W1dac>span:first-child').forEach(item => {if(item.parentNode.nodeName === 'SPAN'){item.parentNode.parentNode.removeChild(item.parentNode)}});

// remove done but faded
document.querySelectorAll('.W1dac').forEach(item => {if(!item.querySelectorAll('._2TMjc').length){item.parentNode.removeChild(item)}});
