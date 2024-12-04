// File: UserList.test.tsx
import "@testing-library/jest-dom"; // Thêm các matchers từ jest-dom
import { render, screen } from "@testing-library/react"; // Import render và screen từ React Testing Library
import UserList from "../../app/components/UserList"; // Import component cần test

test("renders the UserList component and displays users", () => {
  // Render component
  render(<UserList />);

  // Kiểm tra xem phần tử tiêu đề có hiển thị không
  expect(screen.getByText("User List")).toBeInTheDocument();

  // Kiểm tra xem tên người dùng có hiển thị trong danh sách không
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Jane Smith")).toBeInTheDocument();
});
