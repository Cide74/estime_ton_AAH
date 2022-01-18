import React, { useState } from "react";
import PropTypes from "prop-types";
import TablePagination from "@mui/material/TablePagination";

import { FcExpand, FcCollapse } from "react-icons/fc";
import Article from "./Article";
import User from "./User";
import Simulation from "./Simulation";
import Guestbook from "./Guestbook";
import Comment from "./Comment";

function CategoryParametre({
  categoryName,
  getCategory,
  data,
  isAppear,
  handleAppear,
  onDelete,
}) {
  let paramTitle;
  switch (categoryName) {
    case "user":
      paramTitle = "Utilisateurs";
      break;
    case "simulation":
      paramTitle = "Simulations";
      break;
    case "art":
      paramTitle = "Articles";
      break;
    case "gbook":
      paramTitle = "Commentaires sur le livre d'or";
      break;
    case "comment":
      paramTitle = "Commentaires sur les articles";
      break;
  }

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={`Params__Content_Items ${categoryName}`}>
      <div>
        <h3 className="Params__Content_title">{paramTitle}</h3>.{" "}
        <div
          onClick={() => handleAppear(categoryName)}
          className="Params__Content_modal"
        >
          {isAppear ? <FcExpand /> : <FcCollapse />}
        </div>
      </div>
      <div style={isAppear ? { display: "block" } : { display: "none" }}>
        <ul className="Params__Content_allItem">
          {getCategory &&
            data.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((param) => {
                switch (categoryName) {
                  case "user":
                    return (
                      <User
                        user={param}
                        categoryName={categoryName}
                        onDelete={onDelete}
                      />
                    );
                  case "simulation":
                    return (
                      <Simulation
                        simulation={param}
                        categoryName={categoryName}
                        onDelete={onDelete}
                      />
                    );
                  case "art":
                    return (
                      <Article
                        article={param}
                        categoryName={categoryName}
                        onDelete={onDelete}
                      />
                    );
                  case "gbook":
                    return (
                      <Guestbook
                        gb={param}
                        categoryName={categoryName}
                        onDelete={onDelete}
                      />
                    );
                  case "comment":
                    return (
                      <Comment
                        comment={param}
                        categoryName={categoryName}
                        onDelete={onDelete}
                      />
                    );
                }
              })}
        </ul>
        {getCategory && (
          <TablePagination
            component="div"
            count={data.count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </div>
    </div>
  );
}

CategoryParametre.propTypes = {
  categoryName: PropTypes.string.isRequired,
  getCategory: PropTypes.bool.isRequired,
  data: PropTypes.object,
  isAppear: PropTypes.bool.isRequired,
  handleAppear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CategoryParametre;
