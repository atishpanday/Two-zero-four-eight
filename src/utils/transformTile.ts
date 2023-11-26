export const transformTile = (dir: string, transitionVal: number, newTile: boolean): string => {
    if (newTile) {
        return 'scale(0)';
    }
    else {
        switch (dir) {
            case 'ArrowUp':
                return `translateY(${transitionVal * 100}px)`;
            case 'ArrowDown':
                return `translateY(-${transitionVal * 100}px)`;
            case 'ArrowLeft':
                return `translateX(${transitionVal * 100}px)`;
            case 'ArrowRight':
                return `translateX(-${transitionVal * 100}px)`;
            default:
                return 'translate(0)';
        }
    }
}