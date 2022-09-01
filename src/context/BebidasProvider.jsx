import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaID] = useState(null);
  const [receta, setReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
        const { data } = await axios(url);
        setReceta(data.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerReceta();
  }, [bebidaId]);

  const consultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
      const { data } = await axios(url);
      setBebidas(data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaIdClick = (id) => {
    setBebidaID(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        consultarBebida,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
