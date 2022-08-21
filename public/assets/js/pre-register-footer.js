function myInitCode() {
  setTimeout(() => {
    window.parent.postMessage(
      document.getElementById("wrapper").offsetHeight + 50
    );
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
    // console.log(formData);
  });
}
if (document.readyState !== "loading") {
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    myInitCode();
  });
}
