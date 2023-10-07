import './styles.css'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import User from '../../assets/user-dark.svg'

type UserType = "Paciente" | "Médico";

function renderRow(props: ListChildComponentProps<UserType>){
  
  const { index, style, data } = props;
    const styles = { 
      iconStyle: {
        maxWidth: '20px', marginRight: 10, 
      },
      listContainer: {
        height: 50, marginTop: 30
      }
    }

    let primaryText;
    switch (data) {
      case "Paciente":
        primaryText = `Paciente ${index + 1}`;
        break;
      case "Médico":
        primaryText = `Médico ${index + 1}`;
        break;
      default:
        primaryText = "Usuário desconhecido";
    }

    return(
        <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
        <img src={User} 
        style={styles.iconStyle} />
        <ListItemText 
        primary={primaryText} 
        />
        </ListItemButton>
      </ListItem>  
    )
}

export function PatientList(){
    const userType: UserType = "Paciente";

    return(
        <Box
        sx={{ width: "100%", height: 478, maxWidth: 321, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={478}
          width={321}
          itemSize={46}
          itemCount={50}
          overscanCount={5}
          itemData={userType}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    )
}

export function DoctortList(){
  const userType: UserType = "Médico";

  return(
      <Box
      sx={{ width: "100%", height: 400, maxWidth: 321, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={321}
        itemSize={46}
        itemCount={50}
        overscanCount={5}
        itemData={userType}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  )
}
