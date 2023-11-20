import { Box, Grid } from "@mui/material";
import Tile from "./Tile.tsx";
import React, { useEffect } from "react";
import { keyPressedUp } from "../controls/keyPressedUp.ts";
import { keyPressedDown } from "../controls/keyPressedDown.ts";
import { keyPressedLeft } from "../controls/keyPressedLeft.ts";
import { keyPressedRight } from "../controls/keyPressedRight.ts";
import { colors } from "../resources/colors.ts";
import { hasZero } from "../utils/hasZero.ts";
import { hasAdjacentEqual } from "../utils/hasAdjacentEqual.ts";
import { has2048 } from "../utils/has2048.ts";

type TileBoxPropType = {
    rows: number[][],
    win: boolean | undefined,
    gameOver: boolean | undefined,
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setWin: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}

const TileBox = ({ rows, win, gameOver, setRows, setGameOver, setWin }: TileBoxPropType) => {

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (!win && !gameOver) {
            switch (event.key) {
                case 'ArrowUp':
                    setRows(prev => keyPressedUp(prev));
                    break;
                case 'ArrowDown':
                    setRows(prev => keyPressedDown(prev));
                    break;
                case 'ArrowLeft':
                    setRows(prev => keyPressedLeft(prev));
                    break;
                case 'ArrowRight':
                    setRows(prev => keyPressedRight(prev));
                    break;
            }
        }
    }

    useEffect(() => {
        if (has2048(rows)) {
            setWin(true);
        }
        else if (!hasZero(rows) && !hasAdjacentEqual(rows)) {
            setGameOver(true);
        }
    }, [rows, setGameOver, setWin]);

    return (
        <Box
            bgcolor={colors.GRID_COL}
            p={2}
            width={430}
            borderRadius={1}
            onKeyDown={handleKeyPress}
            tabIndex={0}
            style={{ outline: 'none' }}
        >
            <Grid container spacing={2}>
                {rows.map((row, i) => (
                    <Grid key={i} item container spacing={2}>
                        {row.map((val, j) => (
                            <Grid key={`${i}-${j}`} item xs={3} md={3} lg={3}>
                                    <Tile key={`${i}-${j}`} value={val} />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TileBox;
