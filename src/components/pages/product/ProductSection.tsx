import { useNavigate } from "react-router-dom";
import { IconDelete, IconFavorite } from "../../../assets";
import {
  useDeleteProductMutation,
  useGetProductCarsQuery,
  usePatchFavoriteProductByIdMutation,
} from "../../../redux/api/products";
import scss from "./ProductSection.module.scss";

const ProductSection = () => {
  const { data } = useGetProductCarsQuery();
  const [addFavorite] = usePatchFavoriteProductByIdMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();

  const hadnleItemFavorite = async (
    favorite: boolean,
    id: number | undefined
  ) => {
    const newData = {
      isFavorite: !favorite,
    };
    await addFavorite({ newData, id });
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
  };


  return (
    <section className={scss.ProductSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.container_cars}>
            {data?.map((item) => (
              <>
                <div
                  className={scss.card}
                  key={item._id}
                  onClick={() => {
                    navigate(`/car/${item._id}`);
                  }}
                >
                  <img src={item.img} alt="" />
                  <h2>{item.name}</h2>
                  <div className={scss.price_btns}>
                    <p>{item.price}</p>
                    <div className={scss.buttons}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          hadnleItemFavorite(item.isFavorite, item._id);
                        }}
                        style={
                          item.isFavorite
                            ? { color: "red" }
                            : { color: "white" }
                        }
                      >
                        <IconFavorite />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteProduct(item._id);
                        }}
                        style={{ color: "red" }}
                      >
                        <IconDelete />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
