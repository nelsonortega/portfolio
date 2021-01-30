const toggleNavigationMenu = () => {
  const toggleButton = document.getElementById('nav-toggle')
  const navigationMenu = document.getElementById('nav-menu')

  if (toggleButton && navigationMenu) {
    toggleButton.addEventListener('click', () => {
      navigationMenu.classList.toggle('show')
    })
  }
}

toggleNavigationMenu()

const navigationLinks = document.querySelectorAll('.nav-link')

function navigate() {
  navigationLinks.forEach(link => link.classList.remove('active'))
  this.classList.add('active')

  const navigationMenu = document.getElementById('nav-menu')
  navigationMenu.classList.remove('show')
}

navigationLinks.forEach(link => link.addEventListener('click', navigate))