const h1Body = () => {
    const header = document.createElement('h1')
    header.textContent = "Hello World!";
    header.id = "main-heading";
    document.body.appendChild(header)
}

const para = () => {
    const p = document.createElement('p')
    p.textContent = "Look, I'm some text!";
    p.id = "main-text";
    p.classList = "boring-text"
    document.body.appendChild(p)
}

const allEl = () => {
    h1Body()
    para()
}

allEl()