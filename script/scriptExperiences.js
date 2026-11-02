// Get the category and price dropdowns
const categorySelect = document.getElementById("category");
const priceSelect = document.getElementById("priceRange");

// Get all experience cards
const cards = document.querySelectorAll(".experience-card");

function filterCards() {
  // Read the currently selected filters
  const category = categorySelect.value;
  const range = priceSelect.value;

  // Check each experience card
  cards.forEach(card => {
    const cardCategory = card.dataset.category;
    const price = Number(card.dataset.price);

    // Check if the card matches the selected category
    const matchesCategory =
      category === "all" || cardCategory === category;

    // Check if the card matches the selected price range
    let matchesPrice = true;

    if (range === "0-150") matchesPrice = price < 150;
    else if (range === "150-400") matchesPrice = price >= 150 && price < 400;
    else if (range === "400-800") matchesPrice = price >= 400 && price <= 800;
    else if (range === "800-99999") matchesPrice = price > 800;

    // Hide the card unless it matches both filters
    card.hidden = !(matchesCategory && matchesPrice);
  });
}

// Filter again whenever either dropdown changes
categorySelect.addEventListener("change", filterCards);
priceSelect.addEventListener("change", filterCards);