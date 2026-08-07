import React, { useEffect } from "react";

function EffectHook() {
  useEffect(() => {
    console.log("Page Loaded");
  }, []);

  return (
    <div>
      <h2>nyb</h2>
    </div>
  );
}

export default EffectHook;