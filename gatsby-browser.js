
// exports.onInitialClientRender = () => {
//     const slides = document.querySelectorAll(".slide");
//     let observer = new IntersectionObserver((entries) => {
//         let currentVisible = document.querySelector(".visible");
//         if (currentVisible !== null) currentVisible.classList.remove("visible");
//         let entry = entries[0];
//         entry.target.classList.add("visible");

//     }, {threshold: .75});

//     slides.forEach(slide => {
//         observer.observe(slide);
//     });
// };
  