import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    GetProductCars: build.query<
      PRODUCT.GetProductResponse,
      PRODUCT.GetProductRequest
    >({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    GetProductById: build.query<
      PRODUCT.GetProductByIdResponse,
      PRODUCT.GetProductByIdRequest
    >({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    PatchFavoriteProductById: build.mutation({
      query: ({
        newData,
        id,
      }: {
        newData: { isFavorite: boolean };
        id: number | undefined;
      }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["product"],
    }),
    DeleteProduct: build.mutation({
      query: (id: number) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductCarsQuery,
  useGetProductByIdQuery,
  usePatchFavoriteProductByIdMutation,
  useDeleteProductMutation,
} = api;
