import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { createContainer } from "./domManipulators";
import CustomerForm from "../src/CustomerForm";

describe("CustomerForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const validCustomer = {
    firstName: "first",
    lastName: "last",
    phoneNumber: "123456789",
  };
  const form = (id) => container.querySelector(`form[id="${id}"]`);

  const field = (name) => form("customer").elements[name];

  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual("text");
  };

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form("customer")).not.toBeNull();
  });

  it("has a submit button", () => {
    render(<CustomerForm />);
    const submitButton = container.querySelector('input[type="submit"]');
    expect(submitButton).not.toBeNull();
  });

  const itRendersAsATextBox = (fieldName) =>
    it("renders as a text box", () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });

  const itIncludesTheExistingValue = (fieldName) => {
    it("includes the existing value", () => {
      render(<CustomerForm {...{ [fieldName]: "value" }} />);
      expect(field(fieldName).value).toEqual("value");
    });
  };

  const itSubmitsNewValue = (fieldName, value) =>
    it("saves new value when submitted", async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          {...{ [fieldName]: "existingValue" }}
          onSubmit={(props) => expect(props[fieldName]).toEqual(value)}
        />
      );
      await ReactTestUtils.Simulate.change(field(fieldName), {
        target: { value: value, name: fieldName },
      });
      await ReactTestUtils.Simulate.submit(form("customer"));
    });

  const itRendersALabel = (fieldName, value) =>
    it("renders a label", () => {
      render(<CustomerForm />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(value);
    });

  const itAssignsAnIdThatMatchesTheLabelId = (fieldName) =>
    it("assigns an id that matches the label id", () => {
      render(<CustomerForm />);
      expect(field(fieldName).id).toEqual(fieldName);
    });

  const itSubmitsExistingValue = (fieldName, value) =>
    it("saves existing value when submitted", async () => {
      render(
        <CustomerForm
          {...validCustomer}
          {...{ [fieldName]: value }}
          onSubmit={(props) => expect(props[fieldName]).toEqual(value)}
        />
      );
      await ReactTestUtils.Simulate.submit(field(fieldName));
      expect.hasAssertions();
    });

  

  describe("first name field", () => {
    itRendersAsATextBox("firstName");
    itIncludesTheExistingValue("firstName");
    itRendersALabel("firstName", "First Name");
    itAssignsAnIdThatMatchesTheLabelId("firstName");
    itSubmitsExistingValue("firstName", "firstName");
    itSubmitsNewValue("firstName", "firstName");
  });

  describe("last name field", () => {
    itRendersAsATextBox("lastName");
    itIncludesTheExistingValue("lastName");
    itRendersALabel("lastName", "Last Name");
    itAssignsAnIdThatMatchesTheLabelId("lastName");
    itSubmitsExistingValue("lastName", "value");
    itSubmitsNewValue("lastName", "newValue");
  });

  describe("phone number field", () => {
    itRendersAsATextBox("phoneNumber");
    itIncludesTheExistingValue("phoneNumber");
    itRendersALabel("phoneNumber", "Phone Number");
    itAssignsAnIdThatMatchesTheLabelId("phoneNumber");
    itSubmitsExistingValue("phoneNumber", "12345");
    itSubmitsNewValue("phoneNumber", "67890");
  });
});
