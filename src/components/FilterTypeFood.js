import '../styles/FilterTypeFood.scss';

function FilterTypeFood(props) {
  const handleFilterTypeFood = (ev) => {
    props.handleFilterTypeFood(ev.target.value);
  };

  return (
    <>
      <div>
        <label className="label__input" htmlFor="recipeFilter">
          Tipo de Comida
          <input
            type="text"
            placeholder="Buscar..."
            className="recipe__input"
            name="recipeFilter"
            onChange={handleFilterTypeFood}
            value={props.filterTypeFood}
          />
        </label>
      </div>
    </>
  );
}
export default FilterTypeFood;
