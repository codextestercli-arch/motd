/**
 * tabs.js — footer tab bar selection
 */
export function initTabs() {
  document.querySelectorAll('.fi').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.fi').forEach((f) => f.classList.remove('active'))
      el.classList.add('active')
    })
  })
}
