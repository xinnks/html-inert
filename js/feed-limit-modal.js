let loginModal = document.querySelector(".authentication-form"),
  feed = document.querySelector(".feed"),
  feedSample = document.querySelector(".feed-item"),
  targetElement, feedGuarded = false;

// populate feed
for(let i = 1; i < 20; i++){
  let newFeedNode = feedSample.cloneNode(true)
  newFeedNode.classList.add(i)
  if(i === 10) { // make the tenth post our target item
    newFeedNode.classList.add("target-item")
    targetElement = newFeedNode
  }
  feed.appendChild(newFeedNode)
}

document.addEventListener("scroll", monitorFeed, false)

function guardFeed() {
  if(!feedGuarded){
    feed.toggleAttribute("inert")
    loginModal.classList.remove("hide")
    initiateFocusLooping(loginModal)
    feedGuarded = true

    // limit scrolling
    window.onscroll = function(){
      window.scrollTo(
        window.scrollY || document.documentElement.scrollTop,
        window.scrollX || document.documentElement.scrollLeft
      )
    }

    // stop scroll listening
    document.removeEventListener("scroll", monitorFeed, false)
  }
}

function monitorFeed(){
  if(targetElement.getBoundingClientRect().top <= 100){
    guardFeed()
  }
}