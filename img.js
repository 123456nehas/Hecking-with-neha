const img = document.querySelector('.rr');
console.log(img);
let rtdeg = 0;
setInterval(() => {
    rtdeg += 1;
    //img.style.transform = `rotate('+rtdeg+'deg)`;
    img.style.transform = `rotate(${rtdeg}deg)`;
    console.log(rtdeg);                 
    if (rtdeg >= 360) {
        rtdeg = 0;
    }
}, 1000 / 60);