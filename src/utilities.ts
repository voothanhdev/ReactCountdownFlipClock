import {TimeUnit} from "@/@type";

export const getNextDigit = (digit, unit) => {
    let result = digit + 1;

    switch (unit) {
        case TimeUnit.Months:
            return result === 12 ? 0 : result;
        case TimeUnit.Days:
            return result === 30 ? 0 : result;
        case TimeUnit.Hours:
            return result === 24 ? 0 : result;
        case TimeUnit.Minutes:
        case TimeUnit.Seconds:
            return result === 60 ? 0 : result;
        default:
            return result;
    }
};

export const convertDigitText = (digit) => {
    return digit < 10 ? `0${digit}` : `${digit}`;
};
