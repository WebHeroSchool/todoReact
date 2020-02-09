import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const App = () => {
  const items = [
    {
      value: 'Закончить модуль',
      isDone: true
    },
    {
      value: 'Составить резюме',
      isDone: false
    },
    {
      value: 'Работать',
      isDone: false
    }
  ];
  
  return (
  <div className={styles.wrap}>
    <h1>Важные дела:</h1>
      <InputItem />
      <ItemList items={ items }/>
      <Footer count={ items.length }/>  
  </div>);
}
export default App;