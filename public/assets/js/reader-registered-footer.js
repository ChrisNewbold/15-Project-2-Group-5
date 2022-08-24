function myInitCode() {
  setTimeout(() => {
    window.parent.postMessage({
      splash: "readerRegistered",
      height: document.getElementById("wrapper").offsetHeight + 70,
    });
  }, 1000);
  const buttonElement = document.getElementById("readArticle");
  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    window.parent.postMessage({
      splash: "readerRegistered2",
      height: document.getElementById("wrapper").offsetHeight + 70,
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
