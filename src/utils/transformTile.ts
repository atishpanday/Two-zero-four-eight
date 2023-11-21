export const transformTile = (dir: string, row: number, col: number, rIndex: number, newTile: boolean): string => {
    if(newTile) {
        return 'scale(0)';
    }
    else {
        switch(dir) {
            case 'up':
                return `translateY(${(3 - row) * 50}px)`;
            case 'down':
                return `translateY(-${row * 50}px)`;
            case 'left':
                return `translateX(${(3 - col) * 50}px)`;
            case 'right':
                return `translateX(-${col * 50}px)`;
            default:
                return 'translate(0)';
        }
    }
}