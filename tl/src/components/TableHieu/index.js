import React from "react";
import { Button, Table, UncontrolledTooltip } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import "assets/navBarHieu/navHieuCss.css";
export default function TableHieu({ news }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Article</th>
            <th>Photo</th>
            <th>Source</th>
            <th>Postman</th>
            <th>Post Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td>2013</td>
            <td>€ 99,225</td>
            <td>€ 99,225</td>
            <td>€ 99,225</td>
            <td>
              <Button color="success" type="button">
                <i className="now-ui-icons ui-2_settings-90"></i>
              </Button>
              <Button color="danger" type="button">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </Button>
            </td>
          </tr> */}
          {news.map((article) => (
            <tr key={article.NewsId}>
              <td>{article.NewsId}</td>
              <td>{article.Article}</td>
              <td>{article.PhotoFileName}</td>
              <td>{article.SourceUrl}</td>
              <td>{article.Postman}</td>
              <td>{article.PostDate}</td>
              <td>
                <Button color="success" type="button">
                  <i className="now-ui-icons ui-2_settings-90"></i>
                </Button>
                <Button color="danger" type="button">
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <Pagination
          className="pagination justify-content-end"
          listclassName="justify-content-end"
        >
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              tabindex="-1"
            >
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}
