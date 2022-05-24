const el = document.querySelector("#search");

el.addEventListener("mousemove", (e) => {
    // console.log(e);
    el.style.setProperty('--x', -e.screenX + "px");
    el.style.setProperty('--y', -e.screenY + "px");
});


var title01 = new Vue({
    el: '.title01',
    data: {
        show: false,
        isZture: true
    }
})

var menu01 = new Vue({
    el: '.menu01',
    data: {
        show: false,
        isZture: false
    }
})

var thought_page = new Vue({
    el: '.thought_page',
    data: {
        show: false,
        isZture: false
    }
})


async function atob(afrom, ato) {
    afrom._data.show = false;
    afrom._data.isZture = false;
    await new Promise(resolve => setTimeout(resolve, 200));
    ato._data.show = true;
    ato._data.isZture = true;
}

title01._data.show = true;
title01._data.isZture = true;