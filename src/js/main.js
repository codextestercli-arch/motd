/**
 * main.js — entry point
 * Imports CSS and initialises all interactive modules.
 */
import '../styles/index.css'

import { initXP }       from './xp.js'
import { initCarousel } from './carousel.js'
import { initTabs }     from './tabs.js'

document.addEventListener('DOMContentLoaded', () => {
  initXP()
  initTabs()
  initCarousel(4000)
})
