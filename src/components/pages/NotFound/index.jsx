import React from "react";

export function NotFound() {
  return (
    <main id="site-main">
      <div className="container" style={{ marginTop: "200px" }}>

        <div className="form-title text-center">
          <h1 style={{fontSize: "110px"}}>404</h1>
          <h2 style={{fontSize: "40px"}}>Page Not Found</h2>
          <label>
            The page you were looking for could not be found. <br /> It might
            have been removed, renamed, or did not exist.
          </label>
        </div>
      </div>
    </main>
  );
}
