let modal = document.getElementById("registration-modal")
let closeModalButton = document.querySelector(".close-modal")
let openModalButton = document.querySelector(".open-modal")

modal.addEventListener("keydown", throttleFocus, false)

openModalButton.addEventListener("click", toggleModal, false)
closeModalButton.addEventListener("click", toggleModal, false)

function listenToEscKeyDown(el) {
  if(!modal.classList.contains("hide") && (el.key === "Esc" || el.keyCode === 27)){
    toggleModal()
    openModalButton.focus()
  }
}

function toggleModal() {
  if(modal.classList.contains("hide")){
    modal.classList.remove("hide")
    initiateFocusLooping(modal)
    document.addEventListener("keydown", listenToEscKeyDown, false)
  } else {
    modal.classList.add("hide")
    endFocusLooping(modal)
    document.removeEventListener("keydown", listenToEscKeyDown, false)
  }
}