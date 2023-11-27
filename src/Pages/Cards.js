import React from "react";
import "../Styles/cards.css"
import { Card, CardBody,Table } from "reactstrap";


const Cards =()=>{
    // width: 1125px
    // height: 196px
    // top: 424px
    // left: 155px
    // border-radius: 8px
    // border: 1px
    
  return( 
    <div className="main">
    <div className="box">
  <Card>
    <CardBody>
        Hello
    </CardBody>
  </Card>
    </div>
    <div
        className="table-responsive"
        style={{
         
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
                Initiative
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
                Project
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
                Budget-Allocated    
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
                Consumed
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
                Left
              </th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>India</td>
              <td>72%</td>
              <td>Sagarsoft</td>
              <td>03-04-2020</td>
              <td>17-05-2022</td>
              <td>72%</td>
            </tr>
            <tr>
             
              <td>USA</td>
              <td>58%</td>
              <td>Sagarsoft</td>
              <td>14-06-2021</td>
              <td>18-02-2018</td>
              <td>72%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    )

}
export default Cards;