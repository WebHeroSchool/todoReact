import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

class App extends React.Component {
  state = {
    items: [
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
    ]
  };
  render() {
   
    
    return (
    <div className={styles.wrap}>
      <h1>Важные дела:</h1>
        <InputItem />
        <ItemList items={ this.state.items }/>
        <Footer count={ this.state.items.length }/>  
    </div>);
  }
}
  
export default App;