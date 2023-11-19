import { Box, Grid } from "@mui/material";
import Tile from "./Tile.tsx";
import React, { useState } from "react";
import { keyPressedUp } from "../controls/keyPressedUp.ts";
import { keyPressedDown } from "../controls/keyPressedDown.ts";
import { keyPressedLeft } from "../controls/keyPressedLeft.ts";
import { keyPressedRight } from "../controls/keyPressedRight.ts";
import { getDistinctRandomNumbers } from "../utils/getDistinctRandomNumbers.ts";

type transformType = 'translateX(2px)' | 'translateX(-2px)' | 'translateY(2px)' | 'translateY(-2px)' | 'none';

const TileBox = () => {
    
    const initRows: (number[])[] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    const [init1, init2] = getDistinctRandomNumbers(0, 15);

    initRows[Math.floor(init1 / 4)][init1 % 4] = 2;
    initRows[Math.floor(init2 / 4)][init2 % 4] = 2;

    const [rows, setRows] = useState<(number[])[]>(initRows);

    const [transform, setTransform] = useState<transformType>('none');

    const handleKeyPress = (event) => {

        switch(event.key) {
            case 'ArrowUp':
                setTransform('translateY(-2px)');
                keyPressedUp(rows, setRows);
                break;
            case 'ArrowDown':
                setTransform('translateY(2px)');
                keyPressedDown(rows, setRows);
                break;
            case 'ArrowLeft':
                setTransform('translateX(-2px)');
                keyPressedLeft(rows, setRows);
                break;
            case 'ArrowRight':
                setTransform('translateX(2px)');
                keyPressedRight(rows, setRows);
                break;
        }

    }

    return (
        <Box bgcolor={"#bbada0"} p={2} width={430} borderRadius={1} onKeyDown={handleKeyPress} tabIndex={0}>
            <Grid container spacing={2}>
                {rows.map((row) => (
                    <Grid item container spacing={2}>
                        {row.map((val) => (
                            <Tile value={val} transform={transform} />
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TileBox;
