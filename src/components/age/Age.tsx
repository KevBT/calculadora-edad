import './age.css'

type Props = {
  years: number | null
  months: number | null
  days: number | null
}

function Age(props: Props) {

  const { years, months, days} = props
  
  return (
    <section className='containerDate'>
      <div className='date'>
        <h1 className='number'>{years ?? '- -'}</h1>
        <h1>&nbsp;years</h1>
      </div>
      <div className='date'>
        <h1 className='number'>{months ?? '- -'}</h1>
        <h1>&nbsp;months</h1>
      </div>
      <div className='date'>
        <h1 className='number'>{days ?? '- -'}</h1>
        <h1>&nbsp;days</h1>
      </div>
    </section>
  )
}

export default Age