let confirmBox = document.querySelector(".confirm"),
  agreeBtn = document.querySelector(".delete-text"),
  disagreeBtn = document.querySelector(".keep-text"),
  deletionConfirmationBtn = document.querySelector(".delete-prompt"),
  mainElement = document.querySelector("main"),
  textArea = document.querySelector("textarea")

deletionConfirmationBtn.addEventListener("click", toggleModal, false)
disagreeBtn.addEventListener("click", toggleModal, false)
agreeBtn.addEventListener("click", function(){
  toggleModal();
  textArea.innerText = ""
}, false)

document.addEventListener("keydown", (el) => {
  if(!modal.classList.contains("hide") && (el.key === "Esc" || el.keyCode === 27)){
    toggleModal()
    deletionConfirmationBtn.focus()
  }
})

function toggleModal() {
  mainElement.toggleAttribute("inert")
  if(confirmBox.classList.contains("hide")){
    confirmBox.classList.remove("hide")
    confirmBox.setAttribute("aria-modal", "true")
    initiateFocusLooping(confirmBox)
  } else {
    confirmBox.classList.add("hide")
    confirmBox.removeAttribute("aria-modal")
    endFocusLooping(confirmBox)
  }
}