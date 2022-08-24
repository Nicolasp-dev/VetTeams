import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  // Context Fn
  const handlePageClick = (data) => {
    paginate(data.selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={false}
        nextLabel={false}
        breakLabel={"..."}
        pageCount={pageNumbers.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={
          "relative bottom-0 flex justify-center mt-10 h-[2rem]-black gap-2"
        }
        pageClassName={
          "w-[2.5rem] h-[2rem] text-center bg-dark-green py-1 cursor-pointer hover:bg-[#64b3b3]  duration-300 "
        }
        pageLinkClassName={"text-white block"}
        breakClassName={"text-dark-green text-2xl"}
        activeClassName={
          "w-[2.5rem] h-[2rem] text-center py-1 cursor-pointer bg-[#64b3b3] duration-300 scale-[1.1] "
        }
      />
    </div>
  );
};

export default Paginate;
