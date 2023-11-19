export const chooseNewNumber = () => {
    let p = Math.random();

    if(p < 0.8) {
        return 2;
    }
    else {
        return 4;
    }
}