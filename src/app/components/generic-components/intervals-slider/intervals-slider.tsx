import { useEffect, useState } from "react";
import { IntervalProps, IntervalsSliderProps } from "./intervals-slider.types";
import './style.scss';

export default function IntervalsSlider({ min, max, value, step, onChange, disabled = false }: IntervalsSliderProps) {
    const [state, setState] = useState<IntervalProps>(value);
    const { minValue1, maxValue1, minValue2 = 0, maxValue2 = 0 } = state;

    useEffect(() => {
        setState(value)
    }, [value])

    const handleChange = (newMin: number, newMax: number) => {
        let newState = { ...state }
        if (newMin >= newMax && newMax < max) {
            newMax += step
        }
        if (newMax <= newMin && newMin > min) {
            newMin -= step
        }
        if (maxValue2 != minValue2 && newMax >= minValue2) {
            if (minValue2 == (max - step)) {
                return;
            }
            if ((maxValue2 - step) == minValue2) {
                newState.maxValue2 = maxValue2 + step
            }
            newState.minValue2 = minValue2 + step
        }
        newState.minValue1 = newMin;
        newState.maxValue1 = newMax;
        setState(newState)
        onChange(newState)
    };

    const handleChange2 = (newMin: number, newMax: number) => {
        let newState = { ...state }
        if (newMin >= newMax && newMax < max) {
            newMax += step
        }
        if (newMax <= newMin && newMin > min) {
            newMin -= step
        }
        if (newMin <= newState.maxValue1) {
            if (newState.maxValue1 == (min + step)) {
                return;
            }
            if ((newState.maxValue1 - step) == newState.minValue1) {
                newState.minValue1 = newState.minValue1 - step
            }
            newState.maxValue1 = newState.maxValue1 - step
        }
        newState.minValue2 = newMin
        newState.maxValue2 = newMax
        setState(newState)
        onChange(newState)
    };

    const minPos = ((minValue1 - min) / (max - min)) * 100;
    const maxPos = ((maxValue1 - min) / (max - min)) * 100;
    const minPos2 = ((minValue2 - min) / (max - min)) * 100;
    const maxPos2 = ((maxValue2 - min) / (max - min)) * 100;

    return (
        <div className="wrapper w-full">
            <div className="input-wrapper">
                <input
                    className="input"
                    type="range"
                    value={minValue1}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => handleChange(+e.target.value, maxValue1)}
                />
                <input
                    className="input"
                    type="range"
                    value={maxValue1}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => handleChange(minValue1, +e.target.value)}
                />
                {(minValue2 != maxValue2) && <> <input
                    className="input"
                    type="range"
                    value={minValue2}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => handleChange2(+e.target.value, maxValue2)}
                />
                    <input
                        className="input"
                        type="range"
                        value={maxValue2}
                        min={min}
                        max={max}
                        step={step}
                        onChange={(e) => handleChange2(minValue2, +e.target.value)}
                    /></>}
            </div>

            <div className={`control-wrapper ${disabled ? 'disabled' : ''}`}>
                <div className="control" style={{ left: `${minPos}%` }} >
                    <div className="thumb" >{minValue1}</div>
                </div>
                <div className="control" style={{ left: `${maxPos}%` }} > <div className="thumb" >{maxValue1}</div></div>
                {(minValue2 != maxValue2) && <>  <div className="control" style={{ left: `${minPos2}%` }} > <div className="thumb" >{minValue2}</div></div>
                    <div className="control" style={{ left: `${maxPos2}%` }} > <div className="thumb" >{maxValue2}</div></div></>}


                <div className="rail">
                    <div
                        className="inner-rail"
                        style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                    />
                    {(minValue2 != maxValue2) &&
                        <div
                            className="inner-rail"
                            style={{ left: `${minPos2}%`, right: `${100 - maxPos2}%` }}
                        />}
                    <div className="-mx-5">
                        <div className="flex justify-between pt-2">
                            {[...Array((max - min + 1) / step)].map((_, index) => <div className="w-10 text-center text-gray-400 text-sm whitespace-nowrap" key={index}>Day {(index + 1) * step}</div>)}
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};
