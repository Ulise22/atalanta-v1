import Inicio from './paginas/inicio/Inicio';
import Noticias from './paginas/noticias/Noticias';
import Historia from './paginas/historia/Historia';
import Contacto from './paginas/contactanos/Contacto';
import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navbar/Navbar';
import { Route } from 'wouter';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <Route path='/' component={Inicio} />
        <Route path='/Noticias' component={Noticias} />
        <Route path='/Historia' component={Historia} />
        <Route path='/Contacto' component={Contacto} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
