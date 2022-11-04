let modal = document.querySelector(".modal"),
  closeModalButton = document.querySelector(".close-modal"),
  openModalButton = document.querySelector(".open-modal"),
  otherPageElements = document.querySelector("main")

modal.addEventListener("keydown", throttleFocus, false)
openModalButton.addEventListener("click", toggleModal, false)
closeModalButton.addEventListener("click", toggleModal, false)
document.addEventListener("keydown", (el) => {
  if(!modal.classList.contains("hide") && (el.key === "Esc" || el.keyCode === 27)){
    toggleModal()
    openModalButton.focus()
  }
})

function toggleModal() {
  if(modal.classList.contains("hide")){
    modal.classList.remove("hide")
    initiateFocusLooping(modal)
    otherPageElements.toggleAttribute("inert")
  } else {
    modal.classList.add("hide")
    endFocusLooping(modal)
    otherPageElements.toggleAttribute("inert")
  }
}