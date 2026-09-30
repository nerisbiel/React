import "./App.css"

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

  //Função executad aqundo usuario clicar no botão consultar
  async function consultarClima(){

    //verifica se o campo esta vazio
    if(cidade === ""){
      alert("Digite uma cidade! ");
      return; 
    }
    try{

      const resposta = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=cc3058fb62e66fcd73e91f5bd6bc04eb&units=metric&lang=pt_br`)

      const dados = await resposta.json();

    if (dados.cod !== 200){
      alert("Cidade não encontrada!");
      return;
    }
      setTemperatura(dados.main.temp + "°C")
 
      setClima(dados.weather[0].description)
 
      setUmidade(dados.main.humidity + "%")

    //Enviando dados do react para uma api propria utilizando metodo post 

    // Faz uma requisição para a API de histórico criada pelos alunos
await fetch("http://localhost:3000/historico", {
 
  // Define o método HTTP utilizado
  method: "POST",
 
  // Informa que os dados enviados estarão no formato JSON
  headers: {
    "Content-Type": "application/json"
  },
 
  // Converte o objeto JavaScript para JSON
  body: JSON.stringify({
 
    // Envia o nome da cidade consultada
    cidade: cidade,
 
    // Envia a temperatura retornada pela API OpenWeatherMap
    temperatura: dados.main.temp + "°C",
 
    // Envia a descrição do clima
    clima: dados.weather[0].description,
 
    // Envia a umidade do ar
    umidade: dados.main.humidity + "%"
 
  })
 
});

    } catch(erro){
      console.log(erro)
      alert("Erro ao consultar a API.")
    }
    
 }
 
 



  //Retorna a interface visual do sistema
  return (

    //Container principal da ativação
    <div style = {{ padding: "20px", fonfFamily: "Arial"}}>
      {}
      <h1>Sistema de Previsão de Tempo</h1>

      {}
      <input 
  type="text" 
  placeholder="Digite uma cidade 😍" 
  value={cidade} 
  onChange={(e) => setCidade(e.target.value)} 
  
  // ADICIONE APENAS ESSA LINHA ABAIXO:
  onKeyDown={(e) => e.key === "Enter" && consultarClima()} 
/>


      
      <button 
      //Executa a função consultarClima
      onClick={consultarClima} 
      //Define a margem à esquerda
      style={{marginLeft: "10px" }} >

        {/*Texto exibido no botão */}
        Consultar
      </button>

      <hr />

      <h2>{cidade}</h2>
      <h2>{clima}</h2>
      <h2>{temperatura}</h2>
      <h2>{umidade}</h2>

    </div>
  )
}

//Exporta o componente App para ser utilizado no React
export default App;