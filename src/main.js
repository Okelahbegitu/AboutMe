import './style.css'

const intro = document.getElementById('intro')
const logo = document.getElementById('logo')

if (logo) {
  logo.classList.add('glow')
}

if (intro) {
  intro.style.transition = 'opacity 500ms ease'

  window.setTimeout(() => {
    intro.style.opacity = '0'
    intro.style.pointerEvents = 'none'
  }, 2000)

  intro.addEventListener(
    'transitionend',
    () => {
      intro.remove()
    },
    { once: true },
  )
}
