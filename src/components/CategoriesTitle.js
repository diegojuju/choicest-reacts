import { useParams} from "react-router";
import '../styles/style.css'

function CategoriesTitle(){

    const {idCategory}  = useParams()       
    const tests='Novedosos Tests vocacionales adptados a tu necesidad!'
    const profesionales='Los mejores Profesionales personalizados!'
    const modalidad='Elegís la modalidad de Test y feedback que quieras!'
    let title=''

    if (idCategory ==='tests'){
        title=tests
    }else if (idCategory ==='profesionales'){
        title=profesionales
    }else if (idCategory ==='modalidad'){
        title=modalidad
    }

    return (
        <>
            <h2 className='text-dark m-2 p-2 title'>{title}</h2>         
        </>
    )
}
export default CategoriesTitle