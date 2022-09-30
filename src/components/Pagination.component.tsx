import React from "react";

interface PaginationProps {
  requestsPerPage: number;
  totalRequests: number;
  paginate: (pageNumber: number) => void
  itemsPerPage: (itemsPerPage: number) => void
}

const Pagination = (props: PaginationProps) => {
  const pageNumbers = [];
  
  for(let i = 1; i<= Math.ceil(props.totalRequests / props.requestsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleChange(e: any){
    props.itemsPerPage(e.target.value)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number: number) => (
          <li key={number} className="page-item">
            <a onClick={() => props.paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <select onChange={(e) => handleChange(e)} name="itemsPerPage" defaultValue={20}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </ul>
    </nav>
  )
}

export default Pagination;