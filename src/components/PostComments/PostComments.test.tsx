import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar um comentario nos comentarios", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comment"), {
      target: {
        value: "Bem feio",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));
    expect(screen.getByText("Bem feio")).toBeInTheDocument();
  });

  test("Deve adicionar outro comentario nos comentarios", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("campo-comment"), {
      target: {
        value: "Bem legal",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));
    expect(screen.getByText("Bem legal")).toBeInTheDocument();
  });
});
