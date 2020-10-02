let navtab = document.querySelector("nav.navtab");
let navtabItems = document.querySelectorAll("li.navtab-item");
navtabItems.forEach((navtabItem, activeIndex) => {
  navtabItem.addEventListener("click", () => {
    navtabItems.forEach(navtabItem => navtabItem.classList.remove("active"));
    navtabItem.classList.add("active");
    // console.log(navtab.style);
    navtab.style.setProperty("--active-index", `${activeIndex}`);
  });
});

let btn = document.querySelector(".bg-change li button");
btn.addEventListener("click", () => {
  document.body.style.setProperty(
    "--base-color",
    `#${Math.ceil(Math.random() * 256).toString(16)}${Math.ceil(
      Math.random() * 256
    ).toString(16)}${Math.ceil(Math.random() * 256).toString(16)}`
  );

  document.body.style.setProperty(
    "--base-bg",
    `#${Math.ceil(Math.random() * 256).toString(16)}${Math.ceil(
      Math.random() * 256
    ).toString(16)}${Math.ceil(Math.random() * 256).toString(16)}`
  );
});
