# BlogFeed API

Uma API RESTful simples para gerenciamento de posts de blog, construída com Node.js, Express e TypeScript. Este projeto foi desenvolvido como parte do "Guia de Estudos Completo para Engenharia de Backend" e utiliza o MongoDB para persistência de dados.

O uso de TypeScript garante um código mais seguro, manutenível e com menos bugs em tempo de execução.

## ✨ Funcionalidades

A API oferece as seguintes funcionalidades básicas, com os dados sendo salvos permanentemente em um banco de dados NoSQL:

* **Listar** todas as postagens de blog.
* **Buscar** uma postagem específica pelo seu ID.
* **Criar** uma nova postagem de blog.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript no servidor.
* **Express**: Framework para a construção da API.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **MongoDB**: Banco de dados NoSQL orientado a documentos.
* **Mongoose**: Biblioteca de ODM (Object Data Modeling) para modelar e interagir com o MongoDB.
* **Dotenv**: Para gerenciar variáveis de ambiente de forma segura.

## 🚀 Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Dentro dele, adicione sua string de conexão do MongoDB Atlas:
      ```
      MONGO_URI=sua_string_de_conexao_aqui
      ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

O servidor se conectará ao MongoDB Atlas e estará rodando em `http://localhost:3000`.

## 🧪 Como Testar a API

Como esta API não possui uma interface de usuário, você pode testar os endpoints usando ferramentas como **Postman**, **Insomnia** ou diretamente pela linha de comando com o **`curl`**.

Abaixo estão alguns exemplos usando `curl`.

#### 1. Listar todas as postagens (GET /api/posts)

Abra um **novo terminal** (deixe o servidor rodando no outro) e execute:
```bash
curl http://localhost:3000/api/posts
```

#### 2. Buscar uma postagem específica (GET /api/posts/:id)

Para buscar o post com ID 1:

```bash
curl http://localhost:3000/api/posts/1
```

#### 3. Criar uma nova postagem (POST /api/posts)

Este comando envia um corpo (body) no formato JSON para criar um novo post:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Meu Post via Curl", "content":"Este é o conteúdo do post!", "author":"Tester"}' http://localhost:3000/api/posts
```

Após executar este comando, você pode listar todos os posts novamente para ver a nova entrada.

<img width="485" height="194" alt="image" src="https://github.com/user-attachments/assets/8c583ada-c31d-4d3e-92d3-7135861c4910" />

