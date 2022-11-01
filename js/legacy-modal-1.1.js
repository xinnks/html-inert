let modal = document.getElementById("registration-modal")
let closeModalButton = document.querySelector(".close-modal")
let openModalButton = document.querySelector(".open-modal")

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
  } else {
    modal.classList.add("hide")
    endFocusLooping(modal)
  }
  toggleAriaHidden(document.querySelector("body").children, modal)
}

function toggleAriaHidden(allElements, exception, apply = true){
  for(const el of allElements){
    if(el.tagName !== "script" && el !== exception)
      if(apply){
        el.setAttribute("aria-hidden", "true")
      } else {
        el.removeAttribute("aria-hidden")
      }
  }
}