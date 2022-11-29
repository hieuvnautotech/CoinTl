import React from 'react'
import { Button, Table, UncontrolledTooltip } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
export default function AdminPage() {
  return (
    <>
      <Button color="info">Add News</Button>
      <Table>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Job Position</th>
            <th>Since</th>
            <th className="text-right">Salary</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td>2013</td>
            <td className="text-right">€ 99,225</td>
            <td className="td-actions text-right">
              <Button color="info" type="button">
                <i className="now-ui-icons users_single-02"></i>
              </Button>
              <Button color="success" type="button">
                <i className="now-ui-icons ui-2_settings-90"></i>
              </Button>
              <Button color="danger" type="button">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>John Doe</td>
            <td>Design</td>
            <td>2012</td>
            <td className="text-right">€ 89,241</td>
            <td className="td-actions text-right">
              <Button color="info" type="button">
                <i className="now-ui-icons users_single-02"></i>
              </Button>
              <Button color="success" type="button">
                <i className="now-ui-icons ui-2_settings-90"></i>
              </Button>
              <Button color="danger" type="button">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>Alex Mike</td>
            <td>Design</td>
            <td>2010</td>
            <td className="text-right">€ 92,144</td>
            <td className="td-actions text-right">
              <Button color="info" type="button">
                <i className="now-ui-icons users_single-02"></i>
              </Button>
              <Button color="success" type="button">
                <i className="now-ui-icons ui-2_settings-90"></i>
              </Button>
              <Button color="danger" type="button">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </Button>
            </td>
          </tr>
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
