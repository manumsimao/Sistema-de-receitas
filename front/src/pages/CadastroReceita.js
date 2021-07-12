import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CadastroReceita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: " ",
      nome: " ",
      ingredientes: [],
      modo: [],
      outras: []
    };
  }

  clear(){
    let fields = Array.from(document.querySelectorAll('input:not(.back-button), textarea'));
    fields.forEach(
      field => {
        field.value = "";
      }
    )
  }

  async handleSubmit(event) {
    event.preventDefault();
    let secao= [
      {
        nome: "Ingredientes",
        conteudo: this.state.ingredientes,
      },
      {
        nome: "Modo de Preparo",
        conteudo: this.state.modo,
      },
      {
        nome: "Outras informações",
        conteudo: this.state.outras,
      },
    ];
    await axios
      .post(
        "http://localhost/api/receitas",
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
        this.clear()
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
        case "modo":
          this.setState({ modo: event.target.value });
          break;
          case "outras":
            this.setState({ outras: event.target.value });
            break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form">
            <h2 className="section-title">Cadastre sua receita</h2>
            <div className="secao-form">
              <label>ID</label>
              <input
                name="receita"
                className="receita-titulo-cadastro"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Nome da receita"
                required
              />
            </div>
            <div className="secao-form">
              <label>Nome</label>
              <input
                name="receitaNome"
                className="receita-titulo-cadastro"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Nome da receita"
                required
              />
            </div>
            <div className="secao-form">
              <label>Ingredientes</label>
              <textarea
                name="ingredientes"
                className="receita-conteudo"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Ingredientes"
                required
              />
            </div>
            <div className="secao-form">
              <label>Modo de preparo</label>
              <textarea
              name="modo"
                className="receita-conteudo"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Modo de preparo"
                required
              />
            </div>
            <div className="secao-form">
              <label>Outras informações</label>
              <textarea
              name="outras"
                className="receita-conteudo"
                onChange={(event) => this.handleTextChange(event)}
                placeholder="Outras informações"
              />
            </div>
            <input className="back-button" type="submit" value="Enviar" />
            <button className="back-button">
					<Link to={"./receitas"}>Voltar para lista de receitas</Link>
				</button>
          </div>
        </form>
      </div>
    );
  }
}
