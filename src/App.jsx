import React from 'react'
import SimpleForm from './components/SimpleForm'
import FormAction from './components/FormAction'
import ControlledField from './components/ControlledField'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      {/* <SimpleForm/> */}
      {/* <FormAction/> */}
      <ControlledField/>
    </div>
  )
}

export default App