import React from "react";

export interface ITimerProp extends React.ComponentPropsWithoutRef<'div'> {
    target: string;
    display?: IDisplayConfig;
    titles?: ITitleConfig;
    onComplete?: () => void;
}

interface IDisplayConfig {
    [TimeUnit.Years]?: boolean;
    [TimeUnit.Months]?: boolean;
    [TimeUnit.Days]?: boolean;
    [TimeUnit.Hours]?: boolean;
    [TimeUnit.Minutes]?: boolean;
    [TimeUnit.Seconds]?: boolean;
}

interface ITitleConfig {
    [TimeUnit.Years]?: string;
    [TimeUnit.Months]?: string;
    [TimeUnit.Days]?: string;
    [TimeUnit.Hours]?: string;
    [TimeUnit.Minutes]?: string;
    [TimeUnit.Seconds]?: string;
}

export enum TimeUnit {
    Years = 'years',
    Months = 'months',
    Days = 'days',
    Hours = 'hours',
    Minutes = 'minutes',
    Seconds = 'seconds'
}
