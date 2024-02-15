import React, { useState, useCallback } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle((prevTitle) => (prevTitle === 'My List' ? 'New Title' : 'My List'));
  }, []);

  const changeSortingHandler = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder);
  }, []);

  const listItems = [5, 3, 1, 10, 9];

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} ascendingOrder={ascendingOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortingHandler}>
        {ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order'}
      </Button>
    </div>
  );
}

export default App;
