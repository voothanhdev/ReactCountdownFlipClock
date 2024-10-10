import React, { FC, useEffect, useRef, useState } from 'react';
import { IShuffleState, ITimeLeftState, ITimerProp, TimeUnit } from '@app/@type';
import { DEFAULT_SHUFFLE, DEFAULT_TIME_LEFT, DEFAULT_TITLE } from '@app/constants';
import { FlipUnitContainer } from '@app/molecules';
import '../style.scss';

export const Timer: FC<ITimerProp> = ({
    target,
    display,
    titles,
    onComplete,
    ...attributes
}) => {
    const [timeLeft, setTimeLeft] = useState<ITimeLeftState>(DEFAULT_TIME_LEFT);
    const [shuffle, setShuffle] = useState<IShuffleState>(DEFAULT_SHUFFLE);
    const timeRef = useRef<ITimeLeftState>(DEFAULT_TIME_LEFT);
    const timerRef = useRef(0);

    const calculateTimeLeft = (): ITimeLeftState => {
        const diff: number = (new Date(target)).getTime() - (new Date()).getTime();

        if (diff > 0) {
            return {
                [TimeUnit.Years]: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
                [TimeUnit.Months]: Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
                [TimeUnit.Days]: Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
                [TimeUnit.Hours]: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                [TimeUnit.Minutes]: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                [TimeUnit.Seconds]: Math.floor((diff % (1000 * 60)) / 1000),
            };
        } else {
            return DEFAULT_TIME_LEFT;
        }
    };

    const updateTimeLeft = () => {
        const newTime = calculateTimeLeft();
        const newShuffle = { ...shuffle };

        if (newTime === DEFAULT_TIME_LEFT) {
            if (onComplete) {
                onComplete();
            }

            timeRef.current = newTime;
            setTimeLeft(prev => newTime);
            clearTimer();

            return;
        }

        if (newTime[TimeUnit.Years] !== timeRef.current[TimeUnit.Years]) {
            newShuffle[TimeUnit.Years] = !shuffle[TimeUnit.Years];
        }

        if (newTime[TimeUnit.Months] !== timeRef.current[TimeUnit.Months]) {
            newShuffle[TimeUnit.Months] = !shuffle[TimeUnit.Months];
        }

        if (newTime[TimeUnit.Days] !== timeRef.current[TimeUnit.Days]) {
            newShuffle[TimeUnit.Days] = !shuffle[TimeUnit.Days];
        }

        if (newTime[TimeUnit.Hours] !== timeRef.current[TimeUnit.Hours]) {
            newShuffle[TimeUnit.Hours] = !shuffle[TimeUnit.Hours];
        }

        if (newTime[TimeUnit.Minutes] !== timeRef.current[TimeUnit.Minutes]) {
            newShuffle[TimeUnit.Minutes] = !shuffle[TimeUnit.Minutes];
        }

        if (newTime[TimeUnit.Seconds] !== timeRef.current[TimeUnit.Seconds]) {
            newShuffle[TimeUnit.Seconds] = !shuffle[TimeUnit.Seconds];
        }

        timeRef.current = newTime;
        setShuffle(prev => newShuffle);
        setTimeLeft(prev => newTime);
    };

    const isDisplay = (unit: TimeUnit): boolean => {
        if (display && display.hasOwnProperty(unit)) {
            return display[unit] as boolean;
        }

        return timeLeft[unit] > 0;
    };

    const renderUnit = (unit: TimeUnit) => {
        if (!isDisplay(unit)) {
            return <></>
        }

        return (
            <FlipUnitContainer
                title={titles ? titles[unit] : DEFAULT_TITLE[unit]}
                unit={unit}
                digit={timeLeft[unit]}
                shuffle={shuffle[unit]}
            />
        );
    };

    const clearTimer = () => {
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        titles = { ...DEFAULT_TITLE, ...titles };
        updateTimeLeft();
    }, []);

    useEffect(() => {
        timerRef.current = window.setInterval(updateTimeLeft, 50);

        return () => clearTimer();
    }, [target]);

    return (
        <div className={'countdown-flip-clock'} {...attributes}>
            <div className={'countdown-wrapper'}>
                <div className={'countdown-container date'}>
                    {renderUnit(TimeUnit.Years)}
                    {renderUnit(TimeUnit.Months)}
                    {renderUnit(TimeUnit.Days)}
                </div>
                <div className={'countdown-container time'}>
                    {renderUnit(TimeUnit.Hours)}
                    {renderUnit(TimeUnit.Minutes)}
                    {renderUnit(TimeUnit.Seconds)}
                </div>
            </div>
        </div>
    );
};