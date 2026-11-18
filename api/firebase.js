// Importa a função responsavel por iniciar o firebase
import { initializeApp } from "firebase/app";

// Importa a função responsavel por conectar o Realtime Database
import { getDatabase } from "firebase/database";

// Configuração do projeto Firebase.
// Essas configuraçõe são geradas automaticamente pelo firebase quando registramos a nossa aplicação

// Elas funcionam como um endereço que permite que nossa aplicação encontre e se conecte ao banco de dados na nuvem


const firebaseConfig = {

    // Indentificador unico do aplicativo
    apiKey: "AIzaSyDO0_VGGciq3Z605bM5fv2r0pfzcft-0Sw",

    // Dominio de autenticação do projeto
    authDomain: "bancoteste-e9aab.firebaseapp.com",

    // Indentificador do projeto firebase
    projectId: "bancoteste-e9aab",

    // Serviço de armazenamento de arquivos
    storageBucket: "bancoteste-e9aab.firebasestorage.app",

    // Identificador responsavel pela troca de mensagens
    messagingSenderId: "110265806167",

    // Identificador unico da aplicação web
    appId: "1:110265806167:web:75124e48420178698b6212",

    // Identificador utilizado pelo Google Analytics
    measurementId: "G-7429QT28LB"

}

// Inicialização do Firebase utilizando as configurações acima
const app = initializeApp(firebaseConfig);

// Cria uma conexão com o Realtime Database
//
// A partir deste objeto sera possivel:
// .Ler dados
// .Salvar dados
// .Atualizar dados
// .Excluir dados
const db = getDatabase(app);

// Exporta a conexão para que ela possa ser utilizada em outros arquivos,
// como o server.js
export default db;