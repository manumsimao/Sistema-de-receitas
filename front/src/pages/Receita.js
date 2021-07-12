import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Receita() {
	const [receita, setReceita] = React.useState();
	const param = "/receitas/" + useParams().nome;

	React.useEffect(() => {
		fetch(param)
			.then((res) => res.json())
			.then(setReceita);
	}, [param]);

	const handleDelete = () => {
		 axios
		.delete('http://localhost'+param);
	}

	if (receita) {
		return (
			<div className="App">
				<h2 className="section-title">{receita.nome}</h2>
                <div className="receita-body">
				{receita.secao.map((item) => {
					return (
						<div className="secao">
							<h3 className="section-title">{item.nome}</h3>
							<pre>{item.conteudo}</pre>
						</div>
					);
				})}
                </div>
				<button className="delete-button" onClick={handleDelete()}>DELETAR RECEITA</button>
				<button className="back-button">
					<Link to={"./receitas"}>Voltar para lista de receitas</Link>
				</button>
			</div>
		);
	} else {
		return (
			<div className="App">
				<button>
					<Link to={"./receitas"}>Visualizar receitas</Link>
				</button>
			</div>
		);
	}
}
export default Receita;
