import React from 'react';

const ItemList = () => (<ul>
  <li>Дело №1</li>
  <li>Дело №2</li>
</ul>);

const App = () => (<div>
  <h1>Список дел</h1>
  <ItemList />
</div>);

export default App;