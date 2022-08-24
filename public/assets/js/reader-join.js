function myInitCode() {
  document
    .getElementById("readerJoin-FirstName")
    .addEventListener("focus", () => {
      document.getElementById("readerJoin-FirstName-Error").style.display =
        "none";
    });
  document
    .getElementById("readerJoin-LastName")
    .addEventListener("focus", () => {
      document.getElementById("readerJoin-LastName-Error").style.display =
        "none";
    });
  document.getElementById("readerJoin-Email").addEventListener("focus", () => {
    document.getElementById("readerJoin-Email-Error").style.display = "none";
  });
  document
    .getElementById("readerJoin-Password")
    .addEventListener("focus", () => {
      document.getElementById("readerJoin-Password-Error").style.display =
        "none";
    });
  document
    .getElementById("readerJoin-ConfirmPassword")
    .addEventListener("focus", () => {
      document.getElementById(
        "readerJoin-ConfirmPassword-Error"
      ).style.display = "none";
    });
  document.getElementById("readerJoin-Terms").addEventListener("focus", () => {
    document.getElementById("readerJoin-Terms-Label").style.color = "black";
    document.getElementById("readerJoin-Terms-Label").style.fontWeight =
      "normal";
  });
  document
    .getElementById("readerJoin-submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let formProcess = true;
      if (!document.getElementById("readerJoin-FirstName").value) {
        formProcess = false;
        document.getElementById("readerJoin-FirstName-Error").innerText =
          "PLEASE ENTER YOUR FIRST NAME";
        document.getElementById("readerJoin-FirstName-Error").style.display =
          "block";
      }
      if (!document.getElementById("readerJoin-LastName").value) {
        formProcess = false;
        document.getElementById("readerJoin-LastName-Error").innerText =
          "PLEASE ENTER YOUR LAST NAME";
        document.getElementById("readerJoin-LastName-Error").style.display =
          "block";
      }
      if (
        !document
          .getElementById("readerJoin-Email")
          .value.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        formProcess = false;
        document.getElementById("readerJoin-Email-Error").innerText =
          "PLEASE ENTER A VALID EMAIL ADDRESS";
        document.getElementById("readerJoin-Email-Error").style.display =
          "block";
      }
      if (
        !document
          .getElementById("readerJoin-Password")
          .value.match(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
      ) {
        formProcess = false;
        document.getElementById("readerJoin-Password-Error").innerText =
          "PLEASE ENTER A PASSWORD";
        document.getElementById("readerJoin-Password-Error").style.display =
          "block";
      }
      if (
        document.getElementById("readerJoin-ConfirmPassword").value !==
        document.getElementById("readerJoin-Password").value
      ) {
        formProcess = false;
        document.getElementById("readerJoin-ConfirmPassword-Error").innerText =
          "PLEASE CONFIRM YOUR PASSWORD";
        document.getElementById(
          "readerJoin-ConfirmPassword-Error"
        ).style.display = "block";
      }
      if (!document.getElementById("readerJoin-Terms").checked) {
        formProcess = false;
        document.getElementById("readerJoin-Terms-Label").style.color = "red";
        document.getElementById("readerJoin-Terms-Label").style.fontWeight =
          "bold";
      }
      if (formProcess) {
        fetch(`/api/reader/join`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: document.getElementById("readerJoin-Email").value,
            firstName: document.getElementById("readerJoin-FirstName").value,
            lastName: document.getElementById("readerJoin-LastName").value,
            password: document.getElementById("readerJoin-Password").value,
            terms: document.getElementById("readerJoin-Terms").checked,
            privacy: document.getElementById("readerJoin-Privacy").checked,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // eslint-disable-next-line no-console
            if (data.status === "success") {
              window.location.href = "/dashboard";
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(`ERROR: ${err}`);
            document.getElementById("readerJoinMessage").innerHTML =
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
