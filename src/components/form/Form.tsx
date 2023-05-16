import useForm from "./hooks/useForm"
// image
import IconRow from '../../assets/images/icon-arrow.svg'

type PropsForm = {
  setYears: (value: number | null) => void
  setDays: (value: number | null) => void
  setMonths: (value: number | null) => void
}

function Form(props: PropsForm) {

  const { setYears, setMonths, setDays } = props
  const {handleChange, handleBlur, handleSubmit, errors} = useForm(setYears, setMonths, setDays)

  return (
    <form className='formulario' onSubmit={handleSubmit}>
      <div className='itemFormulario' id={errors.day ? 'itemError' : ''}>
        <label>DAY</label>
        <input onChange={handleChange}  onBlur={handleBlur} name='day' type='number' placeholder='DD' required />
        <span>{errors.day ?? ''}</span>
      </div>
      <div className='itemFormulario' id={errors.month ? 'itemError' : ''}>
        <label>MONTH</label>
        <input onChange={handleChange} onBlur={handleBlur} name='month' type='number' placeholder='MM' required/>
        <span>{errors.month ?? ''}</span>
      </div>
      <div className='itemFormulario' id={errors.year ? 'itemError' : ''}>
        <label>YEAR</label>
        <input onChange={handleChange} onFocus={handleBlur} name='year' type='number' placeholder='YYYY' required/>
        <span>{errors.year ?? ''}</span>
      </div>
      <div className='separador'>
        <div>
          <hr />
        </div>
        <button>
          <img src={IconRow} alt='' />
        </button> 
      </div>
  </form>
  )
}

export default Form