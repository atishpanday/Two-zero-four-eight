import { Alert, Box, Snackbar } from "@mui/material";
import HeadBoard from "./components/HeadBoard.tsx";
import React, { useState } from "react";
import { startNewGame } from "./controls/startNewGame.ts";
import Board from "./components/Board.tsx";

const Game = () => {
    const [rows, setRows] = useState<number[][]>(startNewGame());

    const [gameOver, setGameOver] = useState<boolean | undefined>(false);

    const [win, setWin] = useState<boolean | undefined>(false);

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100vh"}
        >
            <HeadBoard win={win} gameOver={gameOver} setRows={setRows} />
            <Board
                rows={rows}
                win={win}
                gameOver={gameOver}
                setRows={setRows}
                setGameOver={setGameOver}
                setWin={setWin}
            />
            <Snackbar
                open={win}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert severity={"success"} onClose={() => setWin(false)}>
                    Congratulations! You won!
                </Alert>
            </Snackbar>
            <Snackbar
                open={gameOver}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert severity="error" onClose={() => setGameOver(false)}>
                    Game Over!
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default Game;
