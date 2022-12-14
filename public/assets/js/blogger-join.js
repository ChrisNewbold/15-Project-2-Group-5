function myInitCode() {
  document
    .getElementById("bloggerJoin-FirstName")
    .addEventListener("focus", () => {
      document.getElementById("bloggerJoin-FirstName-Error").style.display =
        "none";
    });
  document
    .getElementById("bloggerJoin-LastName")
    .addEventListener("focus", () => {
      document.getElementById("bloggerJoin-LastName-Error").style.display =
        "none";
    });
  document.getElementById("bloggerJoin-Email").addEventListener("focus", () => {
    document.getElementById("bloggerJoin-Email-Error").style.display = "none";
  });
  document
    .getElementById("bloggerJoin-Password")
    .addEventListener("focus", () => {
      document.getElementById("bloggerJoin-Password-Error").style.display =
        "none";
    });
  document
    .getElementById("bloggerJoin-ConfirmPassword")
    .addEventListener("focus", () => {
      document.getElementById(
        "bloggerJoin-ConfirmPassword-Error"
      ).style.display = "none";
    });
  document
    .getElementById("bloggerJoin-Description")
    .addEventListener("focus", () => {
      document.getElementById("bloggerJoin-Description-Error").style.display =
        "none";
    });
  document.getElementById("bloggerJoin-URL").addEventListener("focus", () => {
    document.getElementById("bloggerJoin-URL-Error").style.display = "none";
  });
  document
    .getElementById("bloggerJoin-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let formProcess = true;
      if (!document.getElementById("bloggerJoin-FirstName").value) {
        formProcess = false;
        document.getElementById("bloggerJoin-FirstName-Error").innerHTML =
          "PLEASE ENTER YOUR FIRST NAME";
        document.getElementById("bloggerJoin-FirstName-Error").style.display =
          "block";
      }
      if (!document.getElementById("bloggerJoin-LastName").value) {
        formProcess = false;
        document.getElementById("bloggerJoin-LastName-Error").innerHTML =
          "PLEASE ENTER YOUR LAST NAME";
        document.getElementById("bloggerJoin-LastName-Error").style.display =
          "block";
      }
      if (
        !document
          .getElementById("bloggerJoin-Email")
          .value.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        formProcess = false;
        document.getElementById("bloggerJoin-Email-Error").innerHTML =
          "PLEASE ENTER A VALID EMAIL ADDRESS";
        document.getElementById("bloggerJoin-Email-Error").style.display =
          "block";
      }
      if (
        !document
          .getElementById("bloggerJoin-Password")
          .value.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
      ) {
        formProcess = false;
        document.getElementById("bloggerJoin-Password-Error").innerHTML =
          "PLEASE ENTER A PASSWORD<br>MUST INCLUDE 1 UPPERCASE, ONE LOWERCASE, ONE DIGIT,ONE SPECIAL, 8+ CHARS";
        document.getElementById("bloggerJoin-Password-Error").style.display =
          "block";
      }
      if (
        document.getElementById("bloggerJoin-ConfirmPassword").value !==
        document.getElementById("bloggerJoin-Password").value
      ) {
        formProcess = false;
        document.getElementById("bloggerJoin-ConfirmPassword-Error").innerHTML =
          "PLEASE CONFIRM YOUR PASSWORD";
        document.getElementById(
          "bloggerJoin-ConfirmPassword-Error"
        ).style.display = "block";
      }
      if (!document.getElementById("bloggerJoin-Description").value) {
        formProcess = false;
        document.getElementById("bloggerJoin-Description-Error").innerHTML =
          "PLEASE ENTER A DESCRIPTION OF YOU BLOG";
        document.getElementById("bloggerJoin-Description-Error").style.display =
          "block";
      }
      if (
        !document.getElementById("bloggerJoin-URL").value.match(
          // eslint-disable-next-line no-useless-escape
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        )
      ) {
        formProcess = false;
        document.getElementById("bloggerJoin-URL-Error").innerHTML =
          "PLEASE ENTER YOUR BLOG URL";
        document.getElementById("bloggerJoin-URL-Error").style.display =
          "block";
      }
      if (formProcess) {
        fetch(`/api/blogger/join`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: document.getElementById("bloggerJoin-Email").value,
            first_name: document.getElementById("bloggerJoin-FirstName").value,
            last_name: document.getElementById("bloggerJoin-LastName").value,
            password: document.getElementById("bloggerJoin-Password").value,
            description: document.getElementById("bloggerJoin-Description")
              .value,
            url: document.getElementById("bloggerJoin-URL").value,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // eslint-disable-next-line no-console
            if (data.status === "success") {
              window.location.href = "/dashboard";
            } else {
              document.getElementById("bloggerJoinForm").remove();
              document.getElementById(
                "bloggerJoinMessage"
              ).innerHTML = `ERROR 65.2134: ${data.message}`;
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(`ERROR: ${err}`);
            document.getElementById("bloggerJoinMessage").innerHTML =
              "ERROR 62.325";
          });
      }
    });
}
if (document.readyState !== "loading") {
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    myInitCode();
  });
}
