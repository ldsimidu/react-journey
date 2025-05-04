import { Banner } from "./Banner";
//vantagem da criação desta importação (index.js), é o fato de poder importar componentes isoladamente
//por conta do nome arquivo index, não é necessário realizar uma importação dupla, como por exemplo: 
// import Banner from './componentes/Banner/Banner'; Agora o import entende que dentro da pasta Banner,
//existe um arquivo index que puxa os imports do componente Banner

export default Banner