import React from "react";
import {
  Table,
  Form,
  Col,
  FormGroup,
  Row,
  Input,
  Label,
  Button,
} from "reactstrap";
// import './App.css';

function Project() {
  const pageStyle = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    fontWeight: "normal",
  };

  return (
    <div className="App" style={pageStyle}>
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "20px",
        }}
      >
        <br />
        <h3>Employee Details</h3>
        <br />
        <br />
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input id="EmployeeName" name="EmployeeName" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Percentage">Percentage</Label>
                <Input id="Percentage" name="Percentage" type="number" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Company">Company</Label>
                <Input id="Company" name="Company" type="select">
                  <option>Walmart</option>
                  <option>Sagarsoft</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="FromDate">From</Label>
                <Input id="FromDate" name="FromDate" type="date" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="ToDate">To</Label>
                <Input id="ToDate" name="ToDate" type="date" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Leaves">Leaves</Label>
                <Input id="Leaves" name="Leaves" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="RateCard">Rate Card</Label>
                <Input id="RateCard" name="zip" type="select">
                  <option>Rate 1</option>
                  <option>Rate 2</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Button
            style={{
              fontSize: "15px",
              textTransform: "capitalize",
              backgroundColor: "#0088CC",
              float: "right",
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* table code */}

      <div
        className="table-responsive"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "20px",
        }}
      >
        <Table borderless className="align-middle table-nowrap mb-0">
          <thead>
            <tr>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Name
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Location
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Percentage
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Company
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                From
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                To
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Leaves
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Rate Card
              </th>
              <th
                style={{
                  background: "#007BC4",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
                scope="col"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samar</td>
              <td>India</td>
              <td>72%</td>
              <td>Sagarsoft</td>
              <td>03-04-2020</td>
              <td>17-05-2022</td>
              <td>12</td>
              <td>X07</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Alan John</td>
              <td>USA</td>
              <td>58%</td>
              <td>Sagarsoft</td>
              <td>14-06-2021</td>
              <td>18-02-2018</td>
              <td>07</td>
              <td>VN01</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Project;