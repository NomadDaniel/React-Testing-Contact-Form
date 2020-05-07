import React from "react";
import { render, fireEvent, getAllByLabelText } from "@testing-library/react";
import ContactForm from "./ContactForm";

// AAA pattern - Arrange, Act, Assert
test( "basic rendering test", () => {
  render( <ContactForm /> );
} );

test( 'submit form test', () => {

  const { getByLabelText, getByText } = render( <ContactForm /> );

  const firstNameInput = getByLabelText( /First Name*/i );
  const lastNameInput = getByLabelText( /Last Name*/i );
  const emailInput = getByText( /email/i );
  const message = getByLabelText( /message/i );


  expect( firstNameInput ).toBeVisible();
  expect( lastNameInput ).toBeVisible();
  expect( emailInput ).toBeVisible();
  expect( message ).toBeVisible();

} );

test( 'Change input values test', () => {
  const { getByLabelText, getByTestId } = render( <ContactForm /> );

  const firstNameInput = getByLabelText( /First Name*/ );

  fireEvent.change( firstNameInput, { target: { value: 'Jojo' } } );

  expect( firstNameInput.value ).toBe( 'Jojo' );


  fireEvent.click( getByTestId( /test/i ) );

} );







