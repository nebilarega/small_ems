import { Card, CardBody, CardFooter, CardTitle, Col, Row } from "reactstrap";
import { IoMan } from "react-icons/io5";
import Button from "@restart/ui/esm/Button";
import { deleteEmployee } from "./action/employeeAction";
import { useDispatch } from "react-redux";
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

const Renderer = (employee: EmployeeState) => {
  const dispatch = useDispatch();
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

export default Renderer;
