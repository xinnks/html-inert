const FOCUSSABLE_SELECTORS_LIST = 'a[href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), area[href], [tabindex="0"], [contenteditable], object, iframe',
  TAB_KEY_CODE = 9
let firstFocusElement,
  lastFocusElement

function initiateFocusLooping(modal){
  let focusableModelElements = modal.querySelectorAll(FOCUSSABLE_SELECTORS_LIST)
  firstFocusElement = focusableModelElements[0]
  lastFocusElement = focusableModelElements[focusableModelElements.length - 1]

  firstFocusElement.focus({focusVisible: true});
  modal.addEventListener("keydown", throttleFocus, false)
}

function endFocusLooping(modal){
  modal.removeEventListener("keydown", throttleFocus, false)
}

function throttleFocus(el){
  if(el.keyCode === TAB_KEY_CODE || el.key === "Tab"){
    if(el.shiftKey && document.activeElement === firstFocusElement) {
      el.preventDefault();
      lastFocusElement.focus();
    } else if(!el.shiftKey && document.activeElement === lastFocusElement) {
      el.preventDefault();
      firstFocusElement.focus()
    }
  }
}