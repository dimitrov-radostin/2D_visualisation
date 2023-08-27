canvas = document.getElementById("c")
ctx = canvas.getContext("2d")


let plane_speed = 5 // pixels per ms ?
let spiral_step = 15 // pixels between spiral loops 
let sound_speed = 50
let plane_x = plane_y = 2
let x = y = 2

ctx.fillStyle = 'babyblue'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.translate(canvas.width / 2, canvas.height / 2)


let draw_reference = setInterval(draw, 1000 / 100)

let theta = 0

function draw() {

    // Drawing trajectory

    d_theta = plane_speed / Math.sqrt((1 + theta ** 2))
    theta += d_theta

    x = theta * Math.cos(theta)
    y = theta * Math.sin(theta)
    console.log(x, y)

    ctx.fillStyle = 'red'
    ctx.fillRect(Math.min(x, canvas.width), Math.min(y, canvas.height), 2, 2)

    // ctx.beginPath();
    // ctx.arc(75, 75, 5, 0, Math.PI * 2)
    // ctx.stroke()

    // t += d_t / 100


    if ((Math.abs(x) > canvas.width / 2) && (Math.abs(y) > canvas.height / 2)) {
        clearInterval(draw_reference)
    }
}