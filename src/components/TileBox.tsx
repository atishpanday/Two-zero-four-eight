import { Box, Grid } from "@mui/material";
import Tile from "./Tile.tsx";
import React from "react";
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
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
    setGameOver: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    setWin: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}

const TileBox = ({ rows, setRows, setGameOver, setWin }: TileBoxPropType) => {

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        switch(event.key) {
            case 'ArrowUp':
                keyPressedUp(rows, setRows);
                break;
            case 'ArrowDown':
                keyPressedDown(rows, setRows);
                break;
            case 'ArrowLeft':
                keyPressedLeft(rows, setRows);
                break;
            case 'ArrowRight':
                keyPressedRight(rows, setRows);
                break;
        }

        if(has2048(rows)) {
            setWin(true);
        }

        if(!hasZero(rows) && !hasAdjacentEqual(rows)) {
            setGameOver(true);
        }
    }

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
                {rows.map((row) => (
                    <Grid item container spacing={2}>
                        {row.map((val) => (
                            <Tile value={val} />
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TileBox;
