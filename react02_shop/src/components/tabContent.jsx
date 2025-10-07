import { React, useState, useEffect } from 'react';
// MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function TabContent({shoes}) {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let [fade, setFade] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 10);
        return () => {
            setFade('');
        }
    })

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="상품정보" value="1" />
                <Tab label="배송정보" value="2" />
                <Tab label="환불약관" value="3" />
            </TabList>
            </Box>
            <TabPanel value="1">
                <div className={'start ' + fade}>{shoes[0].title}</div>
            </TabPanel>
            <TabPanel value="2">
                <div className={'start ' + fade}>내용1</div>
            </TabPanel>
            <TabPanel value="3">
                <div className={'start ' + fade}>내용2</div>
            </TabPanel>
        </TabContext>
    </Box>
    )
}

export default TabContent;