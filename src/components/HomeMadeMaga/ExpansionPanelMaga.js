import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  
function ExpansionPanelMaga({titre,contenu}) {
    return (<Accordion style={{color: "var(--ifm-font-color-base)",backgroundColor: "var(--ifm-background-color)"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <h2>{titre}</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {contenu}
                    </Typography>
                </AccordionDetails>
            </Accordion>
    );
}

export default ExpansionPanelMaga;