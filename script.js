document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterProducts);

    function filterProducts() {
        const filter = searchInput.value.toLowerCase();
        const productGrid = document.querySelector('.product-grid');
        const products = productGrid.getElementsByClassName('product');

        Array.from(products).forEach(product => {
            const title = product.getElementsByTagName('h2')[0].innerText.toLowerCase();
            if (title.includes(filter)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
