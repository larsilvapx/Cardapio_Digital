Cardápio Digital — Full Stack Application
Aplicação Full Stack para gerenciamento e visualização de um cardápio digital, permitindo cadastrar produtos com imagem, nome e preço através de uma API REST construída com Spring Boot e consumida por um Frontend em React + TypeScript.

O projeto foi desenvolvido com foco em aprendizado prático de arquitetura web moderna, integração frontend/backend e manipulação de arquivos (upload de imagens).

Demonstração
O sistema permite:

✅ Listar produtos do cardápio ✅ Cadastrar novos itens ✅ Upload de imagens ✅ Persistência em banco de dados ✅ Exibição dinâmica no frontend

Objetivo do Projeto
Este projeto foi criado com o objetivo de praticar conceitos essenciais utilizados no mercado:

Desenvolvimento Full Stack
APIs REST
Integração React + Spring Boot
Upload e armazenamento de arquivos
Comunicação HTTP
Organização em camadas (Controller, Service, Repository)
Consumo de API com React Query
Boas práticas de arquitetura
Arquitetura do Sistema
Frontend (React + TS)
        │
        │ HTTP (Axios)
        ▼
Backend (Spring Boot API)
        │
        ▼
PostgreSQL Database
        │
        ▼
Armazenamento local de imagens (/images)
Tecnologias Utilizadas
Backend
Java 21+
Spring Boot
Spring Web
Spring Data JPA
PostgreSQL
Maven
Multipart File Upload
Frontend
React
TypeScript
Vite
Axios
React Query
CSS
Banco de Dados
PostgreSQL
Estrutura do Projeto
Backend
src/main/java
 ├── controller
 ├── service
 ├── repository
 ├── model
 └── config
Frontend
src
 ├── components
 │    ├── Card
 │    └── CreateModal
 ├── hooks
 ├── interface
 ├── assets
 └── App.tsx
Funcionalidades Implementadas
Cadastro de Produto
Nome
Preço
Upload de imagem
Salvamento no banco
Upload de Imagens
Arquivo enviado via multipart/form-data
Renomeado com UUID para evitar conflitos
Armazenado localmente na pasta:
/images
Exemplo:

f2fd732f-7f0b-4940-b957-b944e1923f1e_coxinha.png
API REST
Método	Endpoint	Descrição
GET	/food	Lista todos os produtos
POST	/food	Cria novo item
Fluxo de Funcionamento
Usuário cadastra item no frontend
React envia FormData para API
Spring Boot recebe imagem
Arquivo é salvo na pasta /images
Nome da imagem é salvo no banco
Frontend monta URL da imagem
Produto é exibido na tela
Como Executar o Projeto
Backend
git clone <repo>
cd backend

./mvnw spring-boot:run
API disponível em:

http://localhost:8080
Frontend
cd frontend
npm install
npm run dev
Aplicação disponível em:

http://localhost:5173
Exemplo de Consumo da API
const response = await axios.get("http://localhost:8080/food");
Exibição das Imagens
As imagens são carregadas dinamicamente:

<img src={`http://localhost:8080/images/${image}`} />
Aprendizados Principais
Durante o desenvolvimento foram aplicados:

Comunicação cliente-servidor
Manipulação de arquivos no backend
Hooks customizados no React
Cache e sincronização com React Query
Organização de projeto Full Stack
Debug de integração frontend/backend
Autor
Luciano Rodrigues

Desenvolvedor em transição de carreira para a área de tecnologia, focado em desenvolvimento Backend Java e aplicações Full Stack.

LinkedIn: (https://www.linkedin.com/in/lucasards/)
Próximos Passos (Roadmap)
 Deploy em nuvem
 Autenticação de usuários
 Categorias de produtos
 Edição e exclusão de itens
 Upload em armazenamento cloud (AWS S3)
Sobre o Projeto
Este projeto faz parte do meu processo de aprendizado prático em desenvolvimento moderno, simulando um sistema real utilizado em aplicações comerciais.

Se gostou do projeto, deixe uma no repositório!
