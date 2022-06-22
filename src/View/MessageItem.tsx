import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { TextField, Button } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { Message } from '../Data/Message';
import { User } from '../Data/User'

const MessageItem =  () => {
    const param = useParams()
    const currentUser = { id : 1, profilePicture : "https://robohash.org/quiavitaeofficiis.png?size=50x50&set=set1"}
    const [message,setMessage] = useState('')
    const [listMessage, setListMessage] = useState(Message)
    const [isNew, setIsNew] = useState(false)
    
    useEffect(() => {
        const id :any = param.id
        const isNew = User.map(item => item.id).includes(parseInt(id))
        setIsNew(isNew)
    }, [param.id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }
    const sendMessage = () => {
        const _message = [...listMessage]
        const data = {
            content : message,
            id: _message.length + 1,
            author : {...currentUser}
        }
        _message.push(data)
        setListMessage(_message)
    }
  
    return (
    <div className="test">
        <div style={{display : 'flex'}}>
        {   
            isNew ?  
            <List sx={{ width: '100%', maxWidth: 1000 , bgcolor: 'background.paper' }}>
            {listMessage.map((value : any) => 
                <ListItem alignItems={currentUser.id === value.author.id ? 'center' :"flex-start"} key={value.id}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={value.author.profilePicture} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        </Typography>
                        {value.content}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                )}
            </List> : 
            <List sx={{ width: '100%', maxWidth: 1000 , bgcolor: 'background.paper' }}>
                <Typography align = 'center'>New Conversation</Typography> 
            </List>
        }
        </div>
        <div style={{ display : 'flex'}}>
            <TextField 
                onChange={handleChange} 
                color='primary' 
                fullWidth  
                placeholder='message'
                style={{marginRight : '12px'}}
               
            />
            <Button 
                onClick={sendMessage} 
                color='primary' 
                size='small'
                variant="contained"
            >send</Button>
        </div>
        
    </div>
  )
}

export default MessageItem