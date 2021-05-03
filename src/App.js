import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';
import Modals from './components/Modals';
import NestedSelects from './components/NestedSelects';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <NestedSelects />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
