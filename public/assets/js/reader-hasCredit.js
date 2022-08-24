function hasCreditHbrsCode() {
  setTimeout(() => {
    window.parent.postMessage({
      splash: "reader-hasCredit",
      height: document.getElementById("wrapper").offsetHeight + 70,
    });
  }, 1000);
}
if (document.readyState !== "loading") {
  hasCreditHbrsCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    hasCreditHbrsCode();
  });
}
