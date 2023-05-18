// 定义成员：
const sum = function (a, b) {
    return parseInt(a) + parseInt(b)
}
const subtract = function (a, b) {
    return parseInt(a) - parseInt(b)
}
//都是001里面放置方法，在002里面调用
//在est6里面更好写，并且简化很多
//设置哪些方法可以被其他的js调用
module.exports = {
    sum,
    subtract
}