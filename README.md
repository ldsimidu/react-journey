# Projeto Organo - React App

O projeto 'Organo' é um projeto tem como origem um curso da Alura 'React: desenvolvendo com JavaScript'. <br>
Este projeto é um sistema de cadastro de colaboradores, onde você pode preencher um formulário e gerar cards para cada membro de um time específico. Ele foi desenvolvido como parte de um curso da Alura sobre ReactJS.

---

## 📁 Estrutura Principal do Projeto

```plaintext
src/
├── componentes/
│   ├── Banner/
│   │   ├── Banner.css
│   │   ├── Banner.js
│   │   └── index.js
│   ├── Botao/
│   │   ├── Botao.css
│   │   ├── Botao.js
│   │   └── index.js
│   ├── CampoTexto/
│   │   ├── CampoTexto.css
│   │   ├── CampoTexto.js
│   │   └── index.js
│   ├── Colaborador/
│   │   ├── Colaborador.css
│   │   ├── Colaborador.js
│   │   └── index.js
│   ├── Formulario/
│   │   ├── Formulario.css
│   │   ├── Formulario.js
│   │   └── index.js
│   ├── ListaSuspensa/
│   │   ├── ListaSuspensa.css
│   │   ├── ListaSuspensa.js
│   │   └── index.js
│   └── Time/
│       ├── Time.css
│       ├── Time.js
│       └── index.js
├── App.css
├── App.js
├── index.css
└── index.js
```

---

## Componentes do Projeto

### 1. `App.js` (Componente Principal)
É o componente **raiz** da aplicação. Ele:

- Define os times com nomes e cores
- Controla a **lista de colaboradores** via `useState`
- Renderiza:
  - `<Banner />`
  - `<Formulario />`
  - Múltiplos `<Time />`, um para cada time existente

**Props passadas:**
- `times`: lista com os nomes dos times
- `novoColaborador`: função callback que adiciona um novo colaborador à lista
- `colaboradores`: filtrados de acordo com o nome do time

---

### 2. `Banner.js`
Exibe o banner superior da página com uma imagem estática.

**Uso:**
- Importado e utilizado **apenas em `App.js`**

**Props:**
- Nenhuma

---

### 3. `Formulario.js`
Renderiza o formulário para adicionar um novo colaborador. Ele usa os seguintes componentes:

- `<CampoTexto />` — para nome, cargo e imagem
- `<ListaSuspensa />` — para escolher o time
- `<Botao />` — botão de submissão

**Props esperadas:**
- `times` → array com os nomes dos times
- `novoColaborador` → função para enviar os dados do formulário ao `App.js`

---

### 4. `CampoTexto.js`
Input de texto genérico e reutilizável.

**Uso:**
- Usado dentro do `Formulario.js`

**Props esperadas:**
- `label`: texto da label
- `placeholder`: texto do placeholder
- `valor`: valor atual do campo (controlado por estado no `Formulario`)
- `aoAlterado`: função chamada ao digitar no campo
- `obrigatorio`: se o campo é obrigatório (`true` ou `false`)

---

### 5. `ListaSuspensa.js`
Cria um `select` (dropdown) com os times.

**Uso:**
- Usado dentro do `Formulario.js`

**Props esperadas:**
- `itens`: array de strings (nomes dos times)
- `valor`: valor selecionado
- `aoAlterado`: função chamada quando o item selecionado mudar
- `obrigatorio`: boolean

---

### 6. `Botao.js`
Componente de botão reutilizável.

**Uso:**
- Usado dentro de `Formulario.js` como botão de submissão

**Props esperadas:**
- `children`: conteúdo interno do botão (texto, ícone, etc.)

---

### 7. `Time.js`
Renderiza uma seção para cada time com os seus respectivos colaboradores.

**Uso:**
- Renderizado dinamicamente dentro de `App.js`

**Props esperadas:**
- `nome`: nome do time
- `corPrimaria`: cor usada no cabeçalho dos cards
- `corSecundaria`: cor de fundo da seção
- `colaboradores`: array com os colaboradores desse time

---

### 8. `Colaborador.js`
Renderiza um card visual de um colaborador (imagem, nome e cargo).

**Uso:**
- Chamado dentro de `Time.js`, um por colaborador

**Props esperadas:**
- `nome`: nome do colaborador
- `cargo`: cargo do colaborador
- `imagem`: URL da imagem
- `cor`: estilo com cor de fundo do cabeçalho do card

---

## 🗺️ Fluxo Resumido do Projeto

1. O usuário preenche o formulário (`Formulario`)
2. Ao enviar, os dados são enviados ao `App.js` via `props.novoColaborador`
3. O novo colaborador é adicionado ao estado
4. O estado é filtrado por time e passado para o componente `Time`
5. O componente `Time` renderiza um card `Colaborador` para cada membro do time
