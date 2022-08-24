function dashboardHbrsCode() {
  const bloggerAddUrlButton = document.getElementById("bloggerAddUrlButton");
  const bloggerAddUrlInput = document.getElementById("bloggerAddUrlInput");
  bloggerAddUrlInput.addEventListener("focus", () => {
    document.getElementById(")bloggerAddFormError-Span").style.display = "none";
  });
  if (bloggerAddUrlButton !== null) {
    bloggerAddUrlButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (bloggerAddUrlInput.value !== "") {
        try {
          fetch("/api/article/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: bloggerAddUrlInput.value,
            }),
          });
        } catch (err) {
          console.log(`ERROR 65.21986: ${err}`);
        }
      } else {
        document.getElementNyId("bloggerAddFormError-Span").innerText =
          "PLEASE ENTER A URL";
        document.getElementById(")bloggerAddFormError-Span").style.display =
          "block";
      }
    });
  }
}
if (document.readyState !== "loading") {
  dashboardHbrsCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    dashboardHbrsCode();
  });
}
