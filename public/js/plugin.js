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

  wrapperDiv.appendChild(elemIFrame);
  overlayDiv.appendChild(wrapperDiv);
  document.body.appendChild(overlayDiv);
  fetch("https://app-techblog.herokuapp.com/api/articles", {
    method: "POST",
    body: JSON.stringify({
      url: window.location.href,
      b: 2,
    }),
  })
    .then((response) => {
      document.body.appendChild(overlayDiv);
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then(() => {
      // Do something with the response
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
