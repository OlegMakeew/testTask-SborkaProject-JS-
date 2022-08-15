document.getElementById('cart').addEventListener('click', function (e) {
    const div = document.getElementById('sidebar')
    div.style.display = div.style.display === 'block' ? 'none' : 'block'
})