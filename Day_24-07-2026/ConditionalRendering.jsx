import React from "react";

function  Rendering() {
  const isLogin = true;

  return (
    <div>
      {isLogin ? <h2>Welcome Susmitha</h2> : <h2>Please Login</h2>}
    </div>
  );
}

export default Rendering;