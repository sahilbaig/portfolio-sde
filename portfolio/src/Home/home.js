import { Grid } from "@mui/material"
import HomeInfo from "./homeInfo"
import HomeAnimation from "./homeAnimation"

const Home =  () =>(
  <Grid container spacing={2}>
    <Grid item xs={8}>
      <HomeInfo/>
    </Grid>
    <Grid item xs={4}>
      <HomeAnimation></HomeAnimation>
    </Grid>
  </Grid>
)

export default Home