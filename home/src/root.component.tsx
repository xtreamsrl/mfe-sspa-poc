import { LastPosts } from "@xtream-mfe-sspa-poc/posts";
import { Grid, NavLink, Typography, Box } from '@xtream-mfe-sspa-poc/ui-kit';

import("@xtream-mfe-sspa-poc/posts").then((res) => console.log(res.default));

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! reload

      <Grid container sx={{height:'50vh'}}>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="space-between">
            <Typography>Last posts</Typography>
            <NavLink path="/posts">See all</NavLink>
          </Box>
          <LastPosts></LastPosts>
        </Grid>
      </Grid>


    </section>);
}
