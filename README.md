# **Organo Project - React Journey**

### 👋 **Hello and welcome to the 'Organo' project**, based on one of Alura's courses: *"React: Developing with JavaScript"*.  
*Organo* is a team member registration system, where you can fill out a form and generate cards for each member of a specific team.  

---
### ***Here is the [PUBLISHED SITE ON VERCEL](https://organo-seven-lovat.vercel.app/) where you can try it! =)***
---

While building this project with React, you'll go through essential concepts of the framework, such as:
- Component creation and reuse;
- Communication between components through props;
- State management using `useState` and the idea of controlled components.

This project also teaches how to organize a real-world application with a **predefined Figma layout**, modular folder structure, scoped CSS for each component, and how to build interactive, dynamic forms. You’ll also understand how React handles conditional rendering and how to build reusable interface blocks while following frontend best practices.

---

## 🗺️ Project Flow Summary

1. The user fills out the form (`Formulario`)
2. On submission, data is sent to `App.js` via `props.novoColaborador`
3. The new member is added to the application state
4. The state is filtered by team name and passed to the `Time` component
5. The `Time` component renders a `Colaborador` card for each matching member

