let context = document.getElementById("gCanvas").getContext("2d")
context.canvas.width = 300
context.canvas.height = 700

let fps = 60

let bird = {
    x: 100,
    y: 150,
    w: 50,
    h: 50
}

setInterval(loop, 1000 / fps)

function loop(){
    context.clearRect(0, 0, 300, 700)
    contexto.fillStyle = "rgba(100,0,0,1"
}