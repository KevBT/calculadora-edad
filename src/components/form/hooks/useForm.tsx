import React, { useState } from "react"
import { errorsType } from "../../../types/errors.types"
import { INITIAL_STATE } from "../../../utilities/INITIAL_STATE"
import { INITIAL_STATE_ERROR } from "../../../utilities/INITIAL_STATE_ERRORS"
import { validation } from "../../../validations/validations"

const useForm = (setYears: any, setMonths: any, setDays: any) => {
  
  const [date, setDate] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState<errorsType>(INITIAL_STATE_ERROR)

  // FECHA ACTUAL
  const dateCurrent = new Date()
  const mesActual = dateCurrent.getMonth()
  const añoActual = dateCurrent.getFullYear()
  const diaActual = dateCurrent.getDate()

  // meses
  let meses = 11;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setDate({
      ...date,
      [name]: value
    })
  }

  const handleBlur = () => {
    const errores = validation(date.day, date.month, date.year, 2023)
    setErrors(errores)
  }

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(!Object.keys(errors).length && date.year < 2024) {
      const age = new Date(+date.year,+date.month-1,+date.day)
      const añoNacimiento = age.getFullYear()
      const mesNacimiento = age.getMonth()
      const diaNacimiento = age.getDate()
  
      const años = añoActual - añoNacimiento
  
      if(mesActual === mesNacimiento && diaActual > diaNacimiento) {
        setYears(años)
      }else{
        setYears(años - 1)
      }
  
      let diasDiferencia = 30 - (diaNacimiento - diaActual)
      
      if(diasDiferencia > 29) {
        setDays(diasDiferencia - 30)
      }else{
        setDays(diasDiferencia)
      }
  
      if( mesActual === mesNacimiento && diaNacimiento === diaActual){
        setMonths(0)
        setDays(0)
        setYears(años)
      }else
        if(mesActual === mesNacimiento && diaActual > diaNacimiento){
          setMonths(0)
        }else{
          const diferenciaMeses = meses - mesNacimiento
          const sumaMeses = diferenciaMeses + mesActual
          const calculoMeses = sumaMeses > meses ? sumaMeses - meses : sumaMeses
          setMonths(calculoMeses)
        }
    }else{
      handleBlur()
    }
  } 

  return {errors, handleChange, handleBlur, handleSubmit}
}

export default useForm