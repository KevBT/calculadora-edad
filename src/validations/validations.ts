export const validation = (dia: number, mes: number,año:number, añoActual: number) => {
  let errors: {} = {}
  if(dia > 31){errors = {...errors, day: 'Must be a valid day'}}
  if(mes > 12){ errors = {...errors, month: 'Must be a valid month'}}
  if(año > añoActual){errors = {...errors, year: 'Must be in the past'}}
  return errors
}