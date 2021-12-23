import React, { Component } from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import { IoCodeWorking, IoMan, IoSettings } from "react-icons/io5";
import Button from "@restart/ui/esm/Button";
import AddEmployee from "./AddEmployee";
import { toggleDashboard } from "./action/addEmployeeAction";
import { toggleUpdate } from "./action/updateEmployeeAction";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "./action/employeeAction";
import styled from "styled-components";
import Renderer from "./Renderer";
import UpdateEmployee from "./UpdateEmployee";

const StyledNavbar = styled(Navbar)`
  background-color: gray !important;
  font-color: #343a40 !important;
  align-content: center;
`;
const StyledNavbarBrand = styled(NavbarBrand)`
  display: flex;
  justify-content: space-between;
`;
interface DashboardtState {
  Employees: [];
}
interface EmployeeState {
  _id: string;
  name: string;
  age: number;
  sex: string;
  salary: 3234;
  isCurrent: true;
  startDate: Date;
  leaveData: Date;
  createdAt: Date;
  completionDate: Date;
}
export const Dashboard: React.FC<DashboardtState> = ({ Employees }) => {
  const AddEmployeeState = useSelector(
    (state: RootStateOrAny) => state.AddEmployeeReducer
  );
  const UpdateEmployeeState = useSelector(
    (state: RootStateOrAny) => state.UpdateEmployeeReducer
  );
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // For some reason, this is returning an empty formdata
    const data = new FormData(event.target as HTMLFormElement);
    // Go to manual way
    const employee = {
      name: event.target[0].value.toString(),
      sex: event.target[1].value.toString(),
      age: parseInt(event.target[2].value),
      salary: parseFloat(event.target[3].value),
      startDate: new Date(event.target[4].value),
      leaveDate: new Date(event.target[5].value),
      isCurrent: false,
      createdAt: new Date(),
      completionDate: new Date(),
    };
    // console.log(employee);
    dispatch(createEmployee(employee));
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
  };

  return (
    <div>
      <StyledNavbar color="black" light mb-2>
        <StyledNavbarBrand className="text-white">
          <IoCodeWorking className="font-size-xxl" />
          <span className="font-size-l ml-3">Employee Mangement</span>
        </StyledNavbarBrand>
      </StyledNavbar>
      <Container className="mt-3">
        <Card body>
          <CardTitle tag="h5">
            <IoSettings className="font-size-xl" /> {Employees.length} Employees
          </CardTitle>
          <CardText>
            This is a Simple employee management system. Built on React, Redux,
            Redux-Saga, and Styled Components
          </CardText>
        </Card>
      </Container>

      <AddEmployee
        isOpen={AddEmployeeState.value.isOpen}
        toggle={() => dispatch(toggleDashboard())}
        handleSubmit={(e) => handleSubmit(e)}
      />
      {/* <UpdateEmployee isOpen={UpdateEmployeeState.value.isOpen} toggle={()=>{dispatch(toggleUpdate())}} /> */}
      <Container className="mt-4">
        <Row>
          <Col sm="12" className="text-center">
            <Button
              className="btn btn-success block"
              onClick={() => dispatch(toggleUpdate())}
            >
              <span className="font-size-l">Add Employee</span>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        {Employees.map((employee) => renderer(employee))}
      </Container>
    </div>
  );
};
const renderer = (employee: EmployeeState) => {
  return (
    <Row>
      <Col sm="12">
        <Card body>
          <CardTitle tag="h5">
            <IoMan className="font-size-xl" /> {employee.name}
          </CardTitle>
          <CardBody>
            <Row>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">
                  <b>Salary</b>
                </span>
                <span> {employee.salary}</span>
              </Col>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">
                  <b>Age</b>
                </span>
                <span>{" " + employee.age}</span>
              </Col>
              <Col sm="4" className="text-center">
                <span className="font-weight-bold">
                  <b>Gender</b>
                </span>
                <span>{" " + employee.sex} </span>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Row>
              <Col sm-6>
                <Button
                  className="btn btn-outline-primary block"
                  onClick={() => {}}
                >
                  Edit
                </Button>
              </Col>
              <Col sm-6>
                <Button
                  className="btn btn-outline-danger block"
                  onClick={deleteEmployee(employee._id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};
