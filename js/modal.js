let modal = document.querySelector(".modal"),
  closeModalButton = document.querySelector(".close-modal"),
  openModalButton = document.querySelector(".open-modal"),
  mainElement = document.querySelector("main")

openModalButton.addEventListener("click", toggleModal, false)
closeModalButton.addEventListener("click", toggleModal, false)

document.addEventListener("keydown", (el) => {
  if(!modal.classList.contains("hide") && (el.key === "Esc" || el.keyCode === 27)){
    toggleModal()
    openModalButton.focus()
  }
})

function toggleModal() {
  mainElement.toggleAttribute("inert")
  if(modal.classList.contains("hide")){
    modal.classList.remove("hide")
    modal.setAttribute("aria-modal", "true")
    initiateFocusLooping(modal)
  } else {
    modal.classList.add("hide")
    modal.removeAttribute("aria-modal")
    endFocusLooping(modal)
  }
}