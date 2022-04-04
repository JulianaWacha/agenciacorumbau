import React from "react"
import './BodyCadastro.css'

export default () => {
    return (
        <div id="main-banner-home">
            <h3>Entre em contato preenchendo nosso formulário</h3>
            <div className='formcontato' id="-banner-home">
                <form>
                    <label for="nome">Nome:</label><br />
                    <input id="nome" type="text" name="nome" /><br />
                    <label for="nome">Sobrenome:</label><br />
                    <input id="sobrenome" type="text" name="nome" /> <br />
                    <label for="cidade">Cidade: </label><br />
                    <input id="cidade" type="text" name="cidade" minlength="3" maxlength="10" /><br /><br />
                    <label for="uf">Estado: </label><br />
                    <select id="uf" name="uf">
                        <option value='AC'>Acre</option>
                        <option value='AL'>Alagoas</option>
                        <option value='AP'>Amapá</option>
                        <option value='AM'>Amazonas</option>
                        <option value='BA'>Bahia</option>
                        <option value='CE'>Ceará</option>
                        <option value='DF'>Distrito Federal</option>
                        <option value='ES'>Espírito Santo</option>
                        <option value='GO'>Goiás</option>
                        <option value='MA'>Maranhão</option>
                        <option value='MT'>Mato Grosso</option>
                        <option value='MS'>Mato Grosso do Sul</option>
                        <option value='MG'>Minas Gerais</option>
                        <option value='PA'>Pará</option>
                        <option value='PB'>Paraíba</option>
                        <option value='PR'>Paraná</option>
                        <option value='PE'>Pernambuco</option>
                        <option value='PI'>Piauí</option>
                        <option value='RJ'>Rio de Janeiro</option>
                        <option value='RN'>Rio Grande do Norte</option>
                        <option value='RS'>Rio Grande do Sul</option>
                        <option value='RO'>Rondônia</option>
                        <option value='RR'>Roraima</option>
                        <option value='SC'>Santa Catarina</option>
                        <option value='SP'>São Paulo</option>
                        <option value='SE'>Sergipe</option>
                        <option value='TO'>Tocantins</option>
                    </select><br /> <br />
                    <label for="telefone">Telefone: </label><br />
                    <input id="telefone" type="tel" name="telefone" /><br /><br />
                    <label for="mail">Digite seu email:</label><br />
                    <input id="mail" type="text" name="mail" /><br />
                    <section>
                        <label for="mensagem">Digite sua texto:</label><br />
                        <textarea name="menssagem" placeholder="Digite aqui sua menssagem..." rows="5" cols="30"></textarea> <br /><br />
                        <a href="#" class="ligth-btn">Enviar </a>
                        <a href="#" class="ligth-btn">Limpar</a>
                    </section>
                </form>
            </div>
        </div>
    );
}