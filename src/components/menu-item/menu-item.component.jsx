import React from "react";

const MenuItem = ({title}) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;