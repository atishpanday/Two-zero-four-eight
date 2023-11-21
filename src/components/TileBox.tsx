import { Box, Grid } from "@mui/material";
import Tile from "./Tile.tsx";
import React, { useEffect, useState } from "react";
import { keyPressedUp } from "../controls/keyPressedUp.ts";
import { keyPressedDown } from "../controls/keyPressedDown.ts";
import { keyPressedLeft } from "../controls/keyPressedLeft.ts";
import { keyPressedRight } from "../controls/keyPressedRight.ts";
import { colors } from "../resources/colors.ts";
import { hasZero } from "../utils/hasZero.ts";
import { hasAdjacentEqual } from "../utils/hasAdjacentEqual.ts";
import { has2048 } from "../utils/has2048.ts";
import { setNewElement } from "../controls/setNewElement.ts";
import { isArrayEqual } from "../utils/isArrayEqual.ts";

type TileBoxPropType = {
    rows: number[][],
    win: boolean | undefined,
    gameOver: boolean | undefined,
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setWin: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}

const TileBox = ({ rows, win, gameOver, setRows, setGameOver, setWin }: TileBoxPropType) => {

    const [dir, setDir] = useState<string>('');

    const [rIndex, setRIndex] = useState<number>(-1);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (!win && !gameOver) {
            switch (event.key) {
                case 'ArrowUp':
                    const newRowsUp = keyPressedUp(rows);
                    if(!isArrayEqual(rows, newRowsUp)) {
                        setDir('up');
                        const [rIndexUp, updatedRowsUp] = setNewElement(newRowsUp);
                        setRIndex(rIndexUp);
                        setRows(updatedRowsUp);
                    }
                    break;
                case 'ArrowDown':
                    const newRowsDown = keyPressedDown(rows);
                    if (!isArrayEqual(rows, newRowsDown)) {
                        setDir('down');
                        const [rIndexDown, updatedRowsDown] = setNewElement(newRowsDown);
                        setRIndex(rIndexDown);
                        setRows(updatedRowsDown);
                    }
                    break;
                case 'ArrowLeft':
                    const newRowsLeft = keyPressedLeft(rows);
                    if (!isArrayEqual(rows, newRowsLeft)) {
                        setDir('left');
                        const [rIndexLeft, updatedRowsLeft] = setNewElement(newRowsLeft);
                        setRIndex(rIndexLeft);
                        setRows(updatedRowsLeft);
                    }
                    break;
                case 'ArrowRight':
                    const newRowsRight = keyPressedRight(rows);
                    if (!isArrayEqual(rows, newRowsRight)) {
                        setDir('right');
                        const [rIndexRight, updatedRowsRight] = setNewElement(newRowsRight);
                        setRIndex(rIndexRight);
                        setRows(updatedRowsRight);
                    }
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
                                    <Tile key={`${i}-${j}`} value={val} dir={dir} row={i} col={j} rIndex={rIndex}/>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Box>
    );
};

export default TileBox;
