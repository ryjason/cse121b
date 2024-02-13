const camerasElement = document.querySelector("#camera");
let cameraList = {};

/* async displayCameras Function */
const displayCameras = (cameraList) => {
    cameraList.forEach((camera) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = camera.cameraName;
        const img = document.createElement("img");
        img.src = camera.imageUrl;
        img.alt = "brand";
        article.appendChild(h3);
        article.appendChild(img);
        camerasElement.appendChild(article);
    });
};

/* async getCameras Function using fetch()*/
const getCameras = async () => {
    const response = await fetch("https://ryjason.github.io/cse121b/finalapi.json");
    cameraList = await response.json();
    displayCameras(cameraList);
};

/* reset Function */
const reset = () => {
    camerasElement.innerHTML = "";
};

/* filterCameras Function */
const filterCameras = (cameras) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayCameras(cameras.filter(camera => camera.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayCameras(cameras.filter(camera => !camera.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayCameras(cameras.filter(camera => new Date(camera.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayCameras(cameras);
            break;
        default:
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterCameras(cameraList) });
getCameras();
