function bindObserver () {
    const targets = document.querySelectorAll(".lazyLoad")

    const observer = getObserver()

    for (const t of targets) {
        observer.observe(t)
    }
}

function getObserver() {
    const callback = entries => {
        entries.forEach(item => {
            if (item.isIntersecting) {
                // 开始加载图片,把data-origin的值放到src
                const url = item.target.dataset.origin
                item.target.src = url
                // 停止监听已开始加载的图片
                observer.unobserve(item.target)
            }
        })
    }

    // 一但进入视图，立即加载
    const options = {
        rootMargin: "0px 0px 0px 0px"
    }

    const observer = new IntersectionObserver(callback, options)

    return observer
}

function __main() {
    bindObserver()
}

__main()
