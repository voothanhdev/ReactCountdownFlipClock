import {TimeUnit} from "@app/@type/timer.interface";

export interface IShuffleState {
    [TimeUnit.Years]: boolean;
    [TimeUnit.Months]: boolean;
    [TimeUnit.Days]: boolean;
    [TimeUnit.Hours]: boolean;
    [TimeUnit.Minutes]: boolean;
    [TimeUnit.Seconds]: boolean;
}