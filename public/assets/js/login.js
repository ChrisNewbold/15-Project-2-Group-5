function loginHbrsCode() {
  document.getElementById("login-Email").addEventListener("focus", () => {
    document.getElementById("login-Error").style.display = "none";
  });
  document.getElementById("login-Password").addEventListener("focus", () => {
    document.getElementById("login-Error").style.display = "none";
  });
  document.getElementById("bloggerlogIn-Password");
  document.getElementById("login-login").addEventListener("click", (e) => {
    e.preventDefault();
    try {
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginEmail: document.getElementById("bloggerLogin-Email".value),
          loginPassword: document.getElementById("bloggerLogin-Password".value),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            window.location.href = "/homepage";
          } else {
            // eslint-disable-next-line no-console
            document.getElementById("login-Error").innerText = data.message;
            document.getElementById("login-Error").style.display = "block";
          }
        });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`ERROR: ${err}`);
    }
  });
}
if (document.readyState !== "loading") {
  loginHbrsCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    loginHbrsCode();
  });
}
