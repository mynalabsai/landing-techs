import anime from "animejs";

function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, {scale: 0.5});
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth ;
        timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
}

export let dotsFuncMobile = function() {
    var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
    var dotsFragment = document.createDocumentFragment();
    var grid = [20, 10];
    var cell = 55;
    var numberOfElements = grid[0] * grid[1];
    var animation;
    var paused = true;

    fitElementToParent(staggerVisualizerEl, 0);

    for (var i = 0; i < numberOfElements; i++) {
        var dotEl = document.createElement('div');
        dotEl.classList.add('dot');
        dotsFragment.appendChild(dotEl);
    }

    dotsWrapperEl.appendChild(dotsFragment);

    var index = anime.random(0, numberOfElements-1);
    var nextIndex = 0;


    function play() {

        paused = false;
        if (animation) animation.pause();

        nextIndex = anime.random(0, numberOfElements-1);

        animation = anime.timeline({
            easing: 'easeInOutQuad'
        })

            .add({
                targets: '.stagger-visualizer .dot',
                keyframes: [
                    {
                        translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
                        translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
                        duration: 100
                    }, {
                        translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
                        translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
                        scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
                        duration: 225
                    }, {
                        translateX: 0,
                        translateY: 0,
                        scale: 1,
                        duration: 1200,
                    }
                ],
                delay: anime.stagger(80, {grid: grid, from: index})
            }, 30)


        index = nextIndex;
    }
    play()
};




