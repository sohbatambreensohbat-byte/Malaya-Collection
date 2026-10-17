
// const collectionNames = {
//   classic: "Classic Sampin",
//   premium: "Premium Tenun",
//   wedding: "Wedding & Occasion"
// };

// const gallery = document.getElementById("gallery");
// const galleryTitle = document.getElementById("gallery-title");
// const galleryCount = document.getElementById("gallery-count");
// const galleryGrid = document.getElementById("gallery-grid");
// const closeButton = document.getElementById("close-gallery");

// // Collection button click
// document.querySelectorAll("[data-collection]").forEach(button => {
//   button.addEventListener("click", () => {
//     openGallery(button.dataset.collection);
//   });
// });

// // Show 60 photos from the selected collection
// function openGallery(collection) {
//   const title = collectionNames[collection];

//   if (!title) return;

//   galleryTitle.textContent = title;
//   galleryCount.textContent = "Loading 60 designs...";
//   galleryGrid.replaceChildren();

//   for (let i = 1; i <= 60; i++) {
//     const number = String(i).padStart(2, "0");

//     const card = document.createElement("article");
//     card.className = "gallery-item";

//     const image = document.createElement("img");
//     image.src = `images/${collection}/${number}.jpg`;
//     image.alt = `${title} design ${i}`;
//     image.loading = "lazy";

//     // Show a message if an image file is missing
//     image.onerror = () => {
//       image.removeAttribute("src");
//       image.alt = "Product photo not added yet";

//       const message = document.createElement("div");
//       message.textContent = "Add image " + number + ".jpg";
//       message.style.cssText =
//         "aspect-ratio:3/4;display:grid;place-items:center;" +
//         "padding:12px;color:#d8b56a;text-align:center;" +
//         "font-size:12px;overflow-wrap:anywhere;";

//       card.prepend(message);
//     };

//     const label = document.createElement("p");
//     label.textContent = `DESIGN ${number}`;

//     card.append(image, label);
//     galleryGrid.append(card);
//   }

//   galleryCount.textContent = "60 designs";
//   gallery.hidden = false;

//   gallery.scrollIntoView({
//     behavior: "smooth",
//     block: "start"
//   });
// }

// // Close gallery
// closeButton.addEventListener("click", () => {
//   gallery.hidden = true;

//   document.getElementById("collections")
//     .scrollIntoView({ behavior: "smooth" });
// });

// // Keyboard support
// document.addEventListener("keydown", event => {
//   if (event.key === "Escape" && !gallery.hidden) {
//     gallery.hidden = true;
//   }
// });







/* SAMPIN TENUN MANUAL - COLLECTION GALLERY */

const collectionData = {
  classic: {
    title: "Classic Sampin",
    folder: "classic",
    count: 60
  },

  premium: {
    title: "Premium Tenun",
    folder: "premium",
    count: 60
  },

  wedding: {
    title: "Wedding & Occasion",
    folder: "wedding",
    count: 60
  },

  royal: {
    title: "Royal Collection",
    folder: "royal",
    count: 21
  },

  exclusive: {
    title: "Exclusive Collection",
    folder: "exclusive",
    count: 19
  }
};

function openGallery(collection) {
  const data = collectionData[collection];

  if (!data) return;

  const gallery = document.getElementById("gallery");
  // const images = document.getElementById("gallery-images");



  const images = document.getElementById("gallery-grid");



  const title = document.getElementById("gallery-title");
  const count = document.getElementById("gallery-count");

  if (!gallery || !images || !title || !count) {
    alert("Gallery HTML section nahi mila. index.html check karein.");
    return;
  }

  title.textContent = data.title;
  count.textContent = `${data.count} designs`;
  images.replaceChildren();

  for (let i = 1; i <= data.count; i++) {
    const number = String(i).padStart(2, "0");

    const card = document.createElement("article");
    card.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `images/${data.folder}/${number}.jpg`;
    img.alt = `${data.title} design ${number}`;
    img.loading = "lazy";

    img.onerror = function () {
      img.style.display = "none";

      const message = document.createElement("p");
      message.textContent = `Photo ${number}.jpg not found`;
      card.appendChild(message);
    };

    const label = document.createElement("p");
    label.textContent = `DESIGN ${number}`;

    card.append(img, label);
    images.appendChild(card);
  }

  gallery.hidden = false;

  gallery.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function closeGallery() {
  const gallery = document.getElementById("gallery");

  if (gallery) {
    gallery.hidden = true;
  }

  document.getElementById("collections")?.scrollIntoView({
    behavior: "smooth"
  });
}

/* CONNECT COLLECTION BUTTONS */
document.querySelectorAll("[data-collection]").forEach(button => {
  button.addEventListener("click", () => {
    openGallery(button.dataset.collection);
  });
});

/* CLOSE BUTTON */
document.getElementById("close-gallery")?.addEventListener("click", closeGallery);

/* ESCAPE KEY */
document.addEventListener("keydown", event => {
  const gallery = document.getElementById("gallery");

  if (event.key === "Escape" && gallery && !gallery.hidden) {
    closeGallery();
  }
});





































































































































































/* SAMPIN TENUN MANUAL - COLLECTION GALLERY */

const collections = {
  classic: {
    title: "Classic Sampin Collection",
    folder: "classic"
  },

  premium: {
    title: "Premium Tenun Collection",
    folder: "premium"
  },

  wedding: {
    title: "Wedding & Occasion Collection",
    folder: "wedding"
  }
};




