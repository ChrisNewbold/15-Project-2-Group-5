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
    .getElementById("bloggerJoin-ConfirmPassword-Error")
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
        document.getElementById("bloggerJoin-FirstName-Error").innerText =
          "PLEASE ENTER YOUR FIRST NAME";
        document.getElementById("bloggerJoin-FirstName-Error").style.display =
          "block";
      }
      if (!document.getElementById("bloggerJoin-LastName").value) {
        formProcess = false;
        document.getElementById("bloggerJoin-LastName-Error").innerText =
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
        document.getElementById("bloggerJoin-Email-Error").innerText =
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
        document.getElementById("bloggerJoin-Password-Error").innerText =
          "PLEASE ENTER A PASSWORD";
        document.getElementById("bloggerJoin-Password-Error").style.display =
          "block";
      }
      if (
        document.getElementById("bloggerJoin-ConfirmPassword-Error").value !==
        document.getElementById("bloggerJoin-Password").value
      ) {
        formProcess = false;
        document.getElementById("bloggerJoin-ConfirmPassword-Error").innerText =
          "PLEASE CONFIRM YOUR PASSWORD";
        document.getElementById(
          "bloggerJoin-ConfirmPassword-Error"
        ).style.display = "block";
      }
      if (!document.getElementById("bloggerJoin-Description").value) {
        formProcess = false;
        document.getElementById("bloggerJoin-Description-Error").innerText =
          "PLEASE ENTER A DESCRIPTION OF YOU BLOG";
        document.getElementById("bloggerJoin-Description-Error").style.display =
          "block";
      }
      if (!document.getElementById("bloggerJoin-URL").value) {
        formProcess = false;
        document.getElementById("bloggerJoin-URL-Error").innerText =
          "PLEASE ENTER A PASSWORD";
        document.getElementById("bloggerJoin-URL-Error").style.display =
          "block";
      }
      if (formProcess) {
        //
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
