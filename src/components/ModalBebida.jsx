import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick, receta } = useBebidas();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Image
        src={receta.strDrinkThumb}
        alt={`Imagen receta ${receta.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciones</h2>
          {receta.str}
          <h2>Ingredientes y Cantidad</h2>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBebida;
