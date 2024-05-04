import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToDo, updateToDo, addCurrentToDo } from 'reduxTodo/slice';

export const EditForm = () => {
  const dispatch = useDispatch();
  //Save changes
  const handleSubmit = event => {
    event.preventDefault();
    const newText = event.currentTarget.elements.text.value.trim();
    dispatch(updateToDo(newText));
    handleCloseEditForm();
  };
  //Close change input
  const handleCloseEditForm = () => {
    dispatch(addCurrentToDo(null)); //clear form
  };

  const currentToDo = useSelector(selectCurrentToDo);
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentToDo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={handleCloseEditForm}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
