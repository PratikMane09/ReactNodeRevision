import './style.css';
import style from './style1.module.css'
function Funcomp(props)
{
    return(
        <>
        <h2 className="abc">Functional components</h2>
        <h2 className="xyz">Engineer</h2>
        <p className={style.para}>Electronic and Telecommunication </p>
        <h4>{props.a}</h4>
        <h4>{props.add()}</h4>
        </>
    )
}

export default Funcomp