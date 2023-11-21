import { Paper, Typography } from '@mui/material';
import React from 'react';
import { colors } from '../resources/colors.ts';
import { animated, useSpring } from 'react-spring';
import { transformTile } from '../utils/transformTile.ts';
import { setBgColor } from '../utils/setBgColor.ts';

type TileProps = {
    value: number,
    dir: string,
    row: number,
    col: number,
    rIndex: number,
}

const Tile = ({ value, dir, row, col, rIndex }: TileProps) => {

    const newTile = row === Math.floor(rIndex / 4) && col === (rIndex % 4);

    const animationStyle = useSpring({
        to: async (next) => {
            await next({ transform: newTile ? 'scale(1)' : 'translate(0, 0)' })
        },
        from: { transform: value > 0 ? transformTile(dir, row, col, rIndex, newTile) : 'translateX(0)' },
        reset: true,
    })

    const squareStyle: React.CSSProperties = {
        height: 100,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: value > 512 ? value === 1024 ? `0 0 10px 5px ${colors.SHDW_COL}` : `0 0 20px 10px ${colors.SHDW_COL}` : 'none',
        backgroundColor: setBgColor(value),
    };

    return (
        <animated.div style={animationStyle}>
            <Paper style={squareStyle}>
                <Typography
                    variant={value < 1024 ? 'h3' : 'h4'}
                    color={value < 8 ? colors.TXT_COL_DRK : colors.TXT_COL_LGT}
                    fontWeight={700}
                >
                    {value > 0 ? value : null}
                </Typography>
            </Paper>
        </animated.div>
    )
}

export default Tile;