import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import UsersList from './UsersList';
import "./App.css";

const App = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        API App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <UsersList />
            </Container>
        </div>
    );
};

export default App;
