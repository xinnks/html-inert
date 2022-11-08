let navBtn = document.querySelector("#nav-hum"),
  pageContents = document.querySelector("main")

if(navBtn.checked){
  alert("checked")
}

navBtn.addEventListener("change", (el) => {
  pageContents.toggleAttribute("inert")
})