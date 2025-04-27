import { render, screen } from "@testing-library/react";
import Section from "@/src/app/dashboard/components/Section";

describe("Section", () => {
  it("renders with heading and child element", () => {
    const heading = "Test Heading";
    const childText = "This is a test child element.";
    render(
      <Section heading={heading}>
        <p>{childText}</p>
      </Section>
    );

    const headingElement = screen.getByText(heading);
    expect(headingElement).toBeInTheDocument();

    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });
});
