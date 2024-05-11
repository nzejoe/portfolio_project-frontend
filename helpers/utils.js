export const getPaginatedProducts = (products) => {
    if (products.length > 0) {
        const numberPerPage = 6;
        const pages = Math.ceil(products.length / numberPerPage);
        const paginatedProducts = Array.from({ length: pages }, (_, index) => {
            const start = index * numberPerPage;
            const end = start + numberPerPage;
            return products.slice(start, end);
        });

        return paginatedProducts;
    }
};
