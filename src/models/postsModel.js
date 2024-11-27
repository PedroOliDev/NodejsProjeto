import 'dotenv/config';
// Importar a função para conectar ao banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js"


// Estabelecer a conexão com o banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);



// Função assíncrona para obter todos os posts do banco de dados
export async function GetTodosOsPosts() {
    // Conectar ao banco de dados e obter a coleção "posts"
    const db = conexao.db("Imersao-nodeTeste");
    const colecao = db.collection("posts");

    // Buscar todos os documentos da coleção e converter em um array
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
    const db = conexao.db("Imersao-nodeTeste");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
    
};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Imersao-nodeTeste");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost})
    
}
