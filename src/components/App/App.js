import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {
      value: 'Закончить модуль'
    },
    {
      value: 'Закончить модуль за модулем'
    },
    {
      value: 'Работать'
    }
  ];
  
  return (
  <div>
    <h1>Важные дела:</h1>
      <InputItem />
      <ItemList items={ items }/>
      <Footer count={ 3 }/>
  </div>);
}
export default App;