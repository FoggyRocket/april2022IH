import { useState } from 'react'
import { Button }  from '../Components/styledCompos'// export 
//import CommentsView from '...'//export default
//importar imagen con toda y su extensión 
import nova from '../images/war.jpeg'
import pizza from '../images/pizza.jpeg'
//import { images } from '../images' para importar todas y seleccionar 
//export function CommentsView(){}
export  function CommentsView(){
    
    //crear una lista de comentarios!!
            //acumulador, fn que lo modifica
    const [listComments,setListComments] = useState([
        {
            pic: nova,
            description:"Dylan es el mejor maestro del mundo",
           
        },
        {
            pic: pizza,
            description:"Ya quiero que acabe el curso!!! :(",
            
        }
    ]) //usestate() -> undefined
    const [data,setData] = useState({})
    
    const sendComment = (e) => {
        //hacer un prevent
        e.preventDefault()
        //mandar elementos
        console.log("Estoy enviando")
        //agregar mi comentario a listComments
        //actualizamos la lista de comentarios
        setListComments(prevState => {
            return [...prevState, data] // Carga los valores anteriores y agrega el nuevo!
        })
        setData({}) // Borra el comentario almacenado
    }
    //handleChange
    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(`Name: ${name}, value:${value}`)
        console.log("e.target del input",e.target)
        //almacenamos el comentario para enviarlo
        setData( prevState => { 
            return {...prevState,[name]:value } //cargo las llaves anteriores y modifico la que quiero!
        }
        )
    }

    console.log("Comment data",data)
    return (
        <div style={{display:"flex"}}>
            {/* section para crear */}
            <form onSubmit={sendComment}>
                <label>Description</label>
                <input type="text"  name="description" onChange={handleChange}/>
                <input type="text"  name="pic" onChange={handleChange}/>
                <Button type='submit'>
                    Enviar
                </Button>
            </form>
            {/* section para ver comentario */}
            <div>
                {/* que necesitamos para un [].map */}

                { listComments.map( (comment,index_comment)=>(
                    <div key={index_comment}>
                        <img src={comment.pic || pizza } alt="" width={100} height={100} />
                        <p>{comment.description}</p>
                    </div>
                    )
                  ) }
            </div>

            <SinHijos perro="perro"/> 

            <ComponenteConHijos>
                perro
                <div>

                </div>
            </ComponenteConHijos>
        </div>
    )
}

const ComponenteConHijos = (props)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}

//exportando todo el archivo o funcion
//export default CommentsView