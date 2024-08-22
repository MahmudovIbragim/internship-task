import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import { IconArrowBack, IconFavorite } from "../../../assets";
import { useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const match = matchPath("/car/:id", location.pathname);
  console.log(match);

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
    <header id="header" className={scss.Header}>
      <div className={scss.content}>
        <div className={scss.logo_header}>
          <Link to={"/"}>
            <img
              src="https://jetcar24.ru/wp-content/uploads/2022/11/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <nav className={scss.nav_bar}>
          <div className={scss.arrow}>
            {match?.pattern.path === "/car/:id" || location.pathname === '/favorite' ? (
              <>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <IconArrowBack />
                  <p>Вернутся</p>
                </button>
              </>
            ) : null}
          </div>
          <div 
          onClick={() => {
            navigate('/favorite')
          }}
            className={scss.icon}
            style={
              location.pathname === "/favorite"
                ? { color: "red" }
                : { color: "white" }
            }
          >
            <IconFavorite />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
