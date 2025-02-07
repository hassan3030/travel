
import { useEffect } from "react";
import "./tour-list.css";
import TourItem from "./TourItem";

const TourList = ({ toursList }) => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="tour-list">
      {toursList.map((item) => (
         <TourItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TourList;
