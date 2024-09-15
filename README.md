# Projeto Tryunfo

<p>Este projeto é uma aplicação web desenvolvida em React que permite aos usuários criar e gerenciar cartas de um jogo de cartas chamado Tryunfo. Os usuários podem adicionar novas cartas com atributos personalizados, visualizar uma prévia das cartas e excluir cartas que não desejam mais.</p>

<h3>Tecnologias Utilizadas</h3>
<ul>
    <li><strong>React</strong>: Biblioteca JavaScript para construção de interfaces de usuário.</li>
    <li><strong>PropTypes</strong>: Para validação das propriedades dos componentes React.</li>
    <li><strong>CSS</strong>: Para estilização da aplicação.</li>
    <li><strong>Jest</strong> e <strong>React Testing Library</strong>: Para testes de componentes e funcionalidades.</li>
</ul>

<h3>Funcionalidades</h3>
<ul>
    <li><strong>Adicionar Nova Carta</strong>: Os usuários podem preencher um formulário para criar novas cartas, incluindo nome, descrição, atributos, imagem e raridade.</li>
    <li><strong>Pré-visualização da Carta</strong>: As informações da nova carta são exibidas em tempo real enquanto o usuário preenche o formulário.</li>
    <li><strong>Salvar Cartas</strong>: As cartas criadas são salvas em um estado gerenciado, permitindo que os usuários vejam e interajam com suas cartas salvas.</li>
    <li><strong>Excluir Cartas</strong>: Os usuários podem remover cartas previamente salvas da lista.</li>
    <li><strong>Validação de Formulário</strong>: O botão de salvar só é habilitado quando todos os campos do formulário são preenchidos corretamente, garantindo que as cartas sejam criadas com dados válidos.</li>
</ul>

<h3>Estrutura do Projeto</h3>
<pre>
/projeto-tryunfo
├── src
│   ├── components
│   │   ├── Card.js
│   │   ├── Form.js
│   ├── App.js
│   ├── form.css
│   ├── index.css
│   ├── index.js
│   └── setupTests.js
└── public
    └── index.html
</pre>

<h3>Instalação</h3>
<ul>
    <li><strong>Clone o repositório</strong>:
        <pre>git clone https://github.com/seu-usuario/projeto-tryunfo.git</pre>
    </li>
    <li><strong>Navegue até o diretório do projeto</strong>:
        <pre>cd projeto-tryunfo</pre>
    </li>
    <li><strong>Instale as dependências</strong>:
        <pre>npm install</pre>
    </li>
    <li><strong>Inicie a aplicação</strong>:
        <pre>npm start</pre>
    </li>
</ul>
