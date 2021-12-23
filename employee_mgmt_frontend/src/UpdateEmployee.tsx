import { MouseEventHandler } from "react";
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import styled from "styled-components";

type MyProps = {
  isOpen: boolean | undefined;
  toggle: MouseEventHandler<any> | undefined;
  handleUpdate: (event: React.FormEvent<HTMLFormElement>) => void;
};
const StyledButton = styled.div`
  margin: 20px 0px 0px 0px;
  text-align: center;
`;
const StyledForm = styled.form`
  padding: 20px;
  margin-bottom: 5px;
`;
const StyledRaw = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;
const StyledModalHeader = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
  background-color: #f5f5f5;
`;
const UpdateEmployee: React.FC<MyProps> = ({
  isOpen,
  toggle,
  handleUpdate,
}) => {
  // name: "Nebil Arega",
  //   age: 32,
  //   sex: "male",
  //   salary: 3234,
  //   isCurrent: true,
  //   startDate: new Date(),
  //   leaveDate: new Date(),
  //   createdAt: new Date(),
  //   completionDate: new Date(),
  {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <StyledModalHeader>
          <ModalHeader toggle={toggle}>Employee Manager</ModalHeader>
        </StyledModalHeader>
        <ModalBody>
          <StyledForm
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(e);
            }}
          >
            <StyledRaw>
              <Row className="raw">
                <Col>
                  <label htmlFor="name">Full Name</label>
                </Col>
                <Col>
                  <input type="text" id="name" name="name" />
                </Col>
              </Row>
            </StyledRaw>
            <StyledRaw>
              <Row className="raw">
                <Col>
                  <label htmlFor="sex">Sex</label>
                </Col>
                <Col>
                  <input type="text" id="sex" name="sex" />
                </Col>
              </Row>
            </StyledRaw>
            <StyledRaw>
              <Row>
                <Col>
                  <label htmlFor="age">Age</label>
                </Col>
                <Col>
                  <input type="number" id="age" name="age" />
                </Col>
              </Row>
            </StyledRaw>
            <StyledRaw>
              <Row>
                <Col>
                  <label htmlFor="salary">Salary</label>
                </Col>
                <Col>
                  <input type="number" id="salary" name="salary" />
                </Col>
              </Row>
            </StyledRaw>
            <StyledRaw>
              <Row className="raw">
                <Col>
                  <label htmlFor="start">Start Date</label>
                </Col>
                <Col>
                  <input type="text" id="start" name="start" />
                </Col>
              </Row>
            </StyledRaw>
            <StyledRaw>
              <Row className="raw">
                <Col>
                  <label htmlFor="end">End Date</label>
                </Col>
                <Col>
                  <input type="text" id="end" name="end" />
                </Col>
              </Row>
            </StyledRaw>
            <StyledButton>
              <Button
                className="updateEmployeeButton"
                color="primary"
                type="submit"
              >
                Update Employee
              </Button>
            </StyledButton>
          </StyledForm>
        </ModalBody>
      </Modal>
    );
  }
};
export default UpdateEmployee;
