function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function CheckCookie() {
  var myCookie = getCookie("bot");
  if (myCookie !== null) {
    // do cookie doesn't exist stuff;
    console.log("Cookie Clear !!!");
    document.cookie = "bot=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}
var event = new KeyboardEvent("keydown", {
  key: "g",
  ctrlKey: true,
});
setInterval(async () => {
  await CheckCookie();
  await document.dispatchEvent(event);
  if (getCookie("pop_count") % 1000 === 0) {
    await console.log(`[${new Date().toLocaleTimeString()}]`, document.cookie);
  }
}, 10);
