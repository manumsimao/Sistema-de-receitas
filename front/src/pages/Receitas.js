import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Receitas extends Component {
  constructor(props){
    super(props);
    this.state = {
      receitas:[]
    }
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch('/api/receitas')
    .then(res => res.json())
    .then(receitas => this.setState({ receitas:receitas }));
  }

  render() {
    const  receitas  = this.state.receitas;

    return (
    <div className="App">
        <h2 className="section-title">Receitas</h2>
        {receitas.length ? (
          <div className="receitas">
            {receitas.map((item) => {
              var link = "./"+item.id;
              return(
              <button className="receita">
                <Link to={link}>{item.nome}</Link>
              </button>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      <button className="back-button">
					<Link to={"./home"}>Voltar para home</Link>
				</button>
      </div>
      );
  }
}

export default Receitas;