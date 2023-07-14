import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, [1500]);
  }, []);

  return (
    <>
      {loader && (
        <div className="loader">
          <div className="centered">
            <p>charting your data......</p>
          </div>
        </div>
      )}

      <div>
        <Navbar />
        <Main />
      </div>
    </>
  );
};

export default Home;
