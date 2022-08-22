function myInitCode() {
  setTimeout(() => {
    window.parent.postMessage({
      splash: 1,
      height: document.getElementById("wrapper").offsetHeight + 70,
    });
  }, 1000);
  const emailElement = document.getElementById("inputEmail3");
  const passwordElement = document.getElementById("inputPassword3");
  const termsElement = document.getElementById("flexCheckDefault1");
  const privacyElement = document.getElementById("flexCheckDefault2");
  const buttonElement = document.getElementById("submit-btn");
  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e);
    // eslint-disable-next-line no-unused-vars
    const formData = {
      email: emailElement.value,
      password: passwordElement.value,
      terms: termsElement.checked,
      privacy: privacyElement.checked,
    };
    if (
      emailElement.value !== "" &&
      passwordElement.value !== "" &&
      termsElement.checked
    ) {
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
