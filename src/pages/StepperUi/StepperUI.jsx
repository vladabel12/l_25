
import { ArrowDownward, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, IconButton } from '@mui/material';
import * as React from 'react';
import '/src/pages/StepperUi/StepperUi.scss'

export const StepperUI = () => {
    return (
        <div className='stepper'>
            <div className="left-side">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownward />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Foundation Building
                    </AccordionSummary>
                    <AccordionDetails>
                        Learn essential vocabulary, grasp basic grammar, and practice listening and pronunciation.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownward />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Practice and Immersion
                    </AccordionSummary>
                    <AccordionDetails>
                        Regularly engage in speaking, reading, and writing activities while immersing yourself in the language and culture.
                    </AccordionDetails>
                </Accordion>
            </div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ArrowDownward />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Continuous Learning
                </AccordionSummary>
                <AccordionDetails>
                    Maintain consistent practice, immerse yourself in the culture, and advance your skills through continuous study and exposure.
                </AccordionDetails>
                <AccordionActions>
                    <Button>Read more</Button>
                    <Button>Close</Button>
                </AccordionActions>
            </Accordion>
      </div>
    );
}
