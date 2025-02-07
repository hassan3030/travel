import "./sort-input.css";

const SortInput = ({ toursLength,setSortItem, sortItem }) => {
  return (
    <div className="sort-input-container">
      <div className="available-tours">
        {toursLength} tours found <i className="bi bi-info-circle"></i>
      </div>
      <select
        // onChange={(e) => setSortItem(e.target.value)} value={sortItem}
        onfocus={window.size=3}
        onblur={window.size=0}
        onchange={() =>  {window.size=1 ; window.blur()} }
      >
        <option value="recomended" className="recomended">Recomended</option>
        <option value="low" className="low">Price - Low to high</option>
        <option value="high" className="high">Price - High to low</option>
      </select>
    </div>
  );
};

export default SortInput;
