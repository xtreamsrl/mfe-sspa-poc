import React, { useEffect, useState } from 'react';
import { PostData } from '../types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  NavLink,
  Typography,
} from '@xtream-mfe-sspa-poc/ui-kit';

type Props = {};

const LastPosts: React.FC<Props> = ({}) => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([] as PostData[]);


  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box p={4}
           display="flex"
           justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Card>
      <CardContent>
        <Grid container>
          {posts.map(data => (
            <Grid item
                  xs={12}>
              <Box py={1} sx={{borderBottom:'1px solid lightgrey'}}>
                <Box display="flex"
                     alignItems="center"
                     mb={2}>

                  <NavLink path={`/users/${data.userId}`}>
                    <Avatar alt="Remy Sharp"
                            src={`https://avatars.dicebear.com/v2/male/${data.userId}.svg`} />
                  </NavLink>
                  <Typography gutterBottom
                              variant="h5"
                              component="div"
                              noWrap
                              ml={2}>
                    {data.title}
                  </Typography>
                </Box>

                <Typography variant="body2"
                            color="text.secondary"
                            noWrap>
                  {data.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

LastPosts.displayName = 'LastPosts';

export default LastPosts;
