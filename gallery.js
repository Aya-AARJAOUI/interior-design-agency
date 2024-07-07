const element = document.querySelector("#container");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  // Define the scroll amount
  const scrollAmount = event.deltaY < 0 ? -600 : 200;

  // Calculate the new scroll position
  let newScrollLeft = element.scrollLeft + scrollAmount;

  // Wrap around if scrolled past the beginning or end
  if (newScrollLeft < 0) {
    newScrollLeft = element.scrollWidth - element.clientWidth;
  } else if (newScrollLeft >= element.scrollWidth - element.clientWidth) {
    newScrollLeft = 0;
  }

  // Scroll the element
  element.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth'
  });
});
