import './style.css'


const textOptions = ['Categorias', 'Minha estante', 'Favoritos']


function HeaderOptions(){
    return(
        <ul className='options'>
            {textOptions.map(text=>(
              <li className='option'><p>{text}</p></li>
            ))}
            
           </ul>
    )
}

export default HeaderOptions;