import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import '../sass/main.css'

const LoginDialog = ({open, handleOpen}) => {
  const styling = {
    width: '40rem',
    bgcolor: '#454a57',
    color: '#ffff',
    padding: '1.5rem',
    borderRadius: '1rem',


  }

  return (
    <main>

        <section className="sectionmodal">
            <Dialog open={open} onClose={handleOpen} >
                <Box sx={styling}>
                    <DialogTitle sx={{fontSize: '2.4rem', textAlign: 'center', fontWeight:'300'}}>                        
                        Sign in to GotyTV
                    </DialogTitle>
                    <DialogContent  
                        sx={{
                            fontSize: '1.6rem',
                            bgcolor: '#e8f0fe',
                            padding: '1rem'
                        }}>
                        <DialogContentText sx={{fontSize: '2rem', fontWeight: '300', textAlign: 'center', color: 'white'}}>
                            Just login and start streaming
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleOpen}>Cancel</Button>
                        <Button onClick={handleOpen}>Subscribe</Button>
                    </DialogActions>
                </Box>
            
        </Dialog>        
        </section>

    </main>
  );
}

export default LoginDialog;