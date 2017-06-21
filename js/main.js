var log = console.log.bind(console)
var e = function(selector) {
    return document.querySelector(selector)
}
var es = function(selector) {
    return document.querySelectorAll(selector)
}
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}
var listall = Number(e('.main-slide').dataset.imgs)
var active = Number(e('.main-slide').dataset.active)
var listId = function (t) {
    return e(`#ma-slide-${t}`)
}
var removeActive = function(frist) {
    for (var i = 0; i < 3; i++) {
        listId((frist + i) % listall).classList.remove('ma-active')
    }
}
var addActive = function(Other) {
    for (var i = 0; i < 3; i++) {
        listId((Other + i) % listall).classList.add('ma-active')
    }
}
function clickArrowright() {
    var arrowAfter = e('.ma-arraw-right')
    bindEvent(arrowAfter, 'click', function(event) {
        removeActive(active)
        addActive((active + 3) % listall)
        active = (active + 3) % listall
    })
}
function clickArrowleft() {
    var arrowBefore = e('.ma-arraw-left')
    bindEvent(arrowBefore, 'click', function(event) {
        removeActive(active)
        addActive((active + listall - 3) % listall)
        active = (active + listall - 3) % listall
    })
}
function _main(){
    clickArrowleft()
    clickArrowright()
}
_main()
