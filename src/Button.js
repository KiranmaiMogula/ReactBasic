import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Button(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function Start(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);

  }

  return (
      <div>
        <div className='card'> 
          <h2> {props.text} </h2>
          <div className='actions'> 
            <button className='btn' onClick={Start}>Start Learning</button>


          </div>
          {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
          {modalIsOpen && <Backdrop onCancel={closeModal} />}

        </div>

          
          
          
          
          
      </div>


           

  );
}

export default Button;