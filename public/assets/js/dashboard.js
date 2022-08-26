function dashboardHbrsCode() {
  const bloggerAddUrlButton = document.getElementById("bloggerAddUrlButton");
  const bloggerAddUrlInput = document.getElementById("bloggerAddUrl-input");
  const bloggerAddUrlCreditInput = document.getElementById(
    "bloggerAddUrlCredit-input"
  );
  if (bloggerAddUrlInput !== null) {
    bloggerAddUrlInput.addEventListener("focus", () => {
      document.getElementById("bloggerAddFUrl-Error-Span").style.display =
        "none";
    });
    bloggerAddUrlCreditInput.addEventListener("focus", () => {
      document.getElementById("bloggerAddUrlCredit-Error-Span").style.display =
        "none";
    });
  }
  if (bloggerAddUrlButton !== null) {
    bloggerAddUrlButton.addEventListener("click", (e) => {
      e.preventDefault();
      let process = true;
      if (bloggerAddUrlInput.value === "") {
        document.getElementById("bloggerAddFUrl-Error-Span").innerHTML =
          "PLEASE ENTER A URL";
        document.getElementById("bloggerAddFUrl-Error-Span").style.display =
          "block";
        process = false;
      }
      if (bloggerAddUrlCreditInput.value === "") {
        document.getElementById("bloggerAddUrlCredit-Error-Span").innerHTML =
          "PLEASE ENTER A CREDIT COST";
        document.getElementById(
          "bloggerAddUrlCredit-Error-Span"
        ).style.display = "block";
        process = false;
      }

      if (process) {
        try {
          fetch("/api/article/addurl", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: bloggerAddUrlInput.value,
              credits: bloggerAddUrlCreditInput.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              document.getElementById("urlList").innerHTML += data.html;
            });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(`ERROR 65.21986: ${err}`);
        }
      } else {
        // eslint-disable-next-line no-console
        console.log(`ERROR 65.21276`);
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
