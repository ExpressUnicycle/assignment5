async function grabDawgs() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  const breeds = Object.keys(data.message);

  if (data.status === 404) {
    console.log("It Broke");
    return;
  }

  return breeds;
}

async function grabDawgPic(breed) {
    const response = await fetch(
      "https://dog.ceo/api/breed/" + breed + "/images/random",
    );
    const data = await response.json();
    const pic = data.message
    return pic
}

const dawgList = document.createElement("dawg-list");
dawgList.innerHTML = "";

dawgList.style.display = "grid";
dawgList.style.gridTemplateColumns = "repeat(4, 1fr)";
dawgList.style.gap = "10px"
document.getElementById("wrapper").appendChild(dawgList);

async function renderDawgs() {
  const breeds = await grabDawgs();

  breeds.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 8; i++) {
    const breed = breeds[i];

    const dawgCard = document.createElement("div");
    const dawgName = document.createElement("div")
    dawgName.innerText = breed;
    dawgCard.appendChild(dawgName)
    
    const picData = await grabDawgPic(breed);

    const dawgPic = document.createElement("img");
    dawgPic.src = picData;
    dawgPic.style.height = "200px";
    dawgPic.style.width = "200px";
    dawgCard.appendChild(dawgPic);

    dawgCard.style.display = "flex"
    dawgCard.style.flexDirection = "column"
    dawgCard.style.alignItems = "center"
    dawgCard.style.justifyContent = "center"
    dawgCard.style.height = "250px"
    dawgCard.style.width = "250px"
    dawgCard.style.display = "flex";
    dawgCard.style.border = "2px solid";
    dawgCard.style.borderRadius = "5px";
    dawgCard.style.justifyContent = "space-around";

    dawgList.appendChild(dawgCard);
  }
}

renderDawgs();

