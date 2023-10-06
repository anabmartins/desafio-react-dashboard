import './styles.css'
import SearchSvg from '../../assets/search.svg'

export function Search(){
    return(
        <>
        <div className='searchContainer'>   
            <input type="text" 
            className="searchBar"
            placeholder='Busca'
            />
        <img src={SearchSvg}></img>
        </div>
        </>
    )
}