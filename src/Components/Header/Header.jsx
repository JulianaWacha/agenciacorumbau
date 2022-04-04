import React from "react";
import Navbar from '../Navbar/Navbar'
import './Header.css'

export default () => {
    return (
        <header>
            <Navbar></Navbar>
            <div id="main-banner-home">
                <div id="search-promotions">
                    <h1>Corumbau Tour</h1>
                    <h2>Uma agência de turismo, dedicada a esse pedaço do paraíso.</h2>
                    <p> Venha conhecer através da nossa agência os muitos pontos turísticos da região.
                        Localizada a 195 km do aeroporto Internacional de Porto Seguro/BA.
                    </p>
                    <p> Que tal incluir esse destino no seu planejamento de viagem pela costa baiana?
                        Vem com a gente conhecer um pouco sobre essa região, dicas de passeio e muito mais!
                    </p>
                    <p>Paz, tranquilidade e belas paisagem imperam em Corumbau, Bahia,
                        um destino perfeito para quem passar uma temporada no Nordeste, mas longe do agito e da badalação.
                        Venha se conectar com a natureza.</p>
                    <input type="text" name="destiny" placeholder="Digite seu destino" />
                    <select name="region">
                        <option value="">Todos os destinos</option>
                    </select>
                    <select name="category">
                        <option value="">Categoria</option>
                    </select>
                    <a href="#" class="ligth-btn">Pesquisar</a>
                </div>
                <section id="sendproposal-container">
                    <div id="sendproposals-inner" class="wrapper">
                        <h2>Planejamos para você </h2>
                        <p> A maneira mais fácil de encontrar seu passeio.
                            Nos envie a data da sua estadia, que iremos planejar com todo carinho e atenção,
                            o roteiro para curtir os melhores momentos da sua viagem, aqui no sul da Bahia. </p>
                        <a href="#" class="ligth-btn">Enviar data</a>
                    </div>
                </section>
            </div>
        </header>
    );
}