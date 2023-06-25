"use client";
import { useState, useEffect } from 'react';
import { Card , Button, Container, Avatar, Grid, Typography, CircularProgress } from '../lib/mui'
import type { User, UsersResponse } from './interface';


const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUsers(page);
  }, []);

  const fetchUsers = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data: UsersResponse = await response.json();

      if (data.data.length === 0) {
        setHasMore(false);
        return;
      }

      const temp = [...users, ...data.data];
      const filteredData = temp.filter((value, index, self) => 
        self.findIndex(v => v.id === value.id) === index);
      
      setUsers(filteredData);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    fetchUsers(nextPage);
    setPage(nextPage);
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: '30px' }}>
      {users.length < 1 ? <CircularProgress /> : (
        <>
          <Typography variant="h4" style={{ margin: '50px 0px', color: 'whitesmoke' }}>USERS</Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{margin: '20px 0px'}}>
            {users.map(user => (
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
          {hasMore && (
            <Button variant="contained" onClick={handleLoadMore} disabled={isLoading} style={{marginTop: '30px'}}>
              {isLoading ? 'Loading...' : 'Load more'}
            </Button>
          )}
          {!hasMore && <Typography style={{ marginTop: '30px 0px', color: 'whitesmoke' }}>No more users to fetch.</Typography>}
        </>
      )}
    </Container>
  );
};

export default UsersPage;
