import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test( "renders App without crashing", () => {
  render( <App /> );
} );

test( "renders submit form header", () => {

  const { getByText } = render( <App /> );

  const header = getByText( /submit form/i );

  expect( header ).toBeInTheDocument();

} );
