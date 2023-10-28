var arr = [
    {
        dp:"./img/me.jpeg",
        story: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNT1X1IKpIU1oXkEgFUia_r0Wcp2QeBZwggQmXc0dCg&s",
        story: "https://i.pinimg.com/474x/03/3d/e3/033de3079c5a4d6e9e57e495931449e6.jpg"
    },
    {
        dp:"./img/Harshbhaiya.jpeg",
        story: "https://i.pinimg.com/474x/3c/55/45/3c55457fee2a871acc3d117052430943.jpg"
    },
    {
        dp:"./img/Sarthakbhaiya.jpeg",
        story: "img/Majaksehatk.jpg"
    },
    {
        dp:"https://i.pinimg.com/474x/a8/48/3e/a8483e9f08fe2e6818342849ba834007.jpg",
        story: "https://i.pinimg.com/474x/25/03/0c/25030c52d4484b2025dff94b96d316a5.jpg"
    },
]

var blank = ""
arr.forEach(function(elem, id){
 blank += `<div class="story">
 <img id="${id}" src="${elem.dp}" alt="" />
</div>`
})

document.querySelector("#stories").innerHTML = blank

document.querySelector("#stories").addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    document.querySelector("#nav").style.display = "none"
    document.querySelector("#lright").style.display = "none"
    document.querySelector("#photo").style.display = "none"

    setTimeout(function(){
        document.querySelector("#photo").style.display = "block"
        document.querySelector("#nav").style.display = "block"
        document.querySelector("#lks").style.display = "flex"
        document.querySelector("#lks").style.position = "block"
        document.querySelector("#full-screen").style.display = "none"
  
    },2000)

})

document.querySelector("#photo").addEventListener("dblclick", function(){
    document.querySelector("#photo i").style.transform = "translate(-50%, -50%) scale(1)"
    document.querySelector("#photo i").style.opacity = 1 
    setTimeout(function(){
        document.querySelector("#photo i").style.opacity = 0
    },1000)
})

document.querySelector("#lks i").addEventListener("click", function(){
    document.querySelector("#photo i").style.transform = "translate(-50%, -50%) scale(1)"
    document.querySelector("#photo i").style.opacity = 1 
    setTimeout(function(){
        document.querySelector("#photo i").style.opacity = 0
    },1000)
})