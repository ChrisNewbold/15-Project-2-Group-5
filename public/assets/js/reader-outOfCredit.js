function outOfCredits() {
  setTimeout(() => {
    window.parent.postMessage({
      splash: "reader-outOfCredit",
      height: document.getElementById("wrapper").offsetHeight + 70,
    });
  }, 1000);
  document.getElementById("addCredit").addEventListener("click", (e) => {
    e.preventDefault();
    window.parent.postMessage({
      splash: "reader-outOfCredit2",
    });
  });
}
if (document.readyState !== "loading") {
  outOfCredits();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    outOfCredits();
  });
}
