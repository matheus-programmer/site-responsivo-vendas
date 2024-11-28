const products = [
    { id: 1, name: 'Guia de Yoga', price: 29.99 },
    { id: 2, name: 'Plano de Treinamento HIIT', price: 19.99 },
    { id: 3, name: 'Curso de Meditação', price: 49.99 }
];

class ProductModel {
    static getAll() {
        return products;
    }
}

module.exports = ProductModel;
