document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    let currentIndex = 0;
    const updateCarousel = () => {
      const slideWidth = carousel.querySelector(".card").clientWidth;
      track.style.transform = `translateX(-${currentIndex * (slideWidth + 10)}px)`;
    };
    prevButton.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });
    nextButton.addEventListener("click", () => {
      const maxIndex = track.children.length - 1;
      currentIndex = Math.min(currentIndex + 1, maxIndex);
      updateCarousel();
    });
  });