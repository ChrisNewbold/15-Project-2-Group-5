function menuCode() {
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton !== null) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        fetch("/api/logout", { method: "POST" })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") {
              window.location.href = "/";
            } else {
              //
            }
          });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`ERROR: ${err}`);
      }
    });
  }
  const creditButton = document.getElementById("creditButton");
  if (creditButton !== null) {
    creditButton.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        window.location.href = "/credit";
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`ERROR: ${err}`);
      }
    });
  }
}
if (document.readyState !== "loading") {
  menuCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    menuCode();
  });
}
