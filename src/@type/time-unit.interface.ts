import React from "react";
import { TimeUnit } from '@app/@type/timer.interface';

export interface ITimeUnit extends React.ComponentPropsWithoutRef<'div'> {
    digit: number;
    shuffle: boolean;
    unit: TimeUnit;
    title?: string;
}
