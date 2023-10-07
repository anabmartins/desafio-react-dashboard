import './styles.css'
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import { renderRow } from './renderRow';

export function AgendList() {
    return (
        <>
            <Box
                sx={{ width: '100%', height: 700, maxWidth: 1000, bgcolor: 'background.paper' }}
            >
                <FixedSizeList
                    height={700}
                    width={1000}
                    itemSize={80}
                    itemCount={50}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        </>
    )
}