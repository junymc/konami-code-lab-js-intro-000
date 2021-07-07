const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  let index = 0
 // const body = document.querySelector('body')
  document.body.addEventListener('keydown', function(e) {
    const key = e.key
    if (key === codes[index]) {
      index++
    } else {
    index = 0
  }
  if (index === codes.length) {
    window.alert('Hurray!')
    index = 0
  }
})
}
