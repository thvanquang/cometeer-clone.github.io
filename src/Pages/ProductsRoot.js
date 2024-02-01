import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import classes from "./ProductsRoot.module.css";

import ProductNavbar from "../Components/ProductNavbar";
import ProductComparament from "../Components/ProductComparament";
import ProductWhatYouGet from "../Components/ProductWhatYouGet";
import ProductCometeerRecipes from "../Components/ProductCometeerRecipes"

const ProductsRootLayout = () => {
  const [postionToFixedNavbar, setPositionToFixedNavbar] = useState();

  return (
    <div className={classes.background}>
      <Outlet context={[postionToFixedNavbar, setPositionToFixedNavbar]} />
      <ProductNavbar postionToFixedNavbar={postionToFixedNavbar} />
      <ProductComparament />
      <ProductWhatYouGet />
      <ProductCometeerRecipes />
    </div>
  );
};

export default ProductsRootLayout;
