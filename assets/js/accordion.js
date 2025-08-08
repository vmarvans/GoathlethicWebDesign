const accordions = document.querySelectorAll('details.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('toggle', () => {
    if (accordion.open) {
      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== accordion) {
          otherAccordion.removeAttribute('open');
        }
      });
    }
  });
});