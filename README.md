# BlogFeed API

Uma API RESTful simples para gerenciamento de posts de blog, construída com Node.js, Express e TypeScript. Este projeto foi desenvolvido como parte do "Guia de Estudos Completo para Engenharia de Backend".

O uso de TypeScript garante um código mais seguro, manutenível e com menos bugs em tempo de execução.

## ✨ Funcionalidades

A API oferece as seguintes funcionalidades básicas:

* **Listar** todas as postagens de blog.
* **Buscar** uma postagem específica pelo seu ID.
* **Criar** uma nova postagem de blog.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript no servidor.
* **Express**: Framework para a construção da API.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **ts-node**: Para executar o código TypeScript diretamente.

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

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:3000`.

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

