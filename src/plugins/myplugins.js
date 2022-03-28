let myplugin = function (Vue) {
    Vue.prototype.debouncefn = function (fn, wait) {
        let timer = null
        return function () {
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn()//fn 是业务函数

            }, wait)
        }

    }
}
export default myplugin