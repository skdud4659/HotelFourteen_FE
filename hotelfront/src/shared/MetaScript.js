import React from "react";
import { Helmet } from "react-helmet-async";

const MetaScript = () => {
  return (
    <Helmet>
      <title>Hotel Fourteen</title>
      <meta property="og:title" content="Hotel Fourteen" />
      <meta property="og:description" content="국내 유일의 6성급 호텔." />
      <meta property="og:image" content="../img/review_img.jpeg" />
    </Helmet>
  );
};

export default MetaScript;
