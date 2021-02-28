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

const scroll = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

scroll.reveal('.home-title', {})
scroll.reveal('.button', {delay: 200})
scroll.reveal('.home-image', {delay: 400})
scroll.reveal('.home-social-icon', {interval: 200})

scroll.reveal('.about-image', {})
scroll.reveal('.about-subtitle', {delay: 200})
scroll.reveal('.about-text', {delay: 400})

scroll.reveal('.skills-subtitle', {}); 
scroll.reveal('.skills-text', {}); 
scroll.reveal('.skill-box', {interval: 200}); 
scroll.reveal('.skills-image', {delay: 600});

scroll.reveal('.work-image', {interval: 200}); 

scroll.reveal('.contact-input', {interval: 200}); 