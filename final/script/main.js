const camerasElement = document.querySelector("#cameras");
let cameraList = {};

/* async displayTemples Function */
const displayTemples = (cameraList) => {
    cameraList.forEach((camera) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = camera.cameraName;
        const img = document.createElement("img");
        img.src = camera.imageUrl;
        img.alt = "location";
        article.appendChild(h3);
        article.appendChild(img);
        camerasElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://ryjason.github.io/cse121b/finalapi.json");
    cameraList = await response.json();
    displayTemples(cameraList);
};

/* reset Function */
const reset = () => {
    camerasElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (cameras) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(cameras.filter(camera => camera.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(cameras.filter(camera => !camera.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayTemples(cameras.filter(camera => new Date(camera.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(cameras);
            break;
        default:
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(cameraList) });
getTemples();
