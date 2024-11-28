document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');

    try {
        const response = await fetch('/api/products');
        const products = await response.json();

        products.forEach(product => {
            const productCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">R$ ${product.price.toFixed(2)}</p>
                            <button class="btn btn-success">Comprar</button>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
});
