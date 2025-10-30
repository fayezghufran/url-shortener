import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="bg-[#F7F6F2] min-h-screen relative">
      <Header />

      <div className="pt-20 pb-24 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="w-full max-w-5xl mx-auto">
          <Main />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
