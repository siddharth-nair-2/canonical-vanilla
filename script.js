const cardRowEl = document.getElementById("card-row");

const API_URL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      // Main Div
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-4");
      colDiv.id = "card-id";

      // Inner div
      const pCardDiv = document.createElement("div");
      pCardDiv.classList.add("p-card");
      colDiv.appendChild(pCardDiv);

      // Content Div
      const pCardContentDiv = document.createElement("div");
      pCardContentDiv.classList.add("p-card__content");
      pCardDiv.appendChild(pCardContentDiv);

      // Header
      const headerH3 = document.createElement("h3");
      headerH3.textContent = "CLOUD AND SERVER";
      pCardContentDiv.appendChild(headerH3);

      // First HR
      const hrTop = document.createElement("hr");
      pCardContentDiv.appendChild(hrTop);

      // Image
      const contentImg = document.createElement("img");
      contentImg.classList.add("p-card__image");
      contentImg.src = post.featured_media;
      contentImg.alt = "";
      contentImg.width = "330";
      contentImg.height = "185";
      pCardContentDiv.appendChild(contentImg);

      // Title
      const pCardTitle = document.createElement("h4");
      const anchorCard = document.createElement("a");
      anchorCard.href = post.link;
      anchorCard.textContent = post.title.rendered;
      pCardTitle.appendChild(anchorCard);
      pCardContentDiv.appendChild(pCardTitle);

      // Div to align below items evenly
      const divAlign = document.createElement("div");
      divAlign.id = "div-align";

      // Author and date
      const pCardText = document.createElement("p");
      pCardText.classList.add("u-no-padding--bottom");
      const postDate = new Date(post.date);
      pCardText.innerHTML = `By <a href="${post._embedded.author[0].link}">${
        post._embedded.author[0].name
      }</a> on ${postDate.toLocaleString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`;
      pCardText.style = "font-style: italic; font-weight: 300;";

      // Second HR
      divAlign.appendChild(pCardText);
      const hrBottom = document.createElement("hr");
      divAlign.appendChild(hrBottom);

      // Footer
      const footerH3 = document.createElement("h3");
      footerH3.textContent = "Article";
      divAlign.appendChild(footerH3);

      pCardContentDiv.appendChild(divAlign);
      // Append to starting div
      cardRowEl.appendChild(colDiv);
    });
  });
