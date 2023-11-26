import { Box, Grid } from "@mui/material";
import Tile from "./Tile.tsx";
import React, { useEffect, useState } from "react";
import { colors } from "../resources/colors.ts";
import { hasZero } from "../utils/hasZero.ts";
import { hasAdjacentEqual } from "../utils/hasAdjacentEqual.ts";
import { has2048 } from "../utils/has2048.ts";
import { handleTransition } from "../controls/handleTransition.ts";
import { keyPressedUp } from "../controls/keyPressedUp.ts";
import { isArrayEqual } from "../utils/isArrayEqual.ts";
import { keyPressedDown } from "../controls/keyPressedDown.ts";
import { setNewElement } from "../controls/setNewElement.ts";
import { keyPressedLeft } from "../controls/keyPressedLeft.ts";
import { keyPressedRight } from "../controls/keyPressedRight.ts";

type TileBoxPropType = {
    rows: number[][],
    win: boolean | undefined,
    gameOver: boolean | undefined,
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setWin: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}

const Board = ({ rows, win, gameOver, setRows, setGameOver, setWin }: TileBoxPropType) => {

    const [transitionMatrix, setTransitionMatrix] = useState<number[][]>([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);

    const [dir, setDir] = useState<string>('');

    const [rIndex, setRIndex] = useState<number>(-1);

    const handleMatrixUpdate = (event: React.KeyboardEvent<HTMLDivElement>) => {

        switch (event.key) {
            case 'ArrowUp':
                const newRowsUp = keyPressedUp(rows);
                if (!isArrayEqual(rows, newRowsUp)) {
                    setDir(event.key);
                    const [rIndexUp, updatedRowsUp] = setNewElement(newRowsUp);
                    setRIndex(rIndexUp);
                    setRows(updatedRowsUp);
                }
                break;
            case 'ArrowDown':
                const newRowsDown = keyPressedDown(rows);
                if (!isArrayEqual(rows, newRowsDown)) {
                    setDir(event.key);
                    const [rIndexDown, updatedRowsDown] = setNewElement(newRowsDown);
                    setRIndex(rIndexDown);
                    setRows(updatedRowsDown);
                }
                break;
            case 'ArrowLeft':
                const newRowsLeft = keyPressedLeft(rows);
                if (!isArrayEqual(rows, newRowsLeft)) {
                    setDir(event.key);
                    const [rIndexLeft, updatedRowsLeft] = setNewElement(newRowsLeft);
                    setRIndex(rIndexLeft);
                    setRows(updatedRowsLeft);
                }
                break;
            case 'ArrowRight':
                const newRowsRight = keyPressedRight(rows);
                if (!isArrayEqual(rows, newRowsRight)) {
                    setDir(event.key);
                    const [rIndexRight, updatedRowsRight] = setNewElement(newRowsRight);
                    setRIndex(rIndexRight);
                    setRows(updatedRowsRight);
                }
                break;
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const newTransitionMatrix = handleTransition(rows, event.key);
        setTransitionMatrix(newTransitionMatrix);
        handleMatrixUpdate(event);
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
            p={1}
            borderRadius={1}
            onKeyDown={(event) => !win && !gameOver && handleKeyPress(event)}
            tabIndex={0}
            style={{ outline: 'none' }}
        >
            {rows.map((row, i) => (
                <Grid key={i} container spacing={2} p={1}>
                    {row.map((val, j) => (
                        <Grid key={`${i}-${j}`} item xs={3}>
                            <Tile
                                key={`${i}-${j}`}
                                value={val}
                                trVal={transitionMatrix[i][j]}
                                dir={dir}
                                row={i}
                                col={j}
                                rIndex={rIndex}
                            />
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Box>
    );
};

export default Board;
