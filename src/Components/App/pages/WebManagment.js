import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../Common/BreadCrumbs";
import Pagination from "../../Utils/Pagination";
import ModalForm from "./Modal";
import Table from "./Table";

function WebManagment() {
  // For Pagination
  const data = JSON.parse(localStorage.getItem("websites"));
  const [currentPage, setCurrentPage] = useState(1);
  const [sitesPerpage] = useState(5);
  const indexOfLastWeb = currentPage * sitesPerpage;
  const indexOfFirstPost = indexOfLastWeb - sitesPerpage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastWeb);

  // For Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useEffect(() => {

  // }, [data]);

  return (
    <main id="main" className="main">
      <BreadCrumbs title={"Website Managment"} heading={"Website Managment"} />
      <ModalForm title="Add New Website" heading="Add New Website" buttonText="Save Website" />
      <Table currentPosts={currentPosts} />
      <Pagination sitesPerpage={sitesPerpage} paginate={paginate} />
    </main>
  );
}

export default WebManagment;
