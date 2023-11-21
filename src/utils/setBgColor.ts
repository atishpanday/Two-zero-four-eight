import { colors } from "../resources/colors.ts";

export const setBgColor = (value: number): string => {
    switch (value) {
        case 0:
            return colors.COLOR_0;
        case 2:
            return colors.COLOR_2;
        case 4:
            return colors.COLOR_4;
        case 8:
            return colors.COLOR_8;
        case 16:
            return colors.COLOR_16;
        case 32:
            return colors.COLOR_32;
        case 64:
            return colors.COLOR_64;
        case 128:
            return colors.COLOR_128;
        case 256:
            return colors.COLOR_256;
        case 512:
            return colors.COLOR_512;
        case 1024:
            return colors.COLOR_512;
        case 2048:
            return colors.COLOR_512;
        default:
            return '';
    }
}