//Importa hhook useState da biblioteca React
//Ele permite armazenar valores e atualizar a tela automaticamente
import { useState } from "react";

//Cria um componente princia da aplicação
function App(){

  //Estado responsavel por armazenar a cidade digitada 
  const [cidade, setCidade] = useState("");

  //Estado responsavel por armazenar a temperatura
  const [temperatura, setTemperatura] = useState (""); 
  
  const [clima, setClima] = useState ("");

  const [umidade, setUmidade] = useState ("");

  // Função executada quando o usuario clicar no botão consultar
  function consultarClima () {

  //Verifica se a cidade digitada é sao paulo
    if(
      cidade.toLowerCase() === "são paulo" || 
      cidade.toLowerCase() === "são paulo" 

    ) {

      //Atualiza a temperatura
      setTemperatura("24°C");

      //Atualiza a condição climatica
      setClima("Chuvoso");

      //Atualiza a umidade
      setUmidade("60%");
    }
    else if(cidade.toLowerCase() === "curitiba"){

      setTemperatura("10°C");
      setClima("Ensolarado");
      setUmidade("85%")

    }
    else if(cidade.toLowerCase() === "rio de janeiro"){

      setTemperatura("10°C");
      setClima("Ensolarado");
      setUmidade("85%")
      
    }
    else if(cidade.toLowerCase() === "santa catarina"){

      setTemperatura("10°C");
      setClima("Ensolarado");
      setUmidade("85%")
      
    }
    else{
      setTemperatura("--")
      setClima("Cidade não cadastrada")
      setUmidade("--")
    }
  };

  //Retorna a interface visual do sistema
  return (

    //Container principal da ativação
    <div style = {{ padding: "20px", fonfFamily: "Arial"}}>
      {}
      <h1>Sistema de Previsão de Tempo</h1>

      {}
      <input 
      //Tipo do campo
      type="text" 

      //Texto exibido dentro da casa
      placeholder= "Digite uma cidade 😍" 
      
      //valor vinculado ao estado cidade
      value={cidade} 

      //Atualiza o estado quqando o usuario digita
      onChange={(e) =>setCidade(e.target.value)} />

      
      <button 
      //Executa a função consultarClima
      onClick={consultarClima} 
      //Define a margem à esquerda
      style={{marginLeft: "10px" }} >

        {/*Texto exibido no botão */}
        Consultar
      </button>

      <hr />

      <h2>Cidade: {cidade}</h2>
      <h2>Clima: {clima}</h2>
      <h2>Temperatura: {temperatura}</h2>
      <h2>Umidade: {umidade}</h2>

    </div>
  )
}

//Exporta o componente App para ser utilizado no React
export default App;