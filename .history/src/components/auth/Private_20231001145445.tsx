import React from "react";

const Private = ({ isLoggedIn, Component }) => {
  if (!isLoggedIn) {
    return <Component />;
  } else {
    return <div>Private</div>;
  }
};

export default Private;
