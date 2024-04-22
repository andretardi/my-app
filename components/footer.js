import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "@/components/footer.module.css"

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export default function  BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.provaa} sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ASSISTENZA" {...a11yProps(0)} />
          <Tab label="CONSEGNA" {...a11yProps(1)} />
          <Tab label="PRODOTTI" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Se vi serve un' assistenza contattate il nostro staff via email o numero di telefono
        <br/>
        metaassistenza@gmail.org
        <br/>
        4678973628
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        I tempi di consegna variano dai 10 ai 15 anni in base alla distanza e quantità dell' acquisto.<br/>
        ma garantiamo che prima o poi arrivera! <br/> certificate by Metastoronly.
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      I prodotti hanno sempre la scatola originale e siggillata, in oltre prima della consega facciamo un cek del prodotto e lo siggilliamo su protezioni adatte. 
      </CustomTabPanel>
    </Box>
  );
}