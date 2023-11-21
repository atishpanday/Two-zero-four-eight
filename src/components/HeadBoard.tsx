import React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import { colors } from '../resources/colors.ts';
import { startNewGame } from '../controls/startNewGame.ts';

type HeadBoardPropType = {
    win: boolean | undefined,
    gameOver: boolean | undefined,
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
}

const HeadBoard = ({ win, gameOver, setRows }: HeadBoardPropType) => {
    
    return (
        <Box width={430} p={2}>
            <Grid container>
                <Grid item xs={6} md={6} lg={6}>
                    <Typography variant={'h3'} fontWeight={700} color={colors.COLOR_2048_LOGO}>2048</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    <div>
                        <Button 
                            variant='contained' 
                            style={{ backgroundColor: colors.NEW_GAME_COL, color: colors.TXT_COL_LGT }} 
                            disabled={win || gameOver}
                            onClick={() => setRows(startNewGame())}
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