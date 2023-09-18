// script.js
document.addEventListener("DOMContentLoaded", function () {
  const similarArtistTab = document.getElementById("similarArtistTab");
  const similarArtistsContainer = document.getElementById("similarArtists");

  similarArtistTab.addEventListener("click", function (event) {
    event.preventDefault();

    // Clear the previous content (if any)
    similarArtistsContainer.innerHTML = "";

    // Simulate loading similar artists (you would fetch data from a server here)
    const similarArtistsData = [
      { name: "Green Day", imageUrl: "green_day.jpg" },
      { name: "Foo Fighters", imageUrl: "foo_fighters.jpg" },
      { name: "Nirvana", imageUrl: "nirvana.jpg" }
      // Add more similar artists here
    ];

    // Create tiles for similar artists
    similarArtistsData.forEach(function (artist) {
      const artistTile = document.createElement("div");
      artistTile.classList.add("artist-tile");

      const artistImage = document.createElement("img");
      artistImage.src = artist.imageUrl;
      artistTile.appendChild(artistImage);

      const artistName = document.createElement("p");
      artistName.textContent = artist.name;
      artistTile.appendChild(artistName);

      similarArtistsContainer.appendChild(artistTile);
    });
  });
});

// Add click event listeners to the "Play Now" buttons for each artist
document
  .getElementById("playNowButton1")
  .addEventListener("click", function () {
    window.location.href = "Artist01_ImagineDragons.html";
  });

document
  .getElementById("playNowButton2")
  .addEventListener("click", function () {
    window.location.href = "Artist02_GreenDay.html";
  });

document
  .getElementById("playNowButton3")
  .addEventListener("click", function () {
    window.location.href = "Artist03_ACDC.html";
  });

const artistLinks = document.querySelectorAll(".artist-link");

// Function to handle tile click event
function loadArtistPage(event) {
  event.preventDefault(); // Prevent the default link behavior
  const artistName = this.textContent; // Get the artist name from the clicked tile
  // You can load the artist's page or perform any other action here
  console.log(`Loading ${artistName}'s page...`);
}

// Add a click event listener to each artist tile
artistLinks.forEach((artistLink) => {
  artistLink.addEventListener("click", loadArtistPage);
});
