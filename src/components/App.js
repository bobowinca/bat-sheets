import React, { useState } from 'react'
import DataTable from './DataTable'
import MyModal from './MyModal'

const App = () => {
  const [created, setCreated] = useState(false);
  const [modalToggle, setModalToggle] = useState(true);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

  const openCreate = e => {
    e.preventDefault();
    setModalToggle(true);
    setCreated(false)
  }


  const handleChangeX = e => {
    setX(e.target.value);
  }

  const handleChangeY = e => {
    setY(e.target.value);
  }

  const onCreate = e => {
    setModalToggle(!modalToggle);
    setCreated(true);
  }

  const createText = created ? 'reset' : 'create';

  return (
    <div>
      {modalToggle && <MyModal show={modalToggle}>
        <label>Create a New Spreadsheet</label>
        <div 
            style={{color:'black'}}
        >
          x: <input type="number" value={x} name="x" onChange={handleChangeX} />
          y: <input type="number" value={y} name="y" onChange={handleChangeY} />
          <button onClick={onCreate}>done</button>
        </div>
      </MyModal>}
    
      <div style={{ width: 'max-content' }}>
        <button style={{ marginBottom: 20 }} onClick={openCreate}>{createText}</button>
        {created && <DataTable x={parseInt(x)} y={parseInt(y)} />}
      </div>
    </div>
  );  
}

export default App
