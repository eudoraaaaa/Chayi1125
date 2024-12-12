// 控制导航栏的滚动样式
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.menu');
    
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 控制 scrollable-images 区域的滚动行为
const scrollableImages = document.querySelector('.scrollable-images');

// 当用户开始在 scrollable-images 区域滚动时禁用页面整体滚动
scrollableImages.addEventListener('touchstart', () => {
    document.body.style.overflow = 'hidden';
});

// 当用户结束在 scrollable-images 区域滚动时恢复页面整体滚动
scrollableImages.addEventListener('touchend', () => {
    document.body.style.overflow = 'auto';
});