import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import "./LandingPage.css";
import logoImage from "./1.png";
import image from "./2.png";
import backgroundImage from "./background.jpg";



const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleTitleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="paragraph-boxes"
        >
          <h1
           className={isHovered ? "title-hovered" : ""}
           onMouseEnter={handleTitleHover}
           onMouseLeave={handleTitleHover}
          
          >Welcome to SEVA Protocol</h1>
          <section className="box" id="home">
            {/* <h1>Welcome to SEVA Token</h1> */}
            <p>
              Welcome to SEVA (Sustainable Economically Viable Asset) Token, the
              groundbreaking solution that merges the worlds of sustainability
              and blockchain technology. Our mission is to revolutionize the way
              we approach environmental conservation and create a more
              sustainable future for all.
            </p>
          </section>
          <section className="box">
            <p>
              With SEVA Token, we introduce a powerful concept: one SEVA equals
              one kilogram of CO2 offset. This innovative approach transforms
              the traditional perception of cryptocurrencies and positions them
              as valuable assets for addressing the urgent challenges of climate
              change. By connecting the world of blockchain with regenerative
              finance, we aim to harness the power of decentralized systems to
              drive meaningful impact and foster a sustainable environment.
            </p>
          </section>
          <section className="box">
            <p>
              But SEVA Token goes beyond mere environmental impact. We recognize
              that sustainability must be economically viable to drive long-term
              change. By leveraging the blockchain's transparency and
              efficiency, we create an ecosystem where regenerative finance
              thrives. Our platform enables individuals and organizations to
              support sustainable projects, while also offering financial
              incentives and opportunities for growth. SEVA Token introduces a
              new paradigm of economic and environmental harmony, where
              sustainability is not just a cost but a catalyst for prosperity.
            </p>
          </section>
          <section className="box">
            <p>
              Join us on this transformative journey as we reshape the world of
              blockchain and forge a path towards a more sustainable future.
              Together, we can revolutionize the way we value and protect our
              environment, one SEVA Token at a time. Together, we can build a
              world where sustainability and economic viability coexist, driving
              positive change for generations to come.
            </p>
          </section>
        </div>
        <div className="image-container">
           <div className="image-wrapper">
           <img
              src={"https://www.twi-global.com/image-library/hero/sustainability-istock-473558826.jpg"}
              alt="SEVA Token"
            />
           </div>
            <div className="image-wrapper">
            <img
              src={"https://gcerti.ca/wp-content/uploads/2021/06/960x0.jpg"}
              alt="SEVA"
            />
            </div>
            
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobileView(window.innerWidth <= 767);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };
  

  useEffect(() => {
    const initializeApp = async () => {
      const provider = await detectEthereumProvider();
      setProvider(provider);

      if (provider) {
        setConnected(provider.isConnected());
        provider.on("accountsChanged", (accounts) => {
          setConnected(accounts.length > 0);
        });
      }
    };

    initializeApp();

    return () => {
      if (provider) {
        provider.removeListener("accountsChanged");
      }
    };
  }, [provider]);

  const handleConnect = async () => {
    if (!provider) {
      window.alert("Please install MetaMask to connect your wallet.");
      return;
    }

    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      setConnected(accounts.length > 0);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="landing-page">
        <nav className="navbar">
          <div className="logo"><img src={logoImage} alt="SEVA Token" className="logo-image" /></div>
          {windowWidth <= 767 && (
  <div className="mobile-menu" onClick={toggleMobileMenu}>
    <i className="fas fa-bars"></i>
  </div>
)}
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            className={`connect-button ${
              connected ? "connected" : "disconnected"
            }`}
            onClick={handleConnect}
          >
            {connected ? "Connected" : "Connect Wallet"}
          </button>
          {/* <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button> */}
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2023 SEVA Token. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default LandingPage;