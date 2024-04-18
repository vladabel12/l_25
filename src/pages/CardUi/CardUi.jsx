import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import '/src/pages/CardUi/CardUi.scss'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  

export const CardUi = () => {
  return (
    <div className='card_ui'>
        <div className="word-card">
            <Box sx={{ maxWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            com{bull}pe{bull}ti{bull}tion
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            noun
                        </Typography>
                        <Typography variant="body2">
                            when someone is trying to win.
                            <br />
                            {'"Competition for jobs is intense"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
        <div className="word-card">
            <Box sx={{ maxWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
        <div className="word-card">
            <Box sx={{ maxWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            fa{bull}mi{bull}li{bull}ar
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            Known, recognized, usual.
                            <br />
                            {'"The street was familiar to me"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    </div>
  )
}

