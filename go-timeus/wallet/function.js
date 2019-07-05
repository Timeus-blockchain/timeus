function authTimeusRequests(token, baseurl) {
  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      // Ensure we don't send our token anywhere unexpected
      var baseOrigin = (new URL(baseurl)).origin;
      var requestedOrigin = (new URL(settings.url)).origin;
      if (baseOrigin === requestedOrigin) {
        xhr.setRequestHeader('X-TEUS-API-Token', token);
      }
    }
  });
}

function localstorage_to_input(keyname) {
  var v = window.localStorage.getItem(keyname);
  console.log('localStorage[' + keyname + ']:', v)
  if (v) {
    $('#' + keyname).val(v);
  }
}
