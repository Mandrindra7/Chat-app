import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//import  AddIcon from '@material-ui/icons-material/Add';

import { newConversation, User } from '../Data/User';
import { Autocomplete, TextField } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFF',
    border: '1px solid #000',
    borderRadius : 4,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'

  };


const Message: React.FC = () => {
    const [user, setUser] = useState(User)
    const [newUser,setNewUser] = useState({ id : null , name :'', imageUrl : ''})
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    const addUser = () => {
        const _temp = [...user]
        _temp.unshift(newUser)
        setUser(_temp)
        setOpen(false)
        navigate(`/${newUser.id}`)
    }

    const handleChange = (e :any, values :any) =>  {

        let user = { ...newUser}
        const {label , ...rest} = values

        user = {...rest}
        user.id = values.id + 5
        user.name = values.label

        setNewUser(user)
    }

    


  return (
    <div style={{display : 'block'}}>
    <Button onClick={() => setOpen(true)}>Add</Button>
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {user.map((value: any) => {
        return (
          <ListItem
            key={value.id}
            disablePadding
            onClick={() => navigate(`/${value.id}`)}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.id}`}
                  src={value.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText id={value.id} primary={value.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                New Conversation
            </Typography>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={handleChange}
                options={newConversation}
                sx={{ width: 400, marginBlock : 2 }}
                renderInput={(params) => <TextField {...params} label="user" />}
            />
            <Button onClick={addUser} color="primary" variant="contained" size='medium'>Add</Button>
        </Box>
    </Modal>

    </div>
    
  );
}


export default Message