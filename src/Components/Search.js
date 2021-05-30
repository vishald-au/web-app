import React from 'react';
import Data from '../ProductData.json'
import { useState } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Search = ({ search }) => {

  

    function filterData() {
        return Data.filter(
          (pro) => 
          pro.app.toLowerCase().includes(search.toLowerCase()) ||
          pro.version.toLowerCase().includes(search.toLowerCase()) ||
          pro.details.toLowerCase().includes(search.toLowerCase())
          
        )
      }

    return (
        <div className='area'>
            <div className='container'>
                <div className='row'>
                        
                        <div className='col-sm-12 col-md-12'>
                             
                                 
                        {filterData(Data).map(
                            pro => (
                                 
                                <List className='searchList'>
                                    <ListItem alignItems="flex-start" key={pro.id}>
                                        <ListItemAvatar>
                                        <Avatar src={pro.img} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={pro.app} 
                                        secondary={
                                            <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className='searchType'
                                                color="textPrimary"
                                            >{pro.version} - 
                                            </Typography>
                                            {pro.details}<br />
                                            
                                            </React.Fragment>
                                        }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>           
                        ))}

                             
                        </div>
                        
                </div>
            </div>                
        </div>
    )
}

export default Search
