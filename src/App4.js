import React from "react";
import Hamburger from "./assets/images/hamburger.png";
import TableSetting1 from "./assets/images/tablesetting.png";
import TableSetting2 from "./assets/images/tablesetting2.png";
import Footer from "./gourmet/Footer";
import Contact from "./gourmet/Contact";
import OurMenu from "./gourmet/OurMenu";
import About from "./gourmet/About";

const styles = {
  headerImg: {
    position: "relative",
  },
  bottomLeft: {
    position: "absolute",
    left: 50,
    bottom: 20,
  }
}

function App4() {
  return (
    <div className={"p-0 m-0"}>
      <nav className={"navbar navbar-expand-sm bg-white navbar-light fixed-top shadow-sm"}>
        <div className={"container-fluid px-4"}>
          <a className={"navbar-brand"} href={"#"}>Gourmet au Catering</a>
          <ul className={"navbar-nav"}>
            <li className={"nav-item"}>
              <a className={"nav-link"} href={"#"}>About</a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href={"#"}>Menu</a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href={"#"}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <header>
        <div className={"container-xl"} style={styles.headerImg}>
          <img src={Hamburger} className={"w-100"}/>
          <div style={styles.bottomLeft}>
            <h1 >Le Catering</h1>
          </div>
        </div>
      </header>

      <main className={"container"}>
        <About />
        <OurMenu />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App4;
