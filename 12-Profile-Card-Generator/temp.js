// Selection of Elements
const appContainer = document.getElementById("app");
const generateBTN = document.getElementById("generateBTN");

// Creating Profile Card
function createProfileCard(){
    const profileCard = document.createElement("div");
    // Add Classes to this DIV
    profileCard.className = "profile-card";

    // Create an Image Element for the Profile Card
    const profileImage = document.createElement("img");
    profileImage.style.width = "100%";
    profileImage.src = "img.jpeg";

    // Description
    const profileDesc = document.createElement("p");
    profileDesc.textContent = "This is Akhilesh, one of the worst programmers ^_^";

    const profileName = document.createElement("h3");
    profileName.textContent = "Akhilesh";

    const breakTag = document.createElement("br");

    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDesc);

    appContainer.appendChild(profileCard);
    appContainer.appendChild(breakTag);

    console.log(profileCard);
}

generateBTN.addEventListener("click", createProfileCard);