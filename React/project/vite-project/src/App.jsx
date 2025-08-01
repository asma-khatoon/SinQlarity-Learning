import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct';
import Layout from './components/layouts/Layout';
import FavouriteItem from './pages/FavouriteItem';
import {Routes, Route} from 'react-router-dom';

function App() {
  
  
   return <Layout>
    <Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/product/Add' element={<AddProduct/>}></Route>
  <Route path='/product/favourite'element={<FavouriteItem/>}></Route>
  
  </Routes>
  </Layout>
  
}

export default App
