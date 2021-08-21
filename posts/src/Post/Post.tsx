import React from 'react';
import { Avatar, Box, Card, CardContent, NavLink, Typography } from '@xtream-mfe-sspa-poc/ui-kit';
import { PostData } from '../types';

type Props = {
  data: PostData;
};

const Post: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <CardContent>
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
                      ml={2}>
            {data.title}
          </Typography>
        </Box>

        <Typography variant="body2"
                    color="text.secondary">
          {data.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

Post.displayName = 'Post';

export default Post;
