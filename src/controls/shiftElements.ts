export const shiftElements = (temp_col) => {
    if(temp_col[0] === temp_col[1]) {
        temp_col[0] = temp_col[0] * 2;
        temp_col[1] = temp_col[2];
        temp_col[2] = temp_col[3];
        temp_col[3] = 0;
        if(temp_col[1] === temp_col[2]) {
            temp_col[1] = temp_col[1] * 2;
            temp_col[2] = 0;
        }
    } 
    else if(temp_col[1] === temp_col[2]) {
        temp_col[1] = temp_col[1] * 2;
        temp_col[2] = temp_col[3];
        temp_col[3] = 0;
    }
    else if(temp_col[2] === temp_col[3]) {
        temp_col[2] = temp_col[2] * 2;
        temp_col[3] = 0;
    }
}