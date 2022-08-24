function hasCreditHbrsCode() {}
if (document.readyState !== "loading") {
  hasCreditHbrsCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    hasCreditHbrsCode();
  });
}
