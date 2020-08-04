const spans = document.querySelectorAll('h1 span')

spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(90% - 6px)', ease: Power4.easeOut })
    .fromTo(cssBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(95% - 6px)', ease: Power4.easeOut })
    .fromTo(jsBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(75% - 6px)', ease: Power4.easeOut })
    .fromTo(reactBar, .75, { width: 'calc(0% - 6px)' }, { width: 'calc(70% - 6px)', ease: Power4.easeOut })

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})

