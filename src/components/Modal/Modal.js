

const Modal = ({modal, handleCancelModal, title}) => {

  return (
    <article className={modal}>
      <input
        type="text"
        value={title}
        >
      </input>
      <button>Submit</button>
      <button onClick={handleCancelModal}>Cancel</button>
    </article>
  )
}

export default Modal;
