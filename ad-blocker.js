(function() {
  function a(a) {
    try {
      var c = new URL(a.src || "http://unknown-src").origin;
      b.includes(c) || (a.parentElement.removeChild(a), console.log("REMOVED AD:", c))
    } catch (a) {
      console.log("ERROR REMOVING AD:", a)
    }
  }
  const b = ["https://disqus.com", document.origin];
  window.setInterval(function() {
    for (var b of document.getElementsByTagName("iframe")) a(b)
  }, 1)
})()
