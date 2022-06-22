import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { List, ListItem, Typography } from '@mui/material';

const New = () => {
    const API_KEY = '1fc44b6690e1459d927e8879ca979df2';
    const baseUrl = 'https://newsapi.org/v2/top-headlines';


    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNewsList();
    }, []);

    const getNewsList = async () => {
        const url = `${baseUrl}?country=us&apiKey=${API_KEY}`;
        const res: any = await axios.get(url);

        res && res.status === 200 && setNewsList(res.data.articles);
    };



  return (
    <>
    <List sx={{ width: '100%', maxWidth: 1000 , bgcolor: 'background.paper' }}>
    {newsList.map((value : any) => 
        <ListItem  key={value.id} style={{ display : 'flex', flexDirection : 'column' }}>
            <div style={{ display : 'flex', justifyContent: 'space-evenly'}} >
                <img  style={{width : 200, height : 200, marginRight : 20}} alt="Remy Sharp" src={value.urlToImage} />
                <div>
                    <Typography variant="h4">{value.title}</Typography>
                    <p>{value.description}</p>
                    <p>{value.content}</p>
                    <p>{value.author}</p>
                </div> 
            </div>  
        </ListItem>
        )}
    </List>
    </>
  )
}

export default New