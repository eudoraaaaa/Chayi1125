document.getElementById('menu-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
        this.innerHTML = '&#9776;'; // 汉堡图标
    } else {
        sidebar.classList.add('show-sidebar');
        this.innerHTML = '&#10005;'; // 叉叉图标
    }
});