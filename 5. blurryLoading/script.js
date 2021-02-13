const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

console.log(loadText)

let load = 0
let loadOpacity = 1
let loadBlur = 30


let int = setInterval(blurring, 30)

function blurring() {


    if (load < 100) {
        load += 1
        loadOpacity = mapping(load, 1, 0)
        loadBlur = mapping(load, 30, 0)
        console.log(`opacity: ${loadOpacity} blurring: ${loadBlur}`)
    }
    else {
        clearInterval(int)
    }
    loadText.innerText = load + "%"
    loadText.style.opacity = loadOpacity
    bg.style.filter = `blur(${loadBlur}px)`
}

function mapping(load, outputStart, outputEnd) {
    const loadStart = 0
    const loadEnd = 100

    let output = outputStart + ((outputEnd - outputStart) / (loadEnd - loadStart)) * (load - loadStart)

    return output
}