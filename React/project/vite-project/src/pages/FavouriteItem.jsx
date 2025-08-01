import Productlist from "../components/product/ProductList";
import FavouriteContext from '../store/ContextFavourite';
import { useContext } from 'react';
function FavouriteItem(){
     const favouriteContext=useContext(FavouriteContext);
     return <div>
        <h1>My favourite items</h1>
    <Productlist products={favouriteContext.favouriteItem} />
    </div>

}
export default FavouriteItem;