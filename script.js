
const button = document.getElementById("button");
const randomDogImageElement = document.getElementById("randomDogImage");
function fetchRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.message;
      console.log(imageUrl);
      randomDogImageElement.src = imageUrl;
    })
    .catch((err) => console.log(err));
}
fetchRandomDogImage();
button.addEventListener("click", fetchRandomDogImage);
