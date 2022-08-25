/* function myInitCode() {
  document
    .getElementById("bloggerLogin-Email")
    .addEventListener("focus", () => {
      document.getElementById("bloggerLogin-Email-Error").style.display =
        "none";
    });
  document
    .getElementById("bloggerLogin-Password")
    .addEventListener("focus", () => {
      document.getElementById("bloggerLogin-Password-Error").style.display =
        "none";
    });
  document
    .getElementById("bloggerLogin-login")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let logInProcess = true;
      if (
        !document.getElementById("bloggerLogin-Email").value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        logInProcess = false;
        document.getElementById("bloggerLogin-Email-Error").innerHTML = "INVALID EMAIL ADDRESS";
        document.getElementById("bloggerJoin-Email-Error").style.display =
        "block";
        } if (
            !document.getElementById("bloggerLogin-Password").value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            logInProcess = false;
            document.getElementById("bloggerLogin-Password-Error").innerHTML = "INVALID PASSWORD";
            document.getElementById("bloggerJoin-Password-Error").style.display =
            "block";
         }
    }), 
}; */
