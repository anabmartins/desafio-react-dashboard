import './styles.css'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import User from '../../assets/user-dark.svg'

function renderRow(props: ListChildComponentProps){
    const { index, style } = props;
    const iconStyle = {
      maxWidth: '20px', marginRight: 10, 
    };
    return(
        <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
        <img src={User} 
        alt={`Paciente ${index + 1}`} 
        style={iconStyle} />
        <ListItemText 
        primary={`Paciente ${index + 1}`} 
        />
        </ListItemButton>
      </ListItem>  
    )
}

export function PatientList(){
    return(
        <Box
        sx={{ width: "100%", height: 400, maxWidth: '51%', bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={400}
          width={321}
          itemSize={46}
          itemCount={50}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    )
}