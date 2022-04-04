import React from "react"
import './BodyContato.css'

export default () => {
    return (
        <div id="main-banner-home">
            <h1>Contato</h1>
            <div id="map">
            </div><script src=" https://www.google.com/maps/search/ponta+do+corumbau/@-16.928976,-39.1531171,13z/data=!3m1!4b1" async defer>
            </script>
            <div>
                <a href="https://www.google.com/maps/search/ponta+do+corumbau/@-16.928976,-39.1531171,13z/data=!3m1!4b1" class="ligth-btn"> Mapa</a>
            </div>
            <div id="contato-email"> <p>
                <i className="fa fa-envelope-o" aria-hidden="true"> <b>contato@corumbau_tour.com.br </b> </i>
            </p>
                <div>
                    <form>
                        <label for="nome">Nome:</label><br />
                        <input id="nome" type="text" name="nome" /><br />
                        <label for="mail">Digite seu email:</label><br />
                        <input id="mail" type="text" name="mail" /><br />
                    </form>
                </div>
            </div>
            <div className="container-contato">
                <h2>Parceiros de Corumbau </h2>
                <br />
                <p>
                    <button type="button"><a href="https://www.instagram.com/delicias_corumbau/"
                        target="_blank">Delícias de Corumbau<i class="bi bi-instagram"></i></a></button>
                </p>
            </div>
        </div>
    );
}