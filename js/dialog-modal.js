let dialog = document.querySelector('dialog');
document.querySelector('#show-dialog').onclick = () => {
  dialog.showModal();
};
document.querySelector('#close-dialog').onclick = () => {
  dialog.close();
};