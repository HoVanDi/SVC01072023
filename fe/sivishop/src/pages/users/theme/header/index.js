import { memo } from "react";
import "./style.scss"

const Header = () => {
  return (
    <div className="wrap-header">
      <h1 className="container">Header</h1>
    </div>
  );
};

export default memo(Header);
