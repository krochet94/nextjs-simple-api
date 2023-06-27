"use client";
import React, { useState } from 'react';
import { Card , Button, Container, Avatar, Grid, Typography, CircularProgress } from '../../lib/mui'
import type { User, UserProps } from '../interface';


const Users: React.FC<UserProps> = ({ users, hasMore, handleLoadMore }) => {
    const [userData, setUserData] = useState<User[]>(users);
    const [hasMoreData, setHasMoreData] = useState<boolean>(hasMore);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = async () => {
        setIsLoading(true);
        const resData = await handleLoadMore();
        setUserData(resData.data);
        setHasMoreData(resData.hasMore);
        setIsLoading(false);
    }

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: '30px' }}>
        {userData.length < 1 ? <CircularProgress /> : (
            <>
            <Typography variant="h4" style={{ margin: '50px 0px', color: 'whitesmoke' }}>USERS</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{margin: '20px 0px'}}>
                {userData.map(user => (
                <Grid item key={user.id} xs={2} sm={4} md={4}>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: '10px' }}>
                    <Avatar src={user.avatar} alt={user.first_name} style={{ margin: '5px' }} />
                    <Typography style={{ margin: '5px' }}>{user.id}</Typography>
                    <Typography style={{ margin: '5px' }}>{user.email}</Typography>
                    <Typography style={{ margin: '5px' }}>{user.first_name} {user.last_name}</Typography>
                    </Card>
                </Grid>
                ))}
            </Grid>
            {hasMoreData && (
                <Button variant="contained" disabled={isLoading} style={{marginTop: '30px'}} onClick={handleClick}>
                {isLoading ? 'Loading...' : 'Load more'}
                </Button>
            )}
            {!hasMoreData && <Typography style={{ marginTop: '30px 0px', color: 'whitesmoke' }}>No more users to fetch.</Typography>}
            </>
        )}
        </Container>
    );
};

export default Users;
