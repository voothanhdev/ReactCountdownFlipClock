import {TimeUnit} from "./timer.interface";

export interface ITimeLeftState {
    [TimeUnit.Years]: number;
    [TimeUnit.Months]: number;
    [TimeUnit.Days]: number;
    [TimeUnit.Hours]: number;
    [TimeUnit.Minutes]: number;
    [TimeUnit.Seconds]: number;
}