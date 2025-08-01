
import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css'
import FavouriteContext from '../../store/ContextFavourite';
import { useContext } from 'react';

function MainMenu(){
    const favouriteContext=useContext(FavouriteContext);
    const totalFavouriteitems=favouriteContext.favouriteItems.length;
    return <header className={MainMenuStyle.header}>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/product/Add">AddProduct</Link></li>
                <li className={MainMenuStyle.fovouriteCount}><Link to="/product/favourite">{totalFavouriteitems}</Link></li>


            </ul>
        </nav>
        
    </header>
}
export default MainMenu;