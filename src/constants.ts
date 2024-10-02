import {ITimeLeftState, TimeUnit} from "./@type";

export const DEFAULT_TIME_LEFT: ITimeLeftState = {
    [TimeUnit.Years]: 0,
    [TimeUnit.Months]: 0,
    [TimeUnit.Days]: 0,
    [TimeUnit.Hours]: 0,
    [TimeUnit.Minutes]: 0,
    [TimeUnit.Seconds]: 0,
};

export const DEFAULT_SHUFFLE = {
    [TimeUnit.Years]: true,
    [TimeUnit.Months]: true,
    [TimeUnit.Days]: true,
    [TimeUnit.Hours]: true,
    [TimeUnit.Minutes]: true,
    [TimeUnit.Seconds]: true,
};

export const DEFAULT_TITLE = {
    [TimeUnit.Years]: 'Years',
    [TimeUnit.Months]: 'Months',
    [TimeUnit.Days]: 'Days',
    [TimeUnit.Hours]: 'Hours',
    [TimeUnit.Minutes]: 'Minutes',
    [TimeUnit.Seconds]: 'Seconds',
};
