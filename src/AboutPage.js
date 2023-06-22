import React from 'react';
import image from './2.png';
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-content">
        <div className="text-container">
          {/* <h2>About</h2> */}
          <h1>About SEVA Token</h1>
          <section className="box" id="home">
            <p>
              SEVA stands for (Sustainable Economically Viable Asset) Token. SEVA Token is a groundbreaking token that merges the worlds of sustainability and blockchain technology to drive sustainable development through regenerative finance. Our mission is to revolutionize the way we approach environmental conservation and create a more sustainable future for all.
            </p>
            <p>
              At SEVA Token, we believe that sustainability must be economically viable to drive long-term change. To achieve this, we leverage the power of regenerative finance, an innovative approach that aligns economic growth with environmental well-being. By connecting the world of blockchain with regenerative finance, we aim to harness the power of decentralized systems to drive meaningful impact and foster a sustainable environment.
            </p>
            <p>
              With SEVA Token, we introduce a powerful concept: one SEVA equals one kilogram of CO2 offset. This unique approach transforms the traditional perception of cryptocurrencies and positions them as valuable assets for addressing the urgent challenges of climate change. By quantifying the environmental impact of SEVA Tokens, we enable individuals and organizations to actively contribute to carbon offset initiatives and combat global warming.
            </p>
            <p>
              SEVA Token provides a robust ecosystem for supporting sustainable projects. Through our platform, individuals and organizations can invest in projects that promote environmental conservation, renewable energy, sustainable agriculture, and more. By empowering users to allocate their resources towards sustainable initiatives, we aim to drive positive change and accelerate the transition to a greener future.
            </p>
            <p>
              The blockchain technology underlying SEVA Token ensures transparency and efficiency in the allocation of resources. The decentralized nature of the platform enables secure and immutable transactions, providing a high level of trust and accountability. Additionally, SEVA Token introduces financial incentives and opportunities for growth, encouraging active participation and rewarding contributors for their sustainable actions.
            </p>
            <p>
              We invite you to join us on this transformative journey as we reshape the world of blockchain and forge a path towards a more sustainable future. Together, we can revolutionize the way we value and protect our environment, one SEVA Token at a time. By leveraging regenerative finance and empowering individuals, SEVA Token is driving positive change for generations to come.
            </p>
          </section>
        </div>
       
      </div>
    </div>
  );
};

export default AboutPage;
