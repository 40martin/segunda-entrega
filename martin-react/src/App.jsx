import './App.css';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="container-fluid">
      
      <Header />
      <Routes>
          <Route path={"/*"} element={<Error404 />} />
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

