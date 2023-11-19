import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { colors } from '../resources/colors.ts';

type TileProps = {
    value: number,
}

const setBgColor = (value: number): string => {
        switch(value) {
            case 0:
                return colors.COLOR_0;
            case 2:
                return colors.COLOR_2;
            case 4:
                return colors.COLOR_4;
            case 8:
                return colors.COLOR_8;
            case 16:
                return colors.COLOR_16;
            case 32:
                return colors.COLOR_32;
            case 64:
                return colors.COLOR_64;
            case 128:
                return colors.COLOR_128;
            case 256:
                return colors.COLOR_256;
            case 512:
                return colors.COLOR_512;
            case 1024:
                return colors.COLOR_512;
            case 2048:
                return colors.COLOR_512;
            default:
                return '';
        }
}

const Tile = ({ value } : TileProps) => {

    const squareStyle: React.CSSProperties = {
        height: 100,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: value > 512 ? value === 1024 ? '0 0 10px 5px rgba(243, 215, 116)' : '0 0 20px 10px rgba(243, 215, 116)' : 'none',
        backgroundColor: setBgColor(value),
    };

    return (
        <Grid item xs={3} md={3} lg={3}>
            <Paper style={squareStyle}>
                <Typography fontSize={40} color={value < 8 ? colors.TXT_COL_DRK : colors.TXT_COL_LGT} fontWeight={700}>
                    {value > 0 ? value : null}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Tile;