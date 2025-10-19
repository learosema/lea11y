const $ = document.querySelector.bind(document);
const blurButton = $('#blurButton');

function addBlur() {
  document.body.style.transition = 'filter 500ms ease';
  document.body.style.filter = 'blur(2px)';
}

function removeBlur() {
  document.body.style.filter = 'none';
}

blurButton.addEventListener('click', () => {
  addBlur()
  window.setTimeout(() => removeBlur(), 5000)
})
