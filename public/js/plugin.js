function myInitCode() {
  window.addEventListener("message", ({ data }) => {
    document.getElementById("blogChargeIFrame").style.height = `${data}px`;
    document.getElementById("overlay").style.opacity = "100";
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
    "position:absolute; width: 500px; top: 50%; left: 50%; opacity:1; z-index:1000; background:#fff; margin: auto; transform: translate(-50%,-50%); overflow hidden;";

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
    .then((response) => response.json())
    .then((data) => {
      document.body.appendChild(overlayDiv);
      document.getElementById("blogChargeIFrame").srcdoc = data.html;

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
