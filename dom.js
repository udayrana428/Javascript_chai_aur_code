const body = document.body
body.append("By Uday Rana")

const div = document.createElement("div")
div.innerText = "Hello World!"

body.append(div)

const heading = document.getElementsByTagName("h1")
heading[0].innerText = "Dom Man"

const strongElm = document.createElement('strong')
strongElm.innerText = "Vaibhav"
body.append(strongElm)

div.innerHTML = '<i>Rahul</i>'

// strongElm.remove()

strongElm.title = "I am vaibhav"
console.log(strongElm.getAttribute("title"))
strongElm.setAttribute("id", "se")
// strongElm.removeAttribute("title")

strongElm.className = "strong"

strongElm.classList.replace("strong", "isStrong")
strongElm.classList.remove("isStrong")
strongElm.style.cursor = "pointer"

strongElm.addEventListener("click", ()=>{
    strongElm.classList.toggle("isStrong")
})

