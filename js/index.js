/*--------------Form Slider---------------*/
const spans = document.querySelectorAll(".span-click");
const nestedDivs = document.querySelectorAll(".nested-div");

      spans.forEach((span, index) => {
        span.addEventListener("click", () => {
          // Reset all nested-divs to their initial state
          nestedDivs.forEach((div) => {
            div.style.transform = "translateX(0)";
          });

          // Slide the second nested-div to the left
          if (index === 0) {
            nestedDivs.forEach((div, i) => {
              div.style.transform = "translateX(0)";
              div.style.marginBottom = "0";
            });
          }
          if (index === 1) {
            nestedDivs.forEach((div, i) => {
              div.style.transform = "translateX(-100%)";
              div.style.marginBottom = "-16%";
            });
          }
          if (index === 2) {
            nestedDivs.forEach((div, i) => {
              div.style.transform = "translateX(-200%)";
              div.style.marginBottom = "37%";
            });
          }
        });
      });

const spans1 = document.querySelectorAll(".span-click1");
spans1.forEach((span, index) => {
  span.addEventListener("click", () => {
    // Reset all nested-divs to their initial state
    nestedDivs.forEach((div) => {
      div.style.transform = "translateX(0)";
    });

    // Slide the second nested-div to the left
    if (index === 0) {
      nestedDivs.forEach((div, i) => {
        div.style.transform = "translateX(0)";
        div.style.marginBottom = "0";
      });
    }
    if (index === 1) {
      nestedDivs.forEach((div, i) => {
        div.style.transform = "translateX(-100%)";
      });
    }
    if (index === 2) {
      nestedDivs.forEach((div, i) => {
        div.style.transform = "translateX(-200%)";
        div.style.marginBottom = "37%";
      });
    }
  });
});
const spans2 = document.querySelectorAll(".span-click2");
spans2.forEach((span, index) => {
  span.addEventListener("click", () => {
    // Reset all nested-divs to their initial state
    nestedDivs.forEach((div) => {
      div.style.transform = "translateX(0)";
    });

    // Slide the second nested-div to the left
    if (index === 0) {
      nestedDivs.forEach((div, i) => {
        div.style.transform = "translateX(0)";
        div.style.marginBottom = "0";
      });
    }
    if (index === 1) {
      nestedDivs.forEach((div, i) => {
        div.style.transform = "translateX(-100%)";
        div.style.marginBottom = "-16%";
      });
    }
    if (index === 2) {
      nestedDivs.forEach((div, i) => {
        div.style.transform = "translateX(-200%)";
      });
    }
  });
});

const pages = document.querySelectorAll(".nested-div");
    const translateAmount = 100; 
    let translate = 0;
    const marginAmount = 100;
    let margin = 0;

    slide = (direction) => {

      direction === "next" ? translate -= translateAmount : translate += translateAmount;

      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`, pages.style.marginBottom = `{$margin}`)
      );
    }