import React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import { colors } from '../resources/colors.ts';
import { getDistinctRandomNumbers } from '../utils/getDistinctRandomNumbers.ts';

type HeadBoardPropType = {
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
}

const HeadBoard = ({ setRows }: HeadBoardPropType) => {

    const startNewGame = () => {
        const initRows: (number[])[] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

        const [init1, init2] = getDistinctRandomNumbers(0, 15);
      
        initRows[Math.floor(init1 / 4)][init1 % 4] = 2;
        initRows[Math.floor(init2 / 4)][init2 % 4] = 2;

        setRows(initRows);
    }
    
    return (
        <Box width={430} p={2}>
            <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                    <Typography fontSize={40} fontWeight={700} color={colors.COLOR_2048_LOGO}>2048</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    <div>
                        <Button 
                            variant='contained' 
                            style={{ backgroundColor: colors.NEW_GAME_COL, color: colors.TXT_COL_LGT }} 
                            onClick={() => startNewGame()}
                            >
                            New Game
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HeadBoard;