import React from 'react';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import PersonalPhoto from '../assets/images/personal-photo.jpeg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const tutorialSteps = [
      {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
          'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bird',
        imgPath:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Bali, Indonesia',
        imgPath:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
          'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        label: 'Goč, Serbia',
        imgPath:
          'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ];

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#dbdbdb89',
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paperText: {
    padding: theme.spacing(2),
    margin: '30px auto',
    width: '90%',
  },
  paperPhotos: {
    padding: theme.spacing(2),
    margin: '30px auto',
    maxWidth: '50vh',
    minWidth: '30vw',
    width: '80%',
  },
  large: {
    width: '15rem',
    height: '15rem',
    margin: 'auto',
  },
  description: {
    margin: '10px 10px 10px 10px',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 400,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

function Home() {
  const carouselDirection = 'ltr';
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  };

  const handleStepChange = activeStep => {
    setActiveStep(activeStep)
  };

  const classes = useStyles();
  const maxSteps = tutorialSteps.length;
  
  return (
    <div className="root">
      <Paper className={classes.paperPhotos}>
      <AutoPlaySwipeableViews
        axis={carouselDirection === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {carouselDirection === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {carouselDirection === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      />
      </Paper>
      <Paper className={classes.paperText}>
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Avatar alt="Frederico Mello" src={PersonalPhoto} className={classes.large} />
          </Grid>
          <Grid item md={12} md container direction="column" spacing={2}>
            <Grid item md>
              <Typography variant="h6">
                Quanto tempo você passa dentro do seu carro!?
              </Typography>
              <Typography variant="h6">
                Cuidar do seu carro é cuidar da sua saúde!
              </Typography>
              <Typography variant="h6">
                Para você que tem um QQ ou uma Ferrari, o carinho para detalhar o seu carro conosco é o mesmo!
              </Typography>
              <Typography variant="h6">
                Realização de diversos serviços de detalhamento e estética automotiva.
              </Typography>
              <Typography variant="h6">
                Para você que deseja reativar a paixão pelo seu carro e ou adequa-lo para venda.
              </Typography>
              <Typography variant="h6">
                Conte sempre com um especialista.
              </Typography>
              <Typography variant="h6">
                Agende sua lavagem detalhada agora mesmo. Nela realizamos descontaminação da pintura deixando-a pronta para receber proteção, neste caso usamos uma cera a base de sílica que da até 6 meses de proteção! Isso mesmo, SEIS MESES!!! 😱
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
