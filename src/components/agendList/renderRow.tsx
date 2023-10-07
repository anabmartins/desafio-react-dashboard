import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListChildComponentProps } from 'react-window';
import User from '../../assets/user-dark.svg';


export function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;
    const styles = {
        iconStyle: {
            maxWidth: '20px', marginRight: 10, 
        },
        hour: {
            marginRight: 20, fontWeight: 'bold', fontSize: 17
        },
        item: {
            backgroundColor: "#e7e7e7d2", display: 'flex'
        }
    };

    // horario ficticio temporario 
    function generateRandomHour() {
        const hour = Math.floor(Math.random() * 24);
        const minute = Math.floor(Math.random() * 60);

        // Formatar a hora e o minuto para ter dois dígitos
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');

        return `${formattedHour}:${formattedMinute}`;
    }

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton style={styles.item}>
                <span style={styles.hour}>{generateRandomHour()}</span>
                <img src={User}
                    style={styles.iconStyle} />
                <ListItemText
                    primary={`Consulta ${index + 1}`}
                    secondary={`Paciente ${Math.floor(Math.random() * 20) + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}
