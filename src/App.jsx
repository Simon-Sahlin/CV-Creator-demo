import { useState } from 'react'

import Section from './Section.jsx'
import HeaderSec from './HeaderSec.jsx'


function App() {
  const [editEnabled, toggleEdit] = useState(false)
  
  function enableEdit(){
    toggleEdit(true);
  }
  function disableEdit(){
    toggleEdit(false);
  }

  return (
    <>
      <div className="page" id="editPage">
        <button onClick={enableEdit}>EDIT</button>
        <button onClick={disableEdit} disabled={!editEnabled}>SAVE</button>
      </div>
      <div className="page">
        <HeaderSec editEnabled={editEnabled} />

        <Section title="poop"/>
      </div>
    </>
  )
}

export default App
