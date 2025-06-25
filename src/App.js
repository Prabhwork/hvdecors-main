import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css"; // Import your custom loader styles

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

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
