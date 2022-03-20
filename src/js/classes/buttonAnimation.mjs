class ButtonAnimation {
  addButtonAnimation() {
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
      button.addEventListener("click", (e) => {
        e.target.classList.add("button-active");
        setTimeout(() => e.target.classList.remove("button-active"), 300);
      });
    }
  }
  addTrigonometryEv() {
    const showTrigonometry = document.querySelector(".show-trigonometry")
    showTrigonometry.addEventListener("click",()=>{
      document.querySelector(".trigonometry").classList.toggle("trigonometry-show")
    })
  }
}
export { ButtonAnimation };
