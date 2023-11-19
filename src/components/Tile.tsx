import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

type TileProps = {
    value: number,
    transform: string,
}

const setBgColor = (value) => {
        switch(value) {
            case 0:
                return 'rgba(238, 228, 218, 0.35)';
            case 2:
                return '#eee4da';
            case 4:
                return '#eee1c9';
            case 8:
                return '#f3b27a';
            case 16:
                return '#f69664';
            case 32:
                return '#f77c5f';
            case 64:
                return '#f75f3b';
            case 128:
                return '#edd073';
            case 256:
                return '#edcc62';
            case 512:
                return '#edc950';
            case 1024:
                return '#edc950';
            case 2048:
                return '#edc950';
        }
}

const Tile = ({ value, transform } : TileProps) => {

    const squareStyle: React.CSSProperties = {
        height: 100,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: value > 512 ? value === 1024 ? '0 0 10px 5px rgba(243, 215, 116)' : '0 0 20px 10px rgba(243, 215, 116)' : 'none',
        backgroundColor: setBgColor(value),
        transition: value > 0 ? 'transform 0.3s ease-in' : 'none',
        transform: transform,
    };

    return (
        <Grid item xs={3} md={3} lg={3}>
            <Paper style={squareStyle}>
                <Typography fontSize={40} color={value < 8 ? '#776e65' : '#f9f6f2'} fontWeight={700}>
                    {value > 0 ? value : null}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Tile;