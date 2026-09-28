import { useRef } from "react";
import { Link } from "react-router-dom";

function Home() {

  const menuRef = useRef();

  const scrollToMenu = () => {
    menuRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <span className="small-title">
            WELCOME TO SPICE & SAVOR
          </span>

          <h1>
            Taste the
            <span> Extraordinary.</span>
          </h1>

          <p>
            Experience authentic Indian flavors crafted
            with passion, premium ingredients and
            modern culinary techniques.
          </p>

          <div className="hero-buttons">

            <button
              onClick={scrollToMenu}
              className="primary-btn"
            >
              Explore Menu
            </button>

            <Link
              to="/reservation"
              className="secondary-btn"
            >
              Reserve Table
            </Link>

          </div>

        </div>

      </section>


      <section ref={menuRef} className="home-section">

        <div className="section-title">

          <span>OUR SPECIALITIES</span>

          <h2>
            Crafted With Passion
          </h2>

          <p>
            From traditional recipes to modern creations.
          </p>

        </div>

        <div className="special-grid">

          <div className="special-card">
            <div>🍛</div>
            <h3>Authentic Indian</h3>
            <p>
              Traditional recipes prepared with
              authentic spices.
            </p>
          </div>

          <div className="special-card">
            <div>🥘</div>
            <h3>Fresh Ingredients</h3>
            <p>
              Fresh vegetables, herbs and
              premium ingredients.
            </p>
          </div>

          <div className="special-card">
            <div>👨‍🍳</div>
            <h3>Master Chefs</h3>
            <p>
              Experienced chefs creating
              memorable dishes.
            </p>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;