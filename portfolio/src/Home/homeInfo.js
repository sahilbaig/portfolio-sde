import { Grid } from "@mui/material"
import IconGrid from "./icon-grid"
const HomeInfo = () =>{
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <h1>Hey , I am Sahil </h1>
          <h3>A Full Stack Developer</h3>
          <p>Find out more about my work: </p>
          <IconGrid></IconGrid>
        </Grid>
      
      </Grid>
    )
}

export default HomeInfo;