const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".faq-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

  
    items.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});