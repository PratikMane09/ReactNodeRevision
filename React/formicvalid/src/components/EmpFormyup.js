import { useFormik } from 'formik'
import * as Yup from 'yup'
function EmpFormyup() {
  const initialValues={
    name:"",
    email:""
}
const onSubmit=values=>{
  console.log(values)
}
const validationSchema=Yup.object({
        name:Yup.string().required("Required"),
        name:Yup.string().length(4),
        email:Yup.string().required("Required")
      })    
      const formik=useFormik({
        initialValues,onSubmit,validationSchema
      })  
    
  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
        <input type='text' placeholder='Enter Name' name='name' values={formik.values.name} onChange={formik.handleChange} className='form-control'/>
        <div className='text-danger'>{formik.errors.name?formik.errors.name:null}</div><br/><br/>
        </div>
        <div className='mb-3'>
        <input type='email' placeholder='Enter email' name='email' values={formik.values.email} onChange={formik.handleChange} className='form-control'/>
        <div className='text-danger'>{formik.errors.email?formik.errors.email:null}</div><br/><br/>
        <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EmpFormyup
