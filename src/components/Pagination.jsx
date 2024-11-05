import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  currentPage,
  coinList,
  itemsPerPage,
  setCurrentPage,
}) => {
  const handleNextPage = () => {
    if (currentPage < Math.ceil(coinList.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-between items-center font-bold">
      <button
        onClick={handlePreviousPage}
        className={currentPage === 1 ? "invisible" : "hover:border-yellow-200 border-transparent border-4 pr-2"}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="px-1" />
        Previous
      </button>
      <button
        onClick={handleNextPage}
        className={
          currentPage === Math.ceil(coinList.length / itemsPerPage)
            ? "invisible"
            : "hover:border-yellow-200 border-transparent border-4 pr-2"
        }
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="px-1" />
      </button>
    </div>
  );
};

export default Pagination;
