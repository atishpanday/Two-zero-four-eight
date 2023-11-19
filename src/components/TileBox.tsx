import { Box, Grid } from "@mui/material";
import Tile from "./Tile.tsx";
import React, { useState } from "react";
import { keyPressedUp } from "../controls/keyPressedUp.ts";
import { keyPressedDown } from "../controls/keyPressedDown.ts";
import { keyPressedLeft } from "../controls/keyPressedLeft.ts";
import { keyPressedRight } from "../controls/keyPressedRight.ts";

const TileBox = () => {
    const row1: number[] = [2, 0, 0, 0];
    const row2: number[] = [0, 0, 2, 0];
    const row3: number[] = [0, 0, 0, 0];
    const row4: number[] = [0, 0, 0, 0];

    const [rows, setRows] = useState<(number[])[]>([row1, row2, row3, row4]);

    const handleKeyPress = (event) => {

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

    }

    return (
        <Box bgcolor={"#bbada0"} p={1} width={420} borderRadius={1} onKeyDown={handleKeyPress} tabIndex={0}>
            <Grid container spacing={1}>
                {rows.map((row) => (
                    <Grid item container spacing={1}>
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
