## Catálogo Filmes
Este é um projeto desenvolvido em **Next.js** que consome a API do TMDb para exibir um catálogo de filmes populares e em breve. O projeto utiliza TypeScript, Tailwind CSS e API REST.

### Funcionalidades
- RListagem de filmes populares e futuros lançamentos
- Pesquisa de filmes por nome
- Exibição de detalhes do filme em um modal
- Navegação entre páginas

### Tecnologias Utilizadas
- **RNext.js** (React Framework)

- **RTypeScript** (Tipagem estática)

- **RTailwind CSS** (Estilização)

- **RTMDb API** (Fonte de dados)

- **RShadCN UI** (Componentes reutilizáveis)

### Configuração do Projeto

1. Clonar o repositório
2. Instalar dependências
   ```sh
        npm install
    ```	
3. Criar um arquivo **.env.local**
-Crie um arquivo .env.local na raiz do projeto e adicione:
   ```sh
   NEXT_PUBLIC_ACCESS_TOKEN=chave_de_autorização_do_token
   ```	
4. Rodar o projeto localmente
   ```sh
       npm run dev
   ```
**Acesse: http://localhost:3000**

### Rotas Principais

```sh
    **Rota**                 Descrição
    /                    Home com filmes populares
    /MoviePag            Página com catálogo de filmes
```






