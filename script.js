const cart = document.querySelectorAll('.cart');
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");

cart.forEach(btn => {
    btn.addEventListener('click', () => {
        sidebar.classList.add("active");
    }
    )
}

)

close.addEventListener('click', () => {
    sidebar.classList.remove("active")
})