import React, { useState } from "react";
import data from "./page.json";
import "./page.css";

const Pagemain = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const displayItems = 10;
  const lastIndex = displayItems * CurrentPage;
  const firstIndex = lastIndex - displayItems + 1;
  const displayPage = data.slice(firstIndex - 1, lastIndex);
  const pageCount = Math.ceil(data.length / displayItems);
  const pageNumber = [...Array(pageCount + 1).keys()].slice(1);

  const style = {
    cursor: "pointer",
  };

  const handleLi = (item) => {
    setCurrentPage(item);
  };

  const handlePrevious = () => {
    if (CurrentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(CurrentPage - 1);
    }
  };

  const handleNext = () => {
    if (CurrentPage === 3) {
      setCurrentPage(3);
    } else {
      setCurrentPage(CurrentPage + 1);
    }
  };

  return (
    <div className="page-container">
      <div className="div1">
        <table className="table">
          <thead>
            <tr className="table-primary">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Deg</th>
              <th scope="col">E-mail</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>
            {displayPage.map((item, index) => {
              return (
                <tr keys={index} className="table-info">
                  <td>{item.Id}</td>
                  <td>{item.name}</td>
                  <td>{item.degree}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="div2">
        <ul class="pagination" style={style}>
          <li className={`page-item ${CurrentPage === 1 ? "disabled" : ""}`}>
            <span class="page-link" onClick={handlePrevious}>
              Previous
            </span>
          </li>
          {pageNumber.map((item, index) => {
            return (
              <li
                className={`page-item ${CurrentPage === item ? "active" : ""}`}
                key={index}
              >
                <span class="page-link" onClick={() => handleLi(item)}>
                  {item}
                </span>
              </li>
            );
          })}
          <li
            class="page-item"
            className={`page-item ${
              CurrentPage === pageCount ? "disabled" : ""
            }`}
          >
            <span class="page-link" onClick={handleNext}>
              Next
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagemain;
