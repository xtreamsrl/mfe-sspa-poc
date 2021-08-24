import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
  CircularProgress,
} from '@xtream-mfe-sspa-poc/ui-kit';
import { setCurrentUser } from '@xtream-mfe-sspa-poc/auth';

const LoginRoot: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
        .then(res => res.json())
        .then((users: any[]) => {
          if (users.length !== 1) {
            setCurrentUser(null);
            setError(true);
            setLoading(false);
          } else {
            setCurrentUser(users[0]);
            setLoading(false);
          }
        });
    }, 1500);
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh' }}
         display="flex"
         flexDirection="column"
         justifyContent="center"
         alignItems="center">
      <Card>
        <CardContent>
          <Grid container
                spacing={2}>
            <Grid item
                  xs={12}>
              <Typography>Login</Typography>
            </Grid>
            <Grid item
                  xs={12}>
              <TextField fullWidth
                         label="Email"
                         type="email"
                         value={email}
                         onChange={e => setEmail(e.target.value)} />

            </Grid>
            <Grid item
                  xs={12}>
              <TextField fullWidth
                         label="Password"
                         type="password"
                         value={password}
                         onChange={e => setPassword(e.target.value)} />
            </Grid>
            {error? <Typography color="error.main">Error</Typography>:null}
            <Grid item
                  xs={12}
                  textAlign="center">
              <Button variant="contained"
                      onClick={login}>
                {loading?<CircularProgress/>: 'Login'}
              </Button>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
    </Box>
  );
};

LoginRoot.displayName = 'LoginRoot';

export default LoginRoot;
