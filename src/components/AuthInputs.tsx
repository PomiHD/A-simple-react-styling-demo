import React, { SetStateAction, useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TextButton = styled.button`
  color: #f0b322;
  border: none;
  cursor: pointer;

  &:hover {
    color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(
    identifier: string,
    value: SetStateAction<string>,
  ) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p className="paragraph">
          <Input
            label={"Email"}
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Input
            label={"Password"}
            type="password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <TextButton>Create a new account</TextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
