import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { colors } from '../resources/colors.ts';
import { setBgColor } from '../utils/setBgColor.ts';
import { transformTile } from '../utils/transformTile.ts';
import { animated, useSpring } from 'react-spring';

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
        from: { transform: (value > 0) ? transformTile(dir, row, col, rIndex, newTile) : 'translateX(0)' },
        reset: true,
    })

    const gridCellStyle: React.CSSProperties = {
        height: 100,
        backgroundColor: colors.COLOR_0,
    }

    const tileStyle: React.CSSProperties = {
        height: 100,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: value > 512 ? value === 1024 ? `0 0 10px 5px ${colors.SHDW_COL}` : `0 0 20px 10px ${colors.SHDW_COL}` : 'none',
        backgroundColor: setBgColor(value),
    };

    return (
        <Box style={gridCellStyle}>
            <animated.div style={animationStyle}>
                <Paper style={tileStyle}>
                    <Typography
                        variant={value < 1024 ? 'h3' : 'h4'}
                        color={value < 8 ? colors.TXT_COL_DRK : colors.TXT_COL_LGT}
                        fontWeight={700}
                    >
                        {value > 0 ? value : null}
                    </Typography>
                </Paper>
            </animated.div>
        </Box>
    )
}

export default Tile;