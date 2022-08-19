function myInitCode() {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.cssText =
    "position:fixed; width:100%; height:100%; top: 0; left: 0; z-index:100; background-color: rgba(0,0,0,.8);";
  overlayDiv.setAttribute("id", "overlay");

  const wrapperDiv = document.createElement("div");
  wrapperDiv.style.cssText =
    "position:relative; width:100%; height:100%; z-index:500;";

  const elemIFrame = document.createElement("iFrame");
  elemIFrame.style.cssText =
    "position:absolute; width:50%; height:50%; top: 50%; left: 50%; opacity:1; z-index:1000; background:#fff; margin: auto; transform: translate(-50%,-50%)";
  elemIFrame.setAttribute("id", "blogChargeIFrame");

  wrapperDiv.appendChild(elemIFrame);
  overlayDiv.appendChild(wrapperDiv);

  let userEmail = "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; blogChargeEmail=`);
  if (parts.length === 2) {
    userEmail = parts.pop().split(";").shift();
  }
  fetch("https://c15-project-2-group-5.herokuapp.com/api/articleCheck", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      url: window.location.href,
      email: userEmail,
    }),
  })
    .then((data) => {
      console.log(data);
      document.body.appendChild(overlayDiv);
      document.getElementById("blogChargeIFrame").innerHtml = data;
      /*
      if (data.status === "ok") {
        switch (data.do) {
          case "registered":
            document.getElementById("blogChargeIFrame").src = data.html;
            document.body.appendChild(overlayDiv);
            break;
          case "pre-register":
            document.getElementById("blogChargeIFrame").src = data.html;
            document.body.appendChild(overlayDiv);
            break;
          case "continue":
            break;
          default:
            break;
        }
      }
      */
    })

    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
}

if (document.readyState !== "loading") {
  console.log("loading");
  myInitCode();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    myInitCode();
  });
}
