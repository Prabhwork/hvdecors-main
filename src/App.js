import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(() => {
    const alreadyVisited = sessionStorage.getItem("visited");
    return !alreadyVisited;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <div className="ripple-loader">
            <div></div>
            <div></div>
          </div>
          <h3 className="loader-brand">HV Decors</h3>
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
