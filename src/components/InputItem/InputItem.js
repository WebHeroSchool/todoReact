import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
          id="standard-textarea"
          label="Введи дело:"
          placeholder="Дело"
          multiline
        />
</div>);

export default InputItem;