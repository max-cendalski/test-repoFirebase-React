

const Modal = ({modal, handleCancelModal, title, handleEditInputChange, handleSubmitEdit}) => {

  return (
    <article className={modal}>
      <input
        type="text"
        value={title}
        onChange={handleEditInputChange}
        >
      </input>
      <button onClick={handleSubmitEdit} type="submit">Submit</button>
      <button onClick={handleCancelModal}>Cancel</button>
    </article>
  )
}

export default Modal;
