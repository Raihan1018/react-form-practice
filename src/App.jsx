import React from 'react'
import SimpleForm from './components/SimpleForm'
import FormAction from './components/FormAction'
import ControlledField from './components/ControlledField'
import UnControlledForm from './components/UnControlledForm'

const App = () => {
  return (
    <div className='p-16'>
      {/* <SimpleForm/> */}
      {/* <FormAction/> */}
      {/* <ControlledField/> */}
      <UnControlledForm/>
    </div>
  )
}

export default App