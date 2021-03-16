import React from "react";
import { HeaderContainer } from "../containers/header";
import Form from "../components/form";

export default function Signin() {
  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
      </Form>
    </HeaderContainer>
  );
}
