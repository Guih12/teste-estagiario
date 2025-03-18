# Teste Técnico - Aplicação de Filmes

Este é um projeto desenvolvido como parte de um teste técnico para estágio. A aplicação exibe uma lista de filmes populares, permite a paginação entre os filmes, exibe detalhes de cada filme e possibilita que os usuários façam comentários sobre os filmes.

## 🖥️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/):** Framework React para renderização do lado do servidor e geração de páginas estáticas.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilitários CSS para estilização.
- **[React Query](https://tanstack.com/query/v4):** Gerenciamento de estado assíncrono e cache de dados.
- **[Nuqs](https://github.com/nuqs/nuqs):** Gerenciamento de query strings para sincronizar estados com a URL.
- **[ShadCN/UI](https://shadcn.dev/):** Componentes estilizados para construção de interfaces modernas.
- **[Supabase](https://supabase.io/):** Plataforma de desenvolvimento de aplicativos com banco de dados PostgreSQL.
- **[The Movie Database (TMDb)](https://www.themoviedb.org/):** API de filmes para obter informações sobre filmes.

## 📑 Funcionalidades

- **Página Inicial:**

  - Exibe uma lista de filmes populares com paginação.
  - Cada filme é exibido com seu título, imagem e avaliação.

- **Detalhes do Filme:**

  - Ao clicar em um filme, é possível visualizar detalhes como:
    - Título
    - Ano de lançamento
    - Idioma original
    - Duração
    - Gêneros
    - Sinopse
    - Avaliação

- **Comentários:**

  - Os usuários podem adicionar comentários sobre os filmes.
  - Os comentários são exibidos em ordem cronológica.

- **Paginação:**
  - Navegação entre páginas para explorar mais filmes populares.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Gerenciador de pacotes (npm ou yarn)

### Passos para rodar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd teste-estagiario
   ```

2. **instale as dependências:**

```bash
   pnpm install
```

3. **Renomeie `.env.local.example` para `.env.local` na raiz do projeto e adicione a chave da API do The Movie Database (TMDb) e do Supabase:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=<sua-url-supabase>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<sua-chave-anonima-supabase>
   NEXT_PUBLIC_TMDB_API_KEY=<sua-chave-tmdb>
   ```

4. **Inicie o servidor de desenvolvimento:**

```bash
   pnpm run dev
```
