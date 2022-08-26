function outOfCredits() {
  window.parent.postMessage({
    splash: "reader-outOfCredit",
  });

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
