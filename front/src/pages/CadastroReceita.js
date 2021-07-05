import React, { Component } from "react";
import axios from "axios";

export default class CadastroReceita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: " ",
      nome: " ",
      ingredientes: "",
      secao: [
        {
          nome: "Modo de Preparo",
          conteudo: [" "],
        },
        {
          nome: "Outras informações",
          conteudo: [" "],
        },
      ],
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    const secao = [{ nome: "Ingredientes", conteudo: this.ingredientes }];
    await axios
      .post(
        "http://localhost/cadastro",
        {
          id: this.state.id,
          nome: this.state.nome,
          secao: secao,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("aqui");
      });
  }

  handleTextChange(event) {
    switch (event.target.name) {
      case "receita":
        this.setState({ id: event.target.value });
        break;
      case "receitaNome":
        this.setState({ nome: event.target.value });
        break;
      case "ingredientes":
        this.setState({ ingredientes: event.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <h2 className="section-title">Cadastre sua receita</h2>
            <div className="secao">
              <label>ID</label>
              <input
                name="receita"
                className="receita-titulo-cadastro"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Nome da receita"
                required
              />
            </div>
            <div className="secao">
              <label>Nome</label>
              <input
                name="receitaNome"
                className="receita-titulo-cadastro"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Nome da receita"
                required
              />
            </div>
            <div className="secao">
              <label>Ingredientes</label>
              <input
                name="ingredientes"
                className="receita-conteudo"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Ingredientes"
                required
              />
            </div>
            <div>
              <label>Modo de preparo</label>
              <input
                className="receita-conteudo"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Modo de preparo"
                required
              />
            </div>
            <div>
              <label>Outras informações</label>
              <input
                className="receita-conteudo"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Modo de preparo"
                required
              />
            </div>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    );
  }
}
