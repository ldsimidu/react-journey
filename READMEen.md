# **Organo Project - React Journey**

### 👋 **Hello and welcome to the 'Organo' project**, based on one of Alura's courses: *"React: Developing with JavaScript"*.  
*Organo* is a team member registration system, where you can fill out a form and generate cards for each member of a specific team.  

While building this project with React, you'll go through essential concepts of the framework, such as:
- Component creation and reuse;
- Communication between components through props;
- State management using `useState` and the idea of controlled components.

This project also teaches how to organize a real-world application with a **predefined Figma layout**, modular folder structure, scoped CSS for each component, and how to build interactive, dynamic forms. You’ll also understand how React handles conditional rendering and how to build reusable interface blocks while following frontend best practices.

---

# **Components & Structure**

#### *Below you'll find the key components built in the Organo Project and how they interact with each other:*  

## 📁 Main Project Structure

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

## 📦 Project Components

### 1. `App.js` (Main Component)

This is the **root component** of the application. It:

- Defines the available teams with names and colors
- Manages the **list of team members** using `useState`
- Renders:
  - `<Banner />`
  - `<Formulario />`
  - Multiple `<Time />` sections, one for each team

**Props passed:**
- `times`: array of team names
- `novoColaborador`: callback to add a new member to the list
- `colaboradores`: filtered by team name for rendering

---

### 2. `Banner.js`

Displays the header banner with a static image.

**Used in:**
- Only in `App.js`

**Props:**
- None

---

### 3. `Formulario.js`

Renders the form to add a new team member. It uses:

- `<CampoTexto />` — for name, role, and image
- `<ListaSuspensa />` — to select a team
- `<Botao />` — the submit button

**Expected props:**
- `times`: array of team names
- `novoColaborador`: function that sends form data back to `App.js`

---

### 4. `CampoTexto.js`

Reusable text input component.

**Used in:**
- `Formulario.js`

**Expected props:**
- `label`: label text
- `placeholder`: input placeholder text
- `valor`: current value of the input (from state)
- `aoAlterado`: function called when input changes
- `obrigatorio`: whether the field is required (`true` or `false`)

---

### 5. `ListaSuspensa.js`

Creates a dropdown (`<select>`) to choose the team.

**Used in:**
- `Formulario.js`

**Expected props:**
- `itens`: array of team names
- `valor`: currently selected value
- `aoAlterado`: function called when selection changes
- `obrigatorio`: boolean

---

### 6. `Botao.js`

Reusable button component.

**Used in:**
- `Formulario.js` as the form submission button

**Expected props:**
- `children`: inner content of the button (text, icon, etc.)

---

### 7. `Time.js`

Renders a section for each team along with its members.

**Used in:**
- Dynamically rendered in `App.js`

**Expected props:**
- `nome`: team name
- `corPrimaria`: header background color
- `corSecundaria`: section background color
- `colaboradores`: list of members for that team

---

### 8. `Colaborador.js`

Renders a visual card for a team member (with image, name, and role).

**Used in:**
- Inside `Time.js`, one per member

**Expected props:**
- `nome`: member's name
- `cargo`: member's role
- `imagem`: image URL
- `cor`: header background style for the card

---

## 🗺️ Project Flow Summary

1. The user fills out the form (`Formulario`)
2. On submission, data is sent to `App.js` via `props.novoColaborador`
3. The new member is added to the application state
4. The state is filtered by team name and passed to the `Time` component
5. The `Time` component renders a `Colaborador` card for each matching member

---

## 🧠 What You Learn

By developing this project with React, you’ll understand the fundamental principles of component-based architecture. You’ll learn how to manage data with state hooks, create reusable UI blocks, apply scoped styling to each component, and structure your application in a scalable way. The hands-on experience also reinforces how props allow child-parent communication, how to handle forms, and how to conditionally render content based on application logic — all while replicating a real Figma design.
