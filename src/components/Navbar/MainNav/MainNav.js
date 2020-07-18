import React from "react";
import { Link } from "react-router-dom";
import NavOption from "../NavOption/NavOption";
import { AuthContext } from "../../../context/index";

import "./MainNav.css";

import { Col, Card, Button, NavItem, Container } from "reactstrap";

const MainNav = (props) => {
  const { passedDownToggleNewCollectionForm } = props;
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { userLogOut } = context;
        const { currentUser } = context.state;
        return (
          <>
            <Col className="p-0 fixed-height navbar-vertical" id="overflow-nav">
              <Card
                className="fixed-height bg-secondary shadow column-container"
                id="nav-content"
              >
                <Container className="goal-container p-0">
                  <Link to="/app" className="navbar-nav navbar-brand">
                    <div className="flex-center center-logo">
                      <div className="logo-divider">
                        <img
                          alt="reversed logo"
                          src={require("../../../assets/img/brand/logo-goalify.svg")}
                          className="mr-2"
                        />
                      </div>{" "}
                      <div>
                        <span className="hello-user">Goalify</span>
                      </div>
                    </div>
                  </Link>{" "}
                  <Container className="goal-container p-0">
                    <NavItem className="nav-button">
                      <NavOption icon="home-52.svg" page="Home" linkTo="/app" />
                    </NavItem>
                  </Container>
                  <Container className="goal-container p-0">
                    <span className="hello-user" id="center-logo">
                      Collections
                    </span>
                    {currentUser.collections.map((collection, id) => (
                      <NavOption
                        key={id}
                        icon="folder-15.svg"
                        page={collection.collectionName}
                        linkTo={`/app/collections/${collection._id}`}
                      />
                    ))}
                  </Container>
                  <Container className="goal-container p-0">
                    <span className="hello-user" id="center-logo">
                      Settings
                    </span>
                    <NavItem className="nav-button">
                      <NavOption
                        icon="single-01.svg"
                        page="Profile"
                        linkTo="/app/user-profile"
                      />
                    </NavItem>
                    <NavItem className="nav-button">
                      <NavOption
                        icon="lock.svg"
                        page="Logout"
                        action={userLogOut}
                      />
                    </NavItem>
                  </Container>
                </Container>
                <div className="button-container mb-4">
                  <div className="full-width ml-3 mr-3">
                    <hr className="ml-3 mr-3 mb-3 mt-2" />
                  </div>
                  <Button
                    color="primary"
                    className="align-items-center"
                    onClick={() => passedDownToggleNewCollectionForm()}
                  >
                    <i className="ni ni-fat-add"></i>
                    <span id="main-cta">Collection</span>
                  </Button>
                </div>
              </Card>
            </Col>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainNav;
