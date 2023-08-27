canvas = document.getElementById("c")
ctx = canvas.getContext("2d")

ctx.fillStyle = 'babyblue'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.translate(canvas.width / 2, canvas.height / 2)

let FRAME_RATE = 60 // frames per sec

start_button = document.getElementById("start_button")

//one big function - on load and on restart

let plane_speed = 3 // pixels per ms ?
let spiral_step = document.getElementById("k_param").value // pixels between spiral loops 
console.log(spiral_step)
let k = (spiral_step / (2 * Math.PI) )

// let sound_speed = 50

let x = y = 0
let theta = 0 //get from input

let draw_reference = setInterval(draw, 1000 / FRAME_RATE)


function draw() {
    // Drawing next point of the trajectory
    d_theta = plane_speed / ( k * Math.sqrt((1 + theta ** 2)))
    theta += d_theta

    x = k * theta * Math.cos(theta)
    y = k *theta * Math.sin(theta)
    console.log(x, y)

    ctx.fillStyle = 'red'
    ctx.fillRect(Math.min(x, canvas.width), Math.min(y, canvas.height), 1, 1)


    if ((Math.abs(x) > canvas.width / 2) && (Math.abs(y) > canvas.height / 2)) {
        clearInterval(draw_reference)
        // add a message in some hidded div below the canvas or over?
    }
}