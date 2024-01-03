'use strict';

// Toggle function to add or remove the "active" class
const toggleActiveClass = (elem) => {
    elem.classList.toggle("active");
};


// Testimonials modal functionality
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

testimonialsItems.forEach((item) => {
    item.addEventListener("click", () => {
        modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
        toggleModal();
    });
});

// Select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => {
    toggleActiveClass(select);
});

selectItems.forEach((item) => {
    item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        selectValue.innerText = item.innerText;
        toggleActiveClass(select);
        filterFunc(selectedValue);
    });
});

// Modal functionality
function openModal(imageUrl) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageUrl;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const clickedLink = link.innerHTML.toLowerCase();

        pages.forEach((page) => {
            if (clickedLink === page.dataset.page) {
                page.classList.add("active");
                link.classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
                link.classList.remove("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('main section:not(#about)');
    sections.forEach((section) => {
        section.classList.add('hidden');
    });

    const showSection = (sectionId) => {
        sections.forEach((section) => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
});
