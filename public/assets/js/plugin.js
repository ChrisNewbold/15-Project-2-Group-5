function myInitCode() {
  let articleId = 0;
  let readerId = 0;
  const fetchPath = "https://a15-onlyblogs.herokuapp.com";
  window.addEventListener("message", ({ data }) => {
    switch (data.splash) {
      case "pre-register":
        document.getElementById("blogChargeIFrame").style.height = `755px`;
        document.getElementById("overlay").style.opacity = "100";
        break;
      case "pre-register2":
        document.cookie = `onlyBlogEmail=${data.formData.email}`;
        fetch(`${fetchPath}/api/reader/prereg`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: data.formData.email,
            password: data.formData.password,
            terms: data.formData.terms,
            privacy: data.formData.privacy,
            articleId,
          }),
        })
          .then((response) => response.json())
          .then((data2) => {
            document.getElementById("blogChargeIFrame").srcdoc = data2.html;
            articleId = data2.articleId;
            readerId = data2.readerId;
          })
          .catch(() => {});
        break;
      case "readerRegistered":
        document.getElementById("blogChargeIFrame").style.height = `720px`;
        break;
      case "readerRegistered2":
        document.getElementById("overlay").remove();
        fetch(`${fetchPath}/api/reader/charge`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            readerId,
            articleId,
          }),
        });
        break;
      case "reader-hasCredit":
        document.getElementById("blogChargeIFrame").style.height = `620px`;
        document.getElementById("overlay").style.opacity = "100";
        break;
      case "reader-hasCredit2":
        fetch(`${fetchPath}/api/reader/charge`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            readerId,
            articleId,
          }),
        });
        document.getElementById("overlay").style.opacity = "0";
        break;
      case "reader-outOfCredit":
        document.getElementById("blogChargeIFrame").style.height = `620px`;
        document.getElementById("overlay").style.opacity = "100";
        break;
      case "reader-outOfCredit2":
        if (window.location.host.includes("localhost")) {
          window.location.href = "/credit";
        } else {
          window.location.href = `${fetchPath}/credit`;
        }
        break;
      default:
        break;
    }
  });
  const overlayDiv = document.createElement("div");
  overlayDiv.style.cssText =
    "position:fixed; width:100%; height:100%; top: 0; left: 0; z-index: 1000; background-color: rgba(0,0,0,.8); opacity: 0;";
  overlayDiv.setAttribute("id", "overlay");

  const wrapperDiv = document.createElement("div");
  wrapperDiv.style.cssText =
    "position:relative; width:100%; height:100%; z-index:500; overflow hidden;";

  const elemIFrame = document.createElement("iFrame");
  elemIFrame.style.cssText =
    "position:absolute; width: 400px; top: 50%; left: 50%; opacity:1; z-index:1000; background:#fff; margin: auto; transform: translate(-50%,-50%); overflow hidden;";

  elemIFrame.setAttribute("id", "blogChargeIFrame");

  wrapperDiv.appendChild(elemIFrame);
  overlayDiv.appendChild(wrapperDiv);

  // get cookie
  let userEmail = "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; onlyBlogEmail=`);
  if (parts.length === 2) {
    userEmail = parts.pop().split(";").shift();
  }

  fetch(`${fetchPath}/api/article/check`, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      url: window.location.href,
      email: userEmail,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.do !== "continue") {
        document.body.appendChild(overlayDiv);
        document.getElementById("blogChargeIFrame").srcdoc = data.html;
        articleId = data.articleId;
        readerId = data.readerId;
      }
    })

    .catch(() => {
      // eslint-disable-next-line no-console
    });
}

if (document.readyState !== "loading") {
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    myInitCode();
  });
}
