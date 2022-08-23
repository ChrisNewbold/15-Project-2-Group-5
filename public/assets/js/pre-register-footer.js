function myInitCode() {
  setTimeout(() => {
    window.parent.postMessage({
      splash: 1,
      height: document.getElementById("wrapper").offsetHeight + 20,
    });
  }, 1000);
  const emailElement = document.getElementById("inputEmail3");
  emailElement.addEventListener("focus", () => {
    document.getElementById("inputEmail3-Error").style.display = "none";
  });
  const passwordElement = document.getElementById("inputPassword3");
  passwordElement.addEventListener("focus", () => {
    document.getElementById("inputPassword3-Error").style.display = "none";
  });
  const termsElement = document.getElementById("flexCheckDefault1");
  termsElement.addEventListener("change", () => {
    if (termsElement.checked) {
      document.getElementById("flexCheckDefault1").style.color = "black";
      document.getElementById("flexCheckDefault1").style.fontWeight = "normal";
    }
  });
  const privacyElement = document.getElementById("flexCheckDefault2");
  const buttonElement = document.getElementById("submit-btn");
  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("inputEmail3-Error").style.display = "none";
    document.getElementById("inputPassword3-Error").style.display = "none";
    document.getElementById("flexCheckDefault1").style.color = "black";
    document.getElementById("flexCheckDefault1").style.fontWeight = "normal";
    let formProcess = true;
    // console.log(e);
    // eslint-disable-next-line no-unused-vars
    if (
      !emailElement.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      formProcess = false;
      document.getElementById("inputEmail3-Error").style.display = "block";
      document.getElementById("inputEmail3-Error").innerText =
        "PLEASE ENTER YOUR EMAIL ADDRESS";
    }

    /*
    At least one upper case English letter, (?=.*?[A-Z])
    At least one lower case English letter, (?=.*?[a-z])
    At least one digit, (?=.*?[0-9])
    At least one special character, (?=.*?[#?!@$%^&*-])
    Minimum eight in length .{8,} (with the anchors)
    */

    if (
      !passwordElement.value.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )
    ) {
      formProcess = false;
      document.getElementById("inputPassword3-Error").style.display = "block";
      document.getElementById("inputPassword3-Error").innerText =
        "PLEASE ENTER A PASSWORD";
    }
    if (!termsElement.checked) {
      formProcess = false;
      document.getElementById("flexCheckDefault1Label").style.color = "red";
      document.getElementById("flexCheckDefault1Label").style.fontWeight =
        "bold";
    }
    if (formProcess) {
      const formData = {
        email: emailElement.value,
        password: passwordElement.value,
        terms: termsElement.checked,
        privacy: privacyElement.checked,
      };

      window.parent.postMessage({
        splash: 2,
        formData,
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
