import { Button } from "../Button";
import styles from "./index.module.css";
import React from "react";

function Pagination({page, setPage, pageCount}) {

  const disable = {
    left: page === 1,
    right: page === pageCount,
  };

  const handleNextPageClick = () => {
    const current = page;
    const next = current + 1;
    const total = pageCount;

    setPage(next <= total ? next : current);
  };
  const handlePrevPageClick = () => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  };

  return (
    <div className={styles.paginator}>
      <Button
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {"<"}
      </Button>
      {page && (
        <span className={styles.navigation}>
          {page} / {pageCount}
        </span>
      )}
      <Button
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {">"}
      </Button>
    </div>
  );
}

export default React.memo(Pagination);
