const result = document.getElementById('cards')
const filter = document.getElementById('filter')
const listItems = []
const obj = [
    {"src": "ExpandingCards.JPG", "title": "Expanding Cards", "href": "1. expandingCards"},
    {"src": "ProgressSteps", "title": "Progress Steps", "href": "2.progressSteps"},
    {"src": "RotatingNavigation", "title": "Rotating Navigation", "href": "3. rotatingNavigation"},
    {"src": "HiddenSearch", "title": "Hidden Search", "href": "4. hiddenSearch"},
    {"src": "BlurryLoading", "title": "Blurry Loading", "href": "5. blurryLoading"},
    {"src": "DrangNDrop", "title": "Drag and Drop", "href": "6.dragNdrop"},
    {"src": "autoTex", "title": "Auto Text", "href": "7.autoText"},
    {"src": "HoverBoard", "title": "Hover Board", "href": "8.hoverBoard"},
    {"src": "ScrollAnimation", "title": "Scroll Animation", "href": "9. ScrollAnimation"},
    {"src": "FormInput", "title": "Form Input Wave", "href": "10. FormInputWave"},
    {"src": "DadJokes", "title": "Dad Jokes", "href": "11. DadJokes"},
    {"src": "SoundBoard", "title": "Sound Board","href": "12. SoundBoard"},
    {"src": "LiveUserFilter", "title": "Live User Filter", "href": "13. LiveUserFilter"},
    {"src": "ButtonRipple", "title": "Button Ripple Effect", "href": "14. ButtonRippleEffect"},
    {"src": "BackgroundSlider", "title": "Background Slider","href": "15. BackgroundSlider"},
    {"src": "KineticLoader", "title": "Kinetic Loader", "href": "16. KineticLoader"},
    {"src": "NetflixMobile", "title": "Netflix Navigation", "href": "17. NetflixNavigation"},
    {"src": "TestimonialBoxSwitcher", "title": "Testimonial Box Switcher", "href": "18. TestimonialBoxSwitcher"},
    {"src": "Pokedex", "title": "Pokedex", "href": "19. Pokedex"},
    {"src": "DobleClickHeart", "title": "Doble Click Heart", "href": "20. DobleClickHeart"},
    {"src": "EventKeyCode", "title": "Event Keycodes", "href": "21. EventKeycodes"},
    {"src": "MobileTabNavigation", "title": "Mobile Nav Navigation", "href": "22. MobileNavNavigation"},
    {"src": "DrinkWater", "title": "Drink Water", "href": "23. DrinkWater"},
    {"src": "FeedbackUIDesing", "title": "Feedback UI Desing", "href": "24. FeedbackUIDesing"},
    {"src": "GithubProfile", "title": "GitHub Profile", "href": "25. GitHubProfile"}
]

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

function getData() {

    // Clear result
    result.innerHTML = ''

    obj.forEach(element => {
        const div = document.createElement('div')

        listItems.push(div)

        div.innerHTML = `
            <div class="card text-center text-info bg-dark" style="width: 18rem;">
                <img class="card-img-top" src="images/${element.src}.png" alt="Card image cap">
                <div class="card-body bg-dark">
                    <h5 class="card-title bg-dark">${element.title}</h5>
                    <a class="btn btn-info" href="${element.href}/index.html" role="button">Click me</a>
                </div>
            </div>
        `
        result.appendChild(div)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}