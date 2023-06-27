"use client";
import { useRouter } from 'next/navigation';
import { Button, Container } from '../lib/mui';


const HomePage = () => {
    const router = useRouter();
 
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: '30px' }}>
            <Button variant="contained" onClick={() => router.push('/users')} style={{marginTop: '30px'}}>
                TO USERS PAGE
            </Button>
        </Container>
    );
};

export default HomePage;
