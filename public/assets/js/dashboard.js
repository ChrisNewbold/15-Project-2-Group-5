function dashboardHbrsCode() {
  const bloggerAddUrlButton = document.getElementById("bloggerAddUrlButton");
  const bloggerAddUrlInput = document.getElementById("bloggerAddUrlInput");
  if (bloggerAddUrlInput !== null) {
    bloggerAddUrlInput.addEventListener("focus", () => {
      document.getElementById(")bloggerAddFormError-Span").style.display =
        "none";
    });
  }
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
          // eslint-disable-next-line no-console
          console.log(`ERROR 65.21986: ${err}`);
        }
      } else {
        document.getElementById("bloggerAddFormError-Span").innerText =
          "PLEASE ENTER A URL";
        document.getElementById("bloggerAddFormError-Span").style.display =
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
