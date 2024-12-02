export const API_URLS = {
  auth: {
    generateToken: '/auth/generate-token',
  },
  gateway: {
    scanReceipt: '/receipt-scan/scan',
    getProducts: '/catalog/product',
    searchProducts: (name: string) => `/catalog/product/search?name=${name}`,
    getLowestPriceProducts: '/catalog/product/lowest-price',
  },
  receiptScan: {
    scan: '/scan',
    getScannedReceipts: (idKeycloak: string) => `/scan/receipts/${idKeycloak}`,
    getUserStatistics: '/scan/users-statistics',
  },
  catalog: {
    admin: {
      getTotalRegisteredProducts: '/admin/total-registered-products',
      getProductsWithoutCategory: '/product/without-category',
      getProductsWithoutImage: '/product/without-image',
    },
    product: {
      addCategory: '/category',
      uploadProductImage: (productId: string) =>
        `/product/${productId}/upload-image`,
      getCategories: '/category',
      getProductsByCategory: (categoryId: string) =>
        `/product/by-category?categoryId=${categoryId}`,
      deleteCategory: (categoryId: string) => `/category/${categoryId}`,
      updateCategory: (categoryId: string) => `/category/${categoryId}`,
      addCategoryToProduct: '/product/add-category',
    },
  },
};
