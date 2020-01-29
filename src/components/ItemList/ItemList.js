import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {todoItem } ) => (<ul>
  <li><Item todoItem={ todoItem }/></li>
  <li><Item todoItem={ 'Закончить модуль за модулем' }/></li>
  <li><Item todoItem={ 'Работать' }/></li>
</ul>);

export default ItemList;