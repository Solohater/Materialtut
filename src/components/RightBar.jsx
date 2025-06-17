import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box flex='2' p={2} sx={{display:{xs:'none', sm:'block'}}}>
      <Box position='fixed' width={300} mt={2} mb={2}>
        <Typography variant='h6' fontWeight={300}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="HumbleG" src="/d.jpg" />
          <Avatar alt="CoolD" src="/t.jpg" />
          <Avatar alt="ChillD" src="/p2.jpg" />
          <Avatar alt="miky" src="/m.jpg" />
          <Avatar alt="Soloreader" src="/j.jpg" />
          <Avatar alt="ChillD" src="/b.jpg" />
          <Avatar alt="miky" src="/go.jpg" />
          <Avatar alt="Soloreader" src="/d2.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100}>
          Anime Recommendations
        </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem><img src='/blue.jpg' alt="blue" /></ImageListItem>
            <ImageListItem><img src='/Demo.jpg' alt="demo" /></ImageListItem>
            <ImageListItem><img src='/Hero.jpg' alt="hero" /></ImageListItem>
          </ImageList>
        
        <Typography variant='h6' fontWeight={100}>
          Latest Convo
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/g.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/m.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/t.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default RightBar