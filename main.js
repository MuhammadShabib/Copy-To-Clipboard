const textarea = document.querySelector("textarea")
const copyBtn = document.querySelector("button")


copyBtn.addEventListener('click', () => {
    // textarea.select()
    textarea.copy
    let text = textarea.value
    navigator.clipboard.writeText(text)
    copyBtn.innerText = "Copyed"
    copyBtn.style.backgroundColor = "rgb(57, 162, 254)"
    setTimeout(() => {
        copyBtn.innerText = "Copy It"
        copyBtn.style.backgroundColor = "rgb(167, 213, 253)"
    }, 1500)
})