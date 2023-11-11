//swtich function

const switchTheme = () => {
  // Get the root element and data-theme value
  const rElement = document.documentElement
  let theme = rElement.getAttribute('data-theme')

  let newTheme = theme === 'light' ? 'dark' : 'light'

  // Set the theme
  rElement.setAttribute('data-theme', newTheme)

  // Set the localStorage theme preference
  localStorage.setItem('theme', newTheme)
}

// Add event listener for switching theme
document.querySelector('.toggle').addEventListener('click', switchTheme)

// Listen for OS theme changes
