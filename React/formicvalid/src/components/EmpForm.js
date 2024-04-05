
import { useFormik } from 'formik'
function EmpForm() {
    const formik=useFormik({
        initialValues:{
            name:"",
            email:""
        },
        onsubmit:values=>{
            console.log(values)
        },
        validate:values=>{
            let errors={}
                if(!values.name)
                {
                    errors.name='Required'
                }
                if(!values.email)
                {
                    errors.email='Required'
                }
                return errors
            
        }
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

export default EmpForm
