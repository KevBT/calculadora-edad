import { useState } from 'react'
// css
import './App.css'
// Components
import Age from './components/age/Age'
import Form from './components/form/Form'

function App() {

  const [years, setYears] = useState<null | number>(null)
  const [days, setDays] = useState<null | number>(null)
  const [months, setMonths] = useState<null | number>(null)

  return (
    <div className='contenedorFormulario'>
      <Form setYears={setYears} setMonths={setMonths} setDays={setDays}/>
      <Age years={years} days={days} months={months} />
    </div>
  )
}

export default App
