import React from 'react';
import HeroImage from "../../assets/Logo.png";

const Home = ():JSX.Element => {
    
    return (
      <>
        <div className="flex">
          {/* Hero Section */}
          <section className="flex justify-center items-center">

            <div className="max-w-100">
              <h1 className="text-3xl">Queenz Treatz</h1>
              <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus, fugit optio molestiae iste molestias.</p>
            </div>

            <div className="max-w-100">
              <img src={HeroImage} alt="Mum Cooking" />
            </div> 
          </section>
        </div>
      </>
    )
}

export default Home;