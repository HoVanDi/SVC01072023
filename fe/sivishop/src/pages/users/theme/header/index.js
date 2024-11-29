import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  AiOutlineFacebook,
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { formatter } from "utils/fomater";

const Header = () => {
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
          <div className="col-xl-3">LOGO</div>
          <div className="col-xl-6">MENU</div>
          <div className="col-xl-3">PHONE</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
