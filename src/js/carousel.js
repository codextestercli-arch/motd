/**
 * carousel.js — auto-rotating hero dot carousel
 */
export function initCarousel(intervalMs = 4000) {
  let index = 0

  const tick = () => {
    const dots = document.querySelectorAll('.hdot')
    if (!dots.length) return
    dots[index].classList.remove('active')
    index = (index + 1) % dots.length
    dots[index].classList.add('active')
  }

  const id = setInterval(tick, intervalMs)

  // Allow external cleanup if needed
  return () => clearInterval(id)
}
