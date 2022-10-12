let canvasBody = document.getElementById('canvas'),
    ctx = canvasBody.getContext('2d'),
    w = canvasBody.width = window.innerWidth,
    h = canvasBody.height = window.innerHeight,
    frame = 0,
    options = {
        size: 30,
        randomConst: 30,
        color: "rgba(12, 123, 42, alpha)",
        opacity: 1,
    };

function anim() {
    window.requestAnimationFrame(anim);
    frame++;
    if(frame % 6 == 0) {
        step();
    }
   
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

anim();

function step() {
    let fillColor = options.color.replace('alpha', random(0, options.opacity));
    ctx.fillStyle = fillColor;
    let rnd = random(options.size - options.randomConst, options.size + options.randomConst);
    ctx.fillRect(random(0, w), random(0, h), options.size + rnd, options.size + rnd);
    ctx.fillStyle = "rgba(255, 255, 255, 0.1";
    ctx.fillRect(0, 0, w, h);
}
