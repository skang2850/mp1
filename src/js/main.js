// modal section
document.querySelectorAll(".school").forEach((card) => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

document.querySelectorAll(".close-button").forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.close();
    });
});
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});


// carousel section
const projectList = document.getElementById("project-list");
const projects = document.querySelectorAll(".project-list-items");
const prevButton = document.getElementById("carousel-btn-prev");
const nextButton = document.getElementById("carousel-btn-next");
let index = 0;

function goTo(i) {
  if (!projects.length) return;
  index = (i + projects.length) % projects.length;
  projectList.scrollLeft = projects[index].offsetLeft - projects[0].offsetLeft;
}

nextButton.addEventListener("click", () => goTo(index + 1));
prevButton.addEventListener("click", () => goTo(index - 1));

// scroll tracker
const header = document.querySelector("header");
const headerScroll = document.querySelector(".header-scroll");


const scrollCallback = (entries) => {
    const isVisible = entries[0].isIntersecting;
    header.classList.toggle("top", isVisible)
};

const navObserver = new IntersectionObserver(scrollCallback);

navObserver.observe(headerScroll);

// position indicator
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

const map = new Map();
for (let i=0; i<sections.length; i++){
    map.set(sections[i], links[i]);
}

const posObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        map.get(entry.target).classList.toggle("active", entry.isIntersecting);
    }
},{rootMargin: "-25% 0px -75% 0px"});

for (let i=0; i<sections.length; i++){
    posObserver.observe(sections[i]);
}