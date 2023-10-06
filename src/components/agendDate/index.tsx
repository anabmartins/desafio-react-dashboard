import './styles.css'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/index';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar/index';
import { useState } from 'react';

export function AgendDate() {
    const [value, setValue] = useState<any>(dayjs('2022-04-17'));
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem>
                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} className='calendar'/>
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </>
    )
}