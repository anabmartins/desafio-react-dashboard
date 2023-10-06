import './styles.css'
import SearchSvg from '../../assets/search.svg'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export function Search() {
    return (
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

export function ComboBoxSearch() {
    return (
        <Stack className='searchContainer'>
            <Autocomplete
                freeSolo
                disableClearable
                options={agend.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField className="searchBar"
                    {...params}
                    label="Busca"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                    />
                    )}
            />
                    <img src={SearchSvg}></img>
        </Stack>
    )
}

const agend = [
    { title: 'Consulta 1', day: 20 },
    { title: 'Consulta 2', day: 21 },
];