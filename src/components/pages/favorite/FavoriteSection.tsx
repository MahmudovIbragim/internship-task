import { useNavigate } from "react-router-dom";
import { IconFavorite } from "../../../assets";
import {
  useGetProductCarsQuery,
  usePatchFavoriteProductByIdMutation,
} from "../../../redux/api/products";
import scss from "./Favorite.module.scss";
const FavoriteSection = () => {
  const { data } = useGetProductCarsQuery();
  const [addFavorite] = usePatchFavoriteProductByIdMutation();
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
  console.log(
    data?.filter((item) => {
      return item.isFavorite;
    })
  );

  return (
    <section className={scss.FavoriteSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.container_cars}>
            {data?.map((item) =>
              item.isFavorite ? (
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
                      </div>
                    </div>
                  </div>
                </>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteSection;
