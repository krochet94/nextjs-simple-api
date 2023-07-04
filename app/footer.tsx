"use client";
import Link from 'next/link';
import { Grid, Typography, List, IconButton } from '../lib/mui';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const date = new Date();
    const handleClick = () => {
        navigator.clipboard.writeText('carljasoncainaragoncillo@gmail.com');
        window.alert('Email copied to clipboard');
    };
    return (
        <Grid container style={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 50,
            color: 'whitesmoke',
            flexWrap: 'wrap',
            alignItems: 'center'
            
        }}>
            <Typography>Created by: <strong>Carl Aragoncillo</strong></Typography>
            <List style={{fontSize: '20px', display: 'inline', alignItems: 'center', justifyContent: 'center'}}>
                <Link href="https://www.linkedin.com/in/krochet94" target="_blank" rel="noopener noreferrer" style={{display: 'inline', marginLeft: 5, marginRight: 5}}>
                    <IconButton style={{color: 'whitesmoke'}}>
                        <LinkedInIcon />
                    </IconButton>
                </Link>
                <Link href="https://github.com/krochet94" target="_blank" rel="noopener noreferrer" style={{display: 'inline', marginLeft: 5, marginRight: 5}}>
                    <IconButton style={{color: 'whitesmoke'}}>
                        <GitHubIcon />
                    </IconButton>
                </Link>
                <IconButton
                    style={{color: 'whitesmoke', display: 'inline', marginLeft: 5, marginRight: 5, marginTop: 5}}
                    onClick={handleClick}
                >
                    <EmailIcon />
                </IconButton>
            </List>
            <Typography>Copyright © {date.getFullYear()} krochet</Typography>
        </Grid>
    );
};

export default Footer;