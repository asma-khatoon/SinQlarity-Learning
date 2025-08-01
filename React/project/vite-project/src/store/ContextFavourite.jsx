import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favouriteItems: [],
  addFavouriteItem: () => {},
  removeFavoriteItem: () => {},
  isFavouriteItem: () => {}
});

export function ContextFavourite(props) {
  const [userFavourite, setUserFavourite] = useState([]);

  const addFavouriteItem = (product) => {
    setUserFavourite((prevUserFavourite) => {
      return prevUserFavourite.concat(product);
    });
  };

  const removeFavoriteItem = (id) => {
    setUserFavourite((prevUserFavourite) => {
      return prevUserFavourite.filter((product) => product._id !== id);
    });
  };

  const isFavouriteItem = (id) => {
    return userFavourite.some((product) => product._id === id);
  };

  const context = {
    favouriteItems: userFavourite,
    addFavouriteItem,
    removeFavoriteItem,
    isFavouriteItem
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;