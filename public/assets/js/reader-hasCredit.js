function hasCreditHbrsCode() {
  setTimeout(() => {
    window.parent.postMessage({
      splash: "reader-hasCredit",
      height: document.getElementById("wrapper").offsetHeight + 70,
    });
  }, 1000);
  document.getElementById("readArticle").addEventListener("click", (e) => {
    e.preventDefault();
    window.parent.postMessage({
      splash: "reader-hasCredit2",
    });
  });
}
if (document.readyState !== "loading") {
  hasCreditHbrsCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    hasCreditHbrsCode();
  });
}
