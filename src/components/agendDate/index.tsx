import './styles.css'
import Calendar from '../../assets/calendar.png'

export function AgendDate(){
    return(
        <>
        <div>
            <img className="containerAgend" src={Calendar} />
        </div>
        </>
    )
}