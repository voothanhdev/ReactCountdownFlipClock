import React, { FC } from 'react';
import { convertDigitText, getNextDigit } from '@/utilities';
import { ITimeUnit } from '@/@type/time-unit.interface';

export const FlipUnitContainer: FC<ITimeUnit> = ({ digit, shuffle, unit, title, ...attributes }) => {
    const digitTxt = convertDigitText(digit);
    const nextDigitTxt = convertDigitText(getNextDigit(digit, unit));

    return (
        <div className={`flip-unit-container ${unit}`} {...attributes}>
            {title && <span className={'flip-title'}>{title}</span>}
            <div className={'digit-group'}>
                <div className={'static-card upper'}>
                    <span>{digitTxt}</span>
                </div>
                <div className={'static-card lower'}>
                    <span>{nextDigitTxt}</span>
                </div>
                {shuffle ? (<>
                    <div className={'animation-card flip-fold'}>
                        <span>{nextDigitTxt}</span>
                    </div>
                    <div className={'animation-card flip-unfold'}>
                        <span>{digitTxt}</span>
                    </div>
                </>) : (<>
                    <div className={'animation-card flip-unfold'}>
                        <span>{digitTxt}</span>
                    </div>
                    <div className={'animation-card flip-fold'}>
                        <span>{nextDigitTxt}</span>
                    </div>
                </>)}
            </div>
        </div>
    );
};