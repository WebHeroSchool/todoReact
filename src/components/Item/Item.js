import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Item = ({ value, isDone,onClickDone,id }) => (<div className={styles.flex}>
  <div onClick={() => onClickDone(id)}>
    <Checkbox
      checked={isDone}
      value="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <label className={
      classnames ({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
    { value }
    </label>
    </div>
      <div>
        <IconButton aria-label="delete" >
        <DeleteIcon />
        </IconButton>
      </div>
    </div>);

export default Item;