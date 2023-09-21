const toggleMode = () => {
    const html = document.documentElement

    html.classList.toggle('light')

}

const trackButton = document.querySelector('#switch')

trackButton.addEventListener('click', toggleMode)