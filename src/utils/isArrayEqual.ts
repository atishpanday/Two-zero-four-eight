export const isArrayEqual = <T>(arr1: T[], arr2: T[]): Boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!isArrayEqual(arr1[i] as unknown[], arr2[i] as unknown[])) {
                return false;
            }
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
