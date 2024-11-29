<h1 align="center">OASIS Blog - Bafica</h1>

## Sobre este desafio

Aplicação web a qual permitir que os usuários visualizem posts, naveguem entre categorias e leiam artigos completos. A plataforma é otimizada para SEO e performance, utilizando SSR (Server-Side Rendering) e server components do Next.js 14. Toda a estilização é feita com TailwindCSS, seguindo fielmente o design do Figma.

## Apresentação do projeto

<img
  alt="OASIS Blog"
  title="OASIS Blog' presentation gif"
  src="./public/img/presentation.gif"
  height="425"
/>

## Funcionalidades

- Principais

  - Lista de posts em destaque com título, imagem e breve descrição.
  - Navegação entre diferentes categorias de posts.
  - Visualização completa do artigo selecionado.
  - Possibilidade de navegar para o próximo e o post anterior.
  - Implementar uma funcionalidade de busca para encontrar posts pelo título ou conteúdo.
  - Utilizar meta tags apropriadas para melhorar a indexação nos motores de busca.

- Secundárias

  - Testes.
  - Validação de lint do código antes de commit.
  - Geradores semi automáticos de componentes.
  - Documentação de componentes.

## Tecnologias utilizadas

- aos: Biblioteca para animações de scroll em páginas web.
- dayjs: Biblioteca leve para manipulação e formatação de datas.
- next.js: Framework React para aplicações web com renderização server-side e estática.
- tailwind-merge: Utilitário para mesclar classes do TailwindCSS, eliminando conflitos.
- storybook: Ferramenta para desenvolver e documentar componentes de UI de forma isolada.
- testing-library: Conjunto de ferramentas para testar interfaces de usuário com foco na experiência do usuário.
- husky: Ferramenta para configurar ganchos de Git e automatizar tarefas no fluxo de trabalho.
- tailwindcss: Framework CSS utilitário para estilização rápida e consistente.
- plop: Ferramenta para criar geradores de código personalizados e automatizar tarefas repetitivas.
- graphql: Linguagem de consulta para APIs que permite buscar apenas os dados necessários.
- apollo: Plataforma para integrar e gerenciar GraphQL em clientes e servidores.

## Notas

Foi configurado o Husky e o Lint-Staged para gerenciar os commits, assim verifica os arquivos antes de enviá-los ao GitHub.
Essas ferramentas foram configuradas para revisar o lint do código e executar testes, assegurando as alterações antes de serem enviadas.

PS.: Como estava desenvolvendo sozinho neste repositório, decidi realizar os commits diretamente na branch principal (main), priorizando a agilidade, uma vez que abrir e aprovar PRs seria redundante e gastaria tempo.

Implementei o Storybook, ferramenta que além de facilitar a documentação de componentes, torna o desenvolvimento de novos componentes mais prático. É possível criar e testar componentes de forma isolada, agilizando o processo e garantindo maior eficiência no desenvolvimento.

Configurei o Plop.js (https://plopjs.com/) para automatizar a criação de arquivos, como componentes e até mesmo páginas, seguindo padrões pré-estabelecidos (arquivo index, testes e stories). Isso me poupou de criar manualmente estes arquivos a cada novo componente, agilizando o processo e garantindo padronização em todo o projeto.

## Demo

- Para testar o projeto final, [CLIQUE AQUI](https://oasis-blog.vercel.app/).

# Para rodar o projeto

Versão do node usada: v20.9.0
Versão do npm usada: v10.1.0

```bash
# Para instalar as dependências do projeto
npm install
```

```bash
# Crie o .env na raiz do projeto duplicando o .env.example
```

```bash
# (OPCIONAL) Para executar os testes
npm run test
```

```bash
# (OPCIONAL) Para abrir a documentação de componentes storybook
npm run storybook
```

```bash
# (OPCIONAL) Para criar um novo componente
npm run generate
```

```bash
# Executa a aplicação no localhost -> http://localhost:3000
npm run dev
```

# Autor

Desenvolvido com 💚 por Guilherme Bafica 👋

[![LinkedIn Badge](https://img.shields.io/badge/-GuilhermeBafica-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guilhermebafica/)](https://www.linkedin.com/in/guilhermebafica/)
