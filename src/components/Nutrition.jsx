function Nutrition() {
  return (
    <section className="nutr">
      <h2 className="nutr__title">Nutrition</h2>
      <p className="nutr__text">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="grid">
        <div className="grid__item">
          <div className="grid__facts">Calories</div>
          <div className="grid__unit">277kcal</div>
        </div>
        <div className="grid__item">
          <div className="grid__facts">Carbs</div>
          <div className="grid__unit">0g</div>
        </div>
        <div className="grid__item">
          <div className="grid__facts">Protein</div>
          <div className="grid__unit">20g</div>
        </div>
        <div className="grid__item">
          <div className="grid__facts">Fat</div>
          <div className="grid__unit">22g</div>
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
