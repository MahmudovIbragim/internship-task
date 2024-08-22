import { useNavigate, useParams } from "react-router-dom";
import scss from "./About.module.scss";
import {
  useGetProductByIdQuery,
  usePatchFavoriteProductByIdMutation,
} from "../../../redux/api/products";
import { useEffect } from "react";
const AboutSection = () => {
  const params = useParams();
  const navigate = useNavigate();

  const carId = Number(params.id);

  const { data } = useGetProductByIdQuery(carId);
  const [FavoriteData] = usePatchFavoriteProductByIdMutation();

  const handleItemIsFavorite = async (id: number | undefined) => {
    const newData = {
      isFavorite: true,
    };
    await FavoriteData({ newData, id });
  };

  useEffect(() => {
    const element = document.getElementById("header");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className={scss.AboutSection}>
      <div className="container">
        <div className={scss.content}>
          <img src={data?.img} alt="" />
          <div className={scss.info_container}>
            <div className={scss.title_content}>
              <h1>{data?.name}</h1>
              <p>{data?.price}</p>
            </div>
            <div className={scss.info_product}>
              <table>
                <tbody>
                  <tr>
                    <th>Пробег</th>
                    <td>{data?.mileage}</td>
                  </tr>
                  <tr>
                    <th>Год выпуска</th>
                    <td>{data?.yearOfIssue}</td>
                  </tr>
                  <tr>
                    <th>Тип двигателя</th>
                    <td>{data?.engineType}</td>
                  </tr>
                  <tr>
                    <th>Объем двигателя</th>
                    <td>{data?.engineSize}</td>
                  </tr>
                  <tr>
                    <th>Мощность</th>
                    <td>{data?.power}</td>
                  </tr>
                </tbody>
              </table>
              <div className={scss.button}>
                {data?.isFavorite ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/favorite");
                      }}
                    >
                      Перейти в избранное
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        handleItemIsFavorite(data?._id);
                      }}
                    >
                      Добавить в избранное
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
