import React from 'react';

const ContactPage = () => {
  return (
    <section className="box" id="home">
            {/* <h1>Welcome to SEVA Token</h1> */}
            <p>Email :  https://www.web3nest.com/</p>
            <p>Contact Us : +919304125236</p>
        <section><div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
        
             </div>
             </section>
          </section>

      

          
  );
};

export default ContactPage;
