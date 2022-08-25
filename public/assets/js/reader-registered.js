function myInitCode() {
  window.parent.postMessage({
    splash: "readerRegistered",
    height: document.getElementById("wrapper").offsetHeight + 70,
  });
  const buttonElement = document.getElementById("readArticle");
  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    window.parent.postMessage({
      splash: "readerRegistered2",
    });
  });
}
if (document.readyState !== "loading") {
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    myInitCode();
  });
}
