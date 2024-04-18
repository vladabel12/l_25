import { Menu } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '/src/pages/HeaderUi/HeaderUI.scss'
export const HeaderUi = () => {
  return (
    <div className='header_ui'>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#483a4f' }}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Languages
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

