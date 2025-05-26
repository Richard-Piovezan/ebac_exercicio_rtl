import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve haver pelo menos dois comentários", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("comment-box"), {
      target: {
        value: "A comment by user",
      },
    });

    fireEvent.click(screen.getByTestId("comment-check"));

    fireEvent.change(screen.getByTestId("comment-box"), {
      target: {
        value: "Another comment by user",
      },
    });

    fireEvent.click(screen.getByTestId("comment-check"));

    expect(screen.getAllByTestId("comments")).toHaveLength(2);
  });
});
