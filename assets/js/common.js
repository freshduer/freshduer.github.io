// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
(function() {
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var toggleText = document.getElementById('theme-toggle-text');
        var toggleIcon = document.getElementById('theme-toggle-icon');
        if (toggleText && toggleIcon) {
            if (theme === 'dark') {
                toggleText.textContent = 'Daytime';
                toggleIcon.textContent = '☀️';
            } else {
                toggleText.textContent = 'Night';
                toggleIcon.textContent = '🌙';
            }
        }
    }

    window.applyTheme = applyTheme;

    document.addEventListener('DOMContentLoaded', function() {
        var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(currentTheme);

        var toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                var nowTheme = document.documentElement.getAttribute('data-theme') || 'light';
                var nextTheme = nowTheme === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme);
                localStorage.setItem('theme', nextTheme);
            });
        }
    });
})();

function syncPublicationCoverSizes() {
    document.querySelectorAll('.publication-item-row').forEach(function(row) {
        var textCol = row.querySelector('.publication-text-col');
        var cover = row.querySelector('.publication-cover-img');
        if (!textCol || !cover) return;

        cover.style.maxHeight = '';
        cover.style.width = '';
        var textHeight = textCol.getBoundingClientRect().height;
        cover.style.maxHeight = Math.round(textHeight) + 'px';
        cover.style.width = 'auto';
        cover.style.maxWidth = '100%';
    });
}

function initPublicationCoverSync() {
    syncPublicationCoverSizes();
    window.addEventListener('resize', syncPublicationCoverSizes);

    document.querySelectorAll('.publication-cover-img').forEach(function(cover) {
        cover.addEventListener('load', syncPublicationCoverSizes);
    });

    if (typeof ResizeObserver !== 'undefined') {
        var observer = new ResizeObserver(syncPublicationCoverSizes);
        document.querySelectorAll('.publication-text-col').forEach(function(textCol) {
            observer.observe(textCol);
        });
    }
}

$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
                if (element.hasClass('publication-cover-img')) {
                    syncPublicationCoverSizes();
                }
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    initPublicationCoverSync();
})
