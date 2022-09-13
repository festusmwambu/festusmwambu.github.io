// Dependencies
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// React Bootstrap Form
import Form from "react-bootstrap/Form";

//Components
import LoaderButton from "../../components/LoaderButton/LoaderButton";

//AWS Auth
import { Auth } from "aws-amplify";

// Libs
import { useAppContext } from "../../libs/contextLib";
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";

// CSS
import "./Login.css";

// Particles Background
import Particles from '../../containers/Particles/Particles'

const Login = () => {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Particles />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <LoaderButton
            block
            size="lg"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Login
        </LoaderButton>
        </Form>
      </div>
    </>
  );
}

export default Login