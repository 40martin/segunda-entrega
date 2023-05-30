import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

