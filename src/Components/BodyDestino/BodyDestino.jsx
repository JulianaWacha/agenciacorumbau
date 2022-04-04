import Foto5 from '../../assets/img/Doce_BeiraMar.png'
import Foto4 from '../../assets/img/Comida-bahiana-740x415.jpg'
import Foto3 from '../../assets/img/barcoMar.png'
import Foto2 from '../../assets/img/mergulhoCorais.jpg'
import Foto1 from '../../assets/img/passeio4por4.jpeg'
import Foto from '../../assets/img/praiaPonta.jpeg'
import React from "react"
import './BodyDestino.css'

export default () => {
    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={Foto} alt="Cards de Fotos" />
                            <title>Praia da Ponta</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Praia da Ponta</text>
                            <div class="card-body">
                                <p class="card-text">Ponta do Corumbau</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Como ir</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Forma de ir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={Foto1} alt="Cards de Fotos" />
                            <title>Praia da Ponta</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Passeio 4X4</text>
                            <div class="card-body">
                                <p class="card-text">Corumbau e arredores</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Como ir</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Forma de ir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={Foto2} alt="Cards de Fotos" />
                            <title>Praia da Ponta</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Mergulho nos corais</text>
                            <div class="card-body">
                                <p class="card-text">Mergulho nos corais</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Como ir</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Forma de ir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={Foto3} alt="Cards de Fotos" />
                            <title>Passeio de Catamarã</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Passeio de Catamarã</text>
                            <div class="card-body">
                                <p class="card-text">Passeio de Catamarã</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Como ir</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Forma de ir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={Foto4} alt="Cards de Fotos" />
                            <title>Comida Bahiana</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Comida Bahiana</text>
                            <div class="card-body">
                                <p class="card-text">Comida Bahiana</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Como ir</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Forma de ir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={Foto5} alt="Cards de Fotos" />
                            <title>Trufas com puro cacau, bahiano</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Trufas com puro cacau, bahiano</text>
                            <div class="card-body">
                                <p class="card-text">Corumbau</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Como encomendar</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Forma de encomendar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}