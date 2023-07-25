import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
 
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//     backgroundColor: '#000',
//     color: '#fff',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   form: {
//     padding: theme.spacing(2),
//     border: '1px solid #e0e0e0',
//     borderRadius: theme.shape.borderRadius,
//   },
//   circle: {
//     width: 30,
//     height: 30,
//     borderRadius: '50%',
//     backgroundColor: '#000',
//     color: '#fff',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     transition: 'background-color 0.3s ease',
//   },
//   whiteCircle: {
//     backgroundColor: '#fff',
//   },
// }));

const WhyChooseUs = () => {
//   const classes = useStyles();
//   const [selectedService, setSelectedService] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleServiceChange = (event) => {
//     setSelectedService(event.target.value);
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h1">Why Choose Us?</Typography>
//           <Typography variant="body1" paragraph>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Nullam nec purus eu lectus euismod fermentum vel in nunc.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper className={classes.paper}>
//             <Typography variant="h4">
//               Select the service you want to check the difference
//             </Typography>
//             <form className={classes.form}>
//               <TextField
//                 select
//                 fullWidth
//                 value={selectedService}
//                 onChange={handleServiceChange}
//                 variant="outlined"
//               >
//                 <MenuItem value="service1">Service 1</MenuItem>
//                 <MenuItem value="service2">Service 2</MenuItem>
//                 <MenuItem value="service3">Service 3</MenuItem>
//               </TextField>
//               <Button variant="contained" color="primary" onClick={handleSubmit}>
//                 Submit
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <div className={`${classes.circle} ${submitted ? classes.whiteCircle : ''}`}>
//             {submitted ? '1' : 'Step'}
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
};

export default WhyChooseUs;
