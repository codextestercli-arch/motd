/**
 * xp.js — XP bar tab selection
 */
export function initXP() {
  document.querySelectorAll('.xpi').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.xpi').forEach((x) => x.classList.remove('active'))
      el.classList.add('active')
    })
  })
}
