import { Alert, Box, Snackbar } from "@mui/material";
import TileBox from "./components/TileBox.tsx";
import HeadBoard from "./components/HeadBoard.tsx";
import React, { useState } from "react";
import { getDistinctRandomNumbers } from "./utils/getDistinctRandomNumbers.ts";

function App() {

  const initRows: (number[])[] = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

  const [init1, init2] = getDistinctRandomNumbers(0, 15);

  initRows[Math.floor(init1 / 4)][init1 % 4] = 2;
  initRows[Math.floor(init2 / 4)][init2 % 4] = 2;

  const [rows, setRows] = useState<number[][]>(initRows);

  const [gameOver, setGameOver] = useState<boolean | undefined>(false);

  const [win, setWin] = useState<boolean | undefined>(false);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
      <HeadBoard setRows={setRows} />
      <TileBox rows={rows} setRows={setRows} setGameOver={setGameOver} setWin={setWin}/>
      <Snackbar
        open={win}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={"success"} onClose={() => setWin(false)}>
          Congratulations! You won!
        </Alert>
      </Snackbar>
      <Snackbar
        open={gameOver}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setGameOver(false)}>
          Game Over!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default App;
