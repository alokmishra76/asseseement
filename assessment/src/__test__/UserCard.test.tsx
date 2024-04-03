import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/userMockData.json";
import "@testing-library/jest-dom";
import UserCard from "../Components/UserCard";

it("should render RestaurantCard component with props Data", () => {
  render(<UserCard userData={MOCK_DATA} />);

  const name = screen.getByText("Bluth");

  expect(name).toBeInTheDocument();
});