(function() {
    hljs.initHighlightingOnLoad();
    
    const _linksToStop = document.querySelectorAll('.lnk-stop');
    for (const _linkToStop of _linksToStop) {
        _linkToStop.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }
})();
