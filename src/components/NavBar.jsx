'use client'
import { CrueltyFree, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({theme}) => ({
  display:'none', gap:'20px', alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'flex'
  }
}))
const MobileBox = styled(Box)(({theme}) => ({
  display:'flex', gap:'10px', alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }
}))
const NavBar = () => {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>
          JODEV
        </Typography>
        <CrueltyFree sx={{display:{xs:'block', sm:'none'}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail/>
          </Badge>
          <Badge badgeContent={6} color='error'>
            <Notifications/>
          </Badge>
          <Avatar sx={{widows:20, height:30}} src='/p.jpg' onClick={e=>setOpen(true)} />
        </Icons>
        <MobileBox onClick={e=>setOpen(true)}>
           <Avatar sx={{widows:20, height:30}} src='/p.jpg'/>
           <Typography variant='span'>Josi</Typography>
        </MobileBox>
      </StyledToolBar>
       <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        
    </AppBar>
  )
}

export default NavBar