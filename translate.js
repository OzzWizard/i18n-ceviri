function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return match ? match[1] : null;
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + ';';
}


$('.btn').click(function () {
        var lang = $(this).data('i18n');
        i18next.changeLanguage(lang, function (err, t) {
        $('body').localize();
        setCookie('lang', lang);
        });
    });

i18next.use(window.i18nextXHRBackend).init(
  {
    debug: false,
    fallbackLng: 'tr',
    lng:getCookie('lang') || 'tr',
    backend: {
      loadPath: window.location + 'data/locales/{{lng}}.json',
    },
    returnObjects: true
  },
  function (err, t) {
    // resources have been loaded
    jqueryI18next.init(i18next, $);
    $('body').localize();
  });