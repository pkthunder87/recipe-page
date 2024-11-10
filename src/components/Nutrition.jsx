function Nutrition() {
  return (
    <section className="nutr">
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="grid">
        <div className="grid__item">
          <div>Calories</div>
          <div className="grid__unit">277kcal</div>
        </div>
        <div className="grid__item">
          <div>Carbs</div>
          <div className="grid__unit">0g</div>
        </div>
        <div className="grid__item">
          <div>Protein</div>
          <div className="grid__unit">20g</div>
        </div>
        <div className="grid__item">
          <div>Fat</div>
          <div className="grid__unit">22g</div>
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
