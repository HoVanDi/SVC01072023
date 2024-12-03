import { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(false);
  const [menus] = useState([
    {
      name: "Trang Chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCTS,
      isShowMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Liên hệ",
      path: ROUTERS.USER.PRODUCTS,
    },
  ]);
  return (
    <>
      <div className="wrap-header">
        <div className="container">
          <div className="row">
            <div className="col-6 wrap-header-left">
              <ul>
                <li>
                  <AiOutlineMail />
                  hello@gmail.com
                </li>
                <li> Miễn phí đơn hàng có giá trị từ {formatter(200000)} </li>
              </ul>
            </div>
            <div className="col-6 wrap-header-right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineGlobal />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
              <h1>Sivi SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>

                    {menu?.child && (
                      <ul className="menu_dropdown">
                        {menu?.child.map((childItem, chilKey) => (
                          // không để trung với key bên ngoài
                          <li key={`${menuKey}-${childItem}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="">
                    <AiOutlineShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row hero_category_container">
          <div className="col-lg-3 hero_categories">
            <div
              className="hero_categories_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>

            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hiden"}>
                <li>
                  <Link to=""> Thịt tươi</Link>
                </li>
                <li>
                  <Link to=""> Rau củ</Link>
                </li>
                <li>
                  <Link to=""> Nước trái cây</Link>
                </li>
                <li>
                  <Link to=""> Trái cây </Link>
                </li>
                <li>
                  <Link to=""> Hải sản</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero-search-container">
            <div className="hero-search">
              <div className="hero-search-form">
                <form>
                  <input type="text" placeholder="Bạn đang tìm gì?" />
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>

              <div className="hero-search-phone">
                <div className="hero-search-phone-icon">
                  <AiOutlinePhone />
                </div>

                <div className="hero-search-phone-text">
                  <p>035.9215.610</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>

            <div className="hero-item">
              <div className="hero-text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to="" className="primary-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
