const radioButtons = document.querySelectorAll('input[name="theme"]')

radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.id === 'dark') {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
  })
})
