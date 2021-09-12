import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import type { Member as TeamMember } from '~/intl';

const useStyles = makeStyles(() => ({
  body: { background: 'linear-gradient(#DDDDDD, #EEEEEE)' },
  inner: { padding: '10vw 0vw' },
  heading: { flexBasis: '33.33%', flexShrink: 0 },
  secondaryHeading: { color: '#AAAAAA' },
}));

export interface Props {
  name: string;
  position: string;
}

const FC: React.FC<TeamMember> = ({ name, role, skill }: TeamMember) => {
  const classes = useStyles({});

  return (
    <Accordion expanded>
      <AccordionSummary>
        <Typography className={classes.heading}>{name}</Typography>
        <Typography className={classes.secondaryHeading}>{role}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {skill.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};
FC.displayName = 'Member';

export default FC;
