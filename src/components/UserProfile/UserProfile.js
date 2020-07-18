import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import MainNav from "../Navbar/MainNav/MainNav";

import "./UserProfile.css";

import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

class UserProfile extends Component {
  state = {
    isGoalFormVisible: false,
  };

  toggleGoalFormOn = () => {
    this.setState((prevState) => ({
      ...prevState,
      isGoalFormVisible: true,
    }));
  };

  toggleGoalFormOff = () => {
    this.setState((prevState) => ({
      ...prevState,
      isGoalFormVisible: false,
    }));
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser, isLoggedIn } = context.state;
          return (
            <>
              {!isLoggedIn ? (
                <Redirect to="/login" />
              ) : (
                <>
                  <Row className="app-container">
                    <MainNav
                      userLoggedIn={currentUser}
                      passedDownToggleGoalForm={() => this.toggleGoalFormOn()}
                    />
                    <Col className="main-container p-0">
                      <Card className="fixed-height bg-secondary shadow main-container">
                        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4 full-width">
                          <div className="d-flex justify-content-between">
                            <div className="card-profile-image">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  className="rounded-circle"
                                  src={currentUser.avatar}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="text-center">
                            <h3>{currentUser.username}</h3>
                          </div>
                        </CardHeader>
                        <CardBody className="pt-0 pt-md-4"></CardBody>
                      </Card>
                    </Col>
                  </Row>
                </>
              )}
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default UserProfile;
