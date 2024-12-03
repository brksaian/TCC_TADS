// URLs base para diferentes serviços com suas respectivas portas
const SERVICES = {
  auth: 'https://d358-2804-d55-760f-4800-d9a8-4daf-1b92-c5f1.ngrok-free.app/auth', // Serviço de autenticação
  gateway: 'http://localhost:8000/', // Gateway
  register:
    'https://d358-2804-d55-760f-4800-d9a8-4daf-1b92-c5f1.ngrok-free.app/register', // register
  receiptScan: 'http://localhost:8083', // Serviço de escaneamento de recibos
  catalog:
    'https://d358-2804-d55-760f-4800-d9a8-4daf-1b92-c5f1.ngrok-free.app/catalog', // Serviço de catálogo
  social:
    'https://d358-2804-d55-760f-4800-d9a8-4daf-1b92-c5f1.ngrok-free.app/social', // Serviço de catálogo
};

// URLs específicas do serviço Social
export const API_URLS = {
  social: {
    admin: {
      getTotalReviews: `${SERVICES.social}/admin/total-reviews`,
      listReviews: `${SERVICES.social}/admin/review/pending-approval`,
      approveReview: (reviewId: string) =>
        `${SERVICES.social}/admin/review/${reviewId}/approve`,
      rejectReview: (reviewId: string) =>
        `${SERVICES.social}/admin/review/${reviewId}/reject`,
    },
    profile: {
      getUserProfile: (keycloakId: string) =>
        `${SERVICES.social}/profile/${keycloakId}`,
      getUserFavorites: (userKeycloakId: string) =>
        `${SERVICES.social}/profile/${userKeycloakId}/favorites`,
      getReceipts: (idKeycloak: string) =>
        `${SERVICES.social}/profile/${idKeycloak}/receipts`,
      followUser: (userKeycloakId: string) =>
        `${SERVICES.social}/profile/follow/${userKeycloakId}`,
      getFollowingUsers: `${SERVICES.social}/profile/following`,
      getFollowers: `${SERVICES.social}/profile/followers`,
    },
    shoppingList: {
      getShoppingList: `${SERVICES.social}/shopping-list`,
      addProducts: `${SERVICES.social}/shopping-list/add-products`,
      removeProducts: `${SERVICES.social}/shopping-list/remove-products`,
      calculate: (cep: string, distance: number) =>
        `${SERVICES.social}/shopping-list/calculate?cep=${cep}&distance=${distance}`,
    },
    comment: {
      createComment: `${SERVICES.social}/comment`,
      getComments: (productId: string) =>
        `${SERVICES.social}/comment/${productId}`,
    },
    review: {
      createReview: (productId: string) =>
        `${SERVICES.social}/product/reviews/${productId}`,
      updateReview: (reviewId: string) =>
        `${SERVICES.social}/product/reviews/${reviewId}`,
      getReviews: (productId: string) =>
        `${SERVICES.social}/product/reviews/${productId}`,
      deleteReview: (reviewId: string) =>
        `${SERVICES.social}/product/reviews/${reviewId}`,
    },
    ranking: {
      userRanking: `${SERVICES.social}/ranking`,
    },
    favoriteProduct: (productId: string) =>
      `${SERVICES.social}/product/favorite/${productId}`,
  },
  register: {
    admin: {
      getTotalRegisteredUsers: `${SERVICES.register}/admin/total-registered-users`,
      listUsers: (
        page: number,
        size: number,
        sortDirection: string = 'ASC',
        sortBy: string = 'firstName'
      ) =>
        `${SERVICES.register}/admin/customer?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      deleteUser: (keycloakId: string) =>
        `${SERVICES.register}/admin/customer/${keycloakId}`,
      updateUser: (keycloakId: string) =>
        `${SERVICES.register}/admin/customer/${keycloakId}`,
    },
    account: {
      createCustomerUser: `${SERVICES.register}/account/user`,
      updateCustomerUser: `${SERVICES.register}/account/user`,
      searchUserByFirstname: (
        firstname: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.register}/account/user/search?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&firstname=${firstname}`,
      getUserById: (keycloakId: string) =>
        `${SERVICES.register}/account/user/${keycloakId}`,
    },
    store: {
      createStoreUser: `${SERVICES.register}/account/store`,
      getStoreById: (storeId: string) =>
        `${SERVICES.register}/store/${storeId}`,
      listStores: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.register}/account/store?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      searchStoreByName: (
        name: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.register}/account/store/search?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&name=${name}`,
      updateStore: (keycloakId: string) =>
        `${SERVICES.register}/admin/store/${keycloakId}`,
    },
  },
  catalog: {
    admin: {
      getTotalRegisteredProducts: `${SERVICES.catalog}/admin/total-registered-products`,
      getProductsWithoutCategory: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/without-category?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getProductsWithoutImage: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/without-image?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
    },
    product: {
      addCategory: `${SERVICES.catalog}/category`,
      uploadImage: (productId: string) =>
        `${SERVICES.catalog}/product/${productId}/upload-image`,
      getCategories: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/category?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getProductsByCategory: (
        categoryId: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/by-category?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&categoryId=${categoryId}`,
      deleteCategory: (categoryId: string) =>
        `${SERVICES.catalog}/category/${categoryId}`,
      updateCategory: (categoryId: string) =>
        `${SERVICES.catalog}/category/${categoryId}`,
      addCategoryToProduct: (productId: string) =>
        `${SERVICES.catalog}/product/${productId}/add-category`,
      getProducts: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getProductById: (id: string) => `${SERVICES.catalog}/product/${id}`,
      searchProductsByName: (
        name: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/search?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&name=${name}`,
      getAllProductsWithLowestPrice: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/lowest-price?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getPriceHistoryByProductId: (
        id: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/price-history?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&id=${id}`,
      getProductDetails: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/products-details?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      listProductPricesByStore: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.catalog}/product/prices-by-store?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
    },
  },
  receiptScan: {
    scan: {
      scanReceipt: `${SERVICES.receiptScan}/scan`,
      getScannedReceipts: (
        idKeycloak: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.receiptScan}/scan/receipts/${idKeycloak}?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getUserStatistics: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${SERVICES.receiptScan}/scan/users-statistics?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
    },
  },
  auth: {
    generateToken: `${SERVICES.auth}/auth/generate-token`,
  },
};

// Exportação dos serviços
export { SERVICES };

// Exportação padrão
export default API_URLS;
