import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
function Empformformic() {
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
     
    
  return (
    <div>
      <h2>Employee Form</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className='mb-3'>
        <Field type='text' placeholder='Enter Name' name='name' />
        <div className='text-danger'><ErrorMessage name='name'/></div><br/><br/>
        </div>
        <div className='mb-3'>
        <Field type='email' placeholder='Enter email' name='email' />
        <div className='text-danger'><ErrorMessage name='email'/></div><br/><br/>
        <button type='submit'>Submit</button>
        </div>
      </Form>
      </Formik>
    </div>
  )
}

export default Empformformic
