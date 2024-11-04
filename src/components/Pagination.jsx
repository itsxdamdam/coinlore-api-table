import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  const handleNextPage = () => {
    if (currentPage < Math.ceil(coinList.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if(currentPage > 1) {

    }
  }

  return (
    <div className="flex justify-between items-center font-bold">
      <button>
        <FontAwesomeIcon icon={faArrowLeft} className="px-1" />
        Previous
      </button>
      <button>
        Next
        <FontAwesomeIcon icon={faArrowRight} className="px-1" />
      </button>
    </div>
  );
};

export default Pagination;
