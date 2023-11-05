"use client";

import { useState, useEffect } from "react";
import styles from "./testing.module.css";

export default function Table() {
  const [data, setData] = useState({ count: 0, results: [] }); // ! Data state ITS ALWAYS IMPORTANT TO SPECIFY AT LEAST THE INITIAL TYPE
  const [currentPage, setCurrentPage] = useState(0); // ? Page state
  const [loadingState, setLoadingState] = useState(false); // ^ Loading state

  const USERS_URL = "https://example.com/api/users";

  useEffect(() => {
    const fetchData = async () => { // Async is used to use await inside the function and to avoid callback chains (the use of then)
      setLoadingState(true); // ^ Loading state
      //  & WHAT IS TRY
      try {
        const response = await fetch(`${USERS_URL}?page=${currentPage}`); // Response will only be assigned after the data has been fetched. ?page= is the query parameter
        if (response.ok) {
          const importedData = await response.json(); // importedData will only be assigned after Response has been assigned
          setData(importedData); // ! Data state
        }
        //  & WHAT IS CATCH
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoadingState(false); // ^ Loading state
    };

    fetchData();
  }, [currentPage]); // ? Page state

  const totalPages = data.count === 0 ? 1 : Math.ceil(data.count / 10);

  const firstPageHandler = () => {
    setCurrentPage(0); // ? Page state
  };

  const previousPageHandler = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1); // ? Page state
    }
  };

  const nextPageHandler = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1); // ? Page state
    }
  };

  const lastPageHandler = () => {
    setCurrentPage(totalPages - 1); // ? Page state
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className={styles.pagination}>
        <button
          className={styles.firstPageBtn}
          onClick={firstPageHandler}
          disabled={loadingState || currentPage === 0}
        >
          first
        </button>
        <button
          className={styles.previousPageBtn}
          onClick={previousPageHandler}
          disabled={loadingState || currentPage === 0}
        >
          previous
        </button>
        <button
          className={styles.nextPageBtn}
          onClick={nextPageHandler}
          disabled={loadingState || currentPage === totalPages - 1}
        >
          next
        </button>
        <button
          className={styles.lastPageBtn}
          onClick={lastPageHandler}
          disabled={loadingState || currentPage === totalPages - 1}
        >
          last
        </button>
      </section>
    </div>
  );
}
