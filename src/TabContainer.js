import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PostContainer from "./PostContainer";
import FAQContainer from './FAQContainer';
import PasswordContainer from './PasswordContainer';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Blog" {...a11yProps(0)} />
                        <Tab label="Screenshots" {...a11yProps(1)} />
                        <Tab label="FAQ" {...a11yProps(2)} />
                        <Tab label="Admin" {...a11yProps(3)} />
                    </Tabs>
                </div>
            </Box>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TabPanel value={value} index={0}>
                    <PostContainer />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    ~ Screenshots ~
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <FAQContainer />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <PasswordContainer />
                </TabPanel>
            </div>
        </Box>
    );
}
