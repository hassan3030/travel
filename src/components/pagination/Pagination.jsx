import { useEffect , useState} from "react";
import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  // const [startPage, setStartPage] = useState(0);
  // const [endPage, setEndPage] = useState(3);
  // const [arrPage, setArrPage] = useState([]);
  // setArrPage(pages.slice(startPage, endPage));
  // console.log('start page ' , arrPage)
  // let x = arrPage.fill(startPage+1, startPage, endPage)
  // setArrPage(x)
  // console.log('page arr ' , arrPage)
  const generatePages = [];
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }
 
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="page previous"
      >
        Previous
      </button>
      {generatePages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          key={page}
          className={currentPage === page ? "page active" : "page"}
        >
          {page}
        </div>
      ))}

      
      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="page next"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
