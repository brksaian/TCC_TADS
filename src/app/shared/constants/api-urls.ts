import { environment } from './environment';

// URLs específicas do serviço Social
export const API_URLS = {
  social: {
    admin: {
      getTotalReviews: `${environment.SERVICES.social}/admin/total-reviews`,
      listReviews: `${environment.SERVICES.social}/admin/review/pending-approval`,
      approveReview: (reviewId: string) =>
        `${environment.SERVICES.social}/admin/review/${reviewId}/approve`,
      rejectReview: (reviewId: string) =>
        `${environment.SERVICES.social}/admin/review/${reviewId}/reject`,
    },
    profile: {
      getUserProfile: (keycloakId: string) =>
        `${environment.SERVICES.social}/profile/${keycloakId}`,
      getUserFavorites: (userKeycloakId: string) =>
        `${environment.SERVICES.social}/profile/${userKeycloakId}/favorites`,
      getReceipts: (idKeycloak: string) =>
        `${environment.SERVICES.social}/profile/${idKeycloak}/receipts`,
      followUser: (userKeycloakId: string) =>
        `${environment.SERVICES.social}/profile/follow/${userKeycloakId}`,
      getFollowingUsers: `${environment.SERVICES.social}/profile/following`,
      getFollowers: `${environment.SERVICES.social}/profile/followers`,
    },
    shoppingList: {
      getShoppingList: `${environment.SERVICES.social}/shopping-list`,
      addProducts: `${environment.SERVICES.social}/shopping-list/add-products`,
      removeProducts: `${environment.SERVICES.social}/shopping-list/remove-products`,
      calculate: (cep: string, distance: number) =>
        `${environment.SERVICES.social}/shopping-list/calculate?cep=${cep}&distance=${distance}`,
    },
    comment: {
      createComment: `${environment.SERVICES.social}/comment`,
      getComments: (productId: string) =>
        `${environment.SERVICES.social}/comment/${productId}`,
    },
    review: {
      createReview: (productId: string) =>
        `${environment.SERVICES.social}/product/reviews/${productId}`,
      updateReview: (reviewId: string) =>
        `${environment.SERVICES.social}/product/reviews/${reviewId}`,
      getReviews: (productId: string) =>
        `${environment.SERVICES.social}/product/reviews/${productId}`,
      deleteReview: (reviewId: string) =>
        `${environment.SERVICES.social}/product/reviews/${reviewId}`,
    },
    ranking: {
      userRanking: `${environment.SERVICES.social}/ranking`,
    },
    favoriteProduct: (productId: string) =>
      `${environment.SERVICES.social}/product/favorite/${productId}`,
  },
  register: {
    admin: {
      getTotalRegisteredUsers: `${environment.SERVICES.register}/admin/total-registered-users`,
      listUsers: (
        page: number,
        size: number,
        sortDirection: string = 'ASC',
        sortBy: string = 'firstName'
      ) =>
        `${environment.SERVICES.register}/admin/customer?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      deleteUser: (keycloakId: string) =>
        `${environment.SERVICES.register}/admin/customer/${keycloakId}`,
      updateUser: (keycloakId: string) =>
        `${environment.SERVICES.register}/admin/customer/${keycloakId}`,
    },
    account: {
      createCustomerUser: `${environment.SERVICES.register}/account/user`,
      updateCustomerUser: `${environment.SERVICES.register}/account/user`,
      searchUserByFirstname: (
        firstname: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.register}/account/user/search?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&firstname=${firstname}`,
      getUserById: (keycloakId: string) =>
        `${environment.SERVICES.register}/account/user/${keycloakId}`,
    },
    store: {
      createStoreUser: `${environment.SERVICES.register}/account/store`,
      getStoreById: (storeId: string) =>
        `${environment.SERVICES.register}/store/${storeId}`,
      listStores: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.register}/account/store?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      searchStoreByName: (
        name: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.register}/account/store/search?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&name=${name}`,
      updateStore: (keycloakId: string) =>
        `${environment.SERVICES.register}/admin/store/${keycloakId}`,
    },
  },
  catalog: {
    admin: {
      getTotalRegisteredProducts: `${environment.SERVICES.catalog}/admin/total-registered-products`,
      getProductsWithoutCategory: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/without-category?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getProductsWithoutImage: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/without-image?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
    },
    product: {
      addCategory: `${environment.SERVICES.catalog}/category`,
      uploadImage: (productId: string) =>
        `${environment.SERVICES.catalog}/product/${productId}/upload-image`,
      getCategories: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/category?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getProductsByCategory: (
        categoryId: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/by-category?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&categoryId=${categoryId}`,
      deleteCategory: (categoryId: string) =>
        `${environment.SERVICES.catalog}/category/${categoryId}`,
      updateCategory: (categoryId: string) =>
        `${environment.SERVICES.catalog}/category/${categoryId}`,
      addCategoryToProduct: (productId: string) =>
        `${environment.SERVICES.catalog}/product/${productId}/add-category`,
      getProducts: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getProductById: (id: string) => `${environment.SERVICES.catalog}/product/${id}`,
      searchProductsByName: (
        name: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/search?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&name=${name}`,
      getAllProductsWithLowestPrice: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/lowest-price?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getPriceHistoryByProductId: (
        id: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/price-history?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}&id=${id}`,
      getProductDetails: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/products-details?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      listProductPricesByStore: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.catalog}/product/prices-by-store?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
    },
  },
  receiptScan: {
    scan: {
      scanReceipt: `${environment.SERVICES.receiptScan}/scan`,
      getScannedReceipts: (
        idKeycloak: string,
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.receiptScan}/scan/receipts/${idKeycloak}?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
      getUserStatistics: (
        page: number,
        size: number,
        sortDirection: string,
        sortBy: string
      ) =>
        `${environment.SERVICES.receiptScan}/scan/users-statistics?page=${page}&size=${size}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
    },
  },
  auth: {
    generateToken: `${environment.SERVICES.auth}/auth/generate-token`,
  },
};

// Exportação padrão
export default API_URLS;
