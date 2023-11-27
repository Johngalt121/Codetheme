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

function Company() {
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
          borderRadius: 0,
        }}
      >
        <br />
        <h3>Company Details</h3>
        <br />
        <br />
        <Form >
        {/* style={{borderRadius: 0,}} */}
          <Row>
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
                <Label for="Budget">Budget</Label>
                <Input id="Budget" name="Budget" type="number" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="FromDate">From</Label>
                <Input id="FromDate" name="FromDate" type="date" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="ToDate">To</Label>
                <Input id="ToDate" name="ToDate" type="date" />
              </FormGroup>
            </Col>
          </Row>
          <Button
            style={{
              fontSize: "15px",
              textTransform: "capitalize",
              backgroundColor: "#007BC4",
              height: "42px",
              width: "129px",
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
          <thead style={{
                  height: "50px",
                  verticalAlign: "middle",
                  textAlign: "center",
                  fontSize: "15px",
                }}>
            <tr >
              <th
                style={{
                  background: "#007BC4",
                  color: "white",

                  fontWeight: "normal",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
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
                Budget
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
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
                scope="col"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody style={{
                  textAlign: "center",
                }}>
            <tr>
              <td>Oracle</td>
              <td>1300000</td>
              <td>03-04-2020</td>
              <td>17-05-2022</td>
              <td>
                <i class="bi bi-trash" style={{fontSize: "20px"}}></i>
                <i class="bi bi-pencil-square" style={{fontSize: "20px"}}></i>
              </td>
            </tr>
            <tr>
              <td>Sagarsoft</td>
              <td>2200000</td>
              <td>14-06-2021</td>
              <td>18-02-2023</td>
              <td>
                <i class="bi bi-trash" style={{fontSize: "20px"}}></i>
                <i class="bi bi-pencil-square" style={{fontSize: "20px"}}></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Company;