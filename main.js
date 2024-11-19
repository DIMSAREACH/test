const btnNo = document.getElementById("btnNo")

// Nobtn.onmousemove =()=>{
//     const x = window.innerWidth
//     const y = window.innerHeight
    
//     const randomX = Math.floor(Math.random() * (x-100))
//     const randomY = Math.floor(Math.random() * (y-50))
    
//     Nobtn.style.left = randomX +"px"
//     Nobtn.style.top = randomY +"px"
// }

btnNo.onmousemove =()=>{
    for(let i=0;i<5;i++){
        const btnYes = document.createElement("button")
        btnYes.id = `btnYes`
        btnYes.textContent = "Yes"
        btnYes.classList.add("btn","bg-primary","text-light")

        const x = window.innerWidth
        const y = window.innerHeight
        
        const randomX = Math.floor(Math.random() * (x-100))
        const randomY = Math.floor(Math.random() * (y-50))
        
        btnNo.style.left = randomX +"px"
        btnNo.style.top = randomY +"px"
        
        const randX = Math.floor(Math.random() * (x-90))
        const randY = Math.floor(Math.random() * (y-50))

        btnYes.style.left = randX +"px"
        btnYes.style.top = randY +"px"

        // document.body.appendChild(btnYes)
    }
}
