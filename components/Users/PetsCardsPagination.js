// prettier-ignore
const PetsCardsPagination = ({ cardsPerPage, totalCards, paginate, currentPage, }) => {
  const pageNumbers = [];

  

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-10">
      <ul className="h-[2rem]-black flex justify-center gap-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number
                ? "w-[2.5rem] h-[2rem] text-center  py-1 cursor-pointer bg-[#64b3b3] duration-300 "
                : "w-[2.5rem] h-[2rem] text-center bg-dark-green py-1 cursor-pointer hover:bg-[#64b3b3] scale-[0.9] duration-300"
            }
            onClick={() => paginate(number)}
          >
            <span className="text-white block">{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PetsCardsPagination;
