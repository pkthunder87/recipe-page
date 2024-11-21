import Preparation from "./Preparation";

function Header() {
  return (
    <section className="header">
      <img
        className="header__img"
        src="../assets/images/image-omelette.jpeg"
        alt="a tasty omelette"
      />
      <h1 className="header__title">Simple Omelette Recipe</h1>
      <p className="header__text">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <Preparation />
    </section>
  );
}

export default Header;
