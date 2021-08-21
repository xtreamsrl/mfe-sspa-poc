import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Grid } from '@xtream-mfe-sspa-poc/ui-kit';
import { PostData } from '../types';
import Post from '../Post';


const PostsPage: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([] as PostData[]);


  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
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
    <Grid container
          p={2}
          spacing={2}>
      {posts && posts.map(p => (
        <Grid item
              xs={12}
              md={6}
              key={p.id}>
          <Post data={p} />
        </Grid>
      ))}

    </Grid>
  );
};

PostsPage.displayName = 'PostsPage';

export default PostsPage;
