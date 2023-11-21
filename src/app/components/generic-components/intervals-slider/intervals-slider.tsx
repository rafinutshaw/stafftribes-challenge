import { useEffect, useState } from "react";
import './style.scss'

type StateProps = {
    minValue: number;
    minValue2: number;
    maxValue: number;
    maxValue2: number;
};


export default function IntervalsSlider({ min, max, value, step, onChange }: any) {
    const [state, setState] = useState<StateProps>({ minValue: value[0].min, maxValue: value[0].max, minValue2: value.length == 1 ? 0 : value[1].min, maxValue2: value.length == 1 ? 0 : value[1].max });
    const { minValue, maxValue, minValue2, maxValue2 } = state;

    useEffect(() => {
        if (value) {
            setState({ minValue: value[0].min, maxValue: value[0].max, minValue2: value.length == 1 ? 0 : value[1].min, maxValue2: value.length == 1 ? 0 : value[1].max })
        }
    }, []);

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
        newState.minValue = newMin;
        newState.maxValue = newMax;
        setState(newState)
        // onChange({ min: newMin, max: newMax });
    };

    const handleChange2 = (newMin: number, newMax: number) => {
        let newState = { ...state }
        if (newMin >= newMax && newMax < max) {
            newMax += step
        }
        if (newMax <= newMin && newMin > min) {
            newMin -= step
        }
        if (newMin <= newState.maxValue) {
            if (newState.maxValue == (min + step)) {
                return;
            }
            if ((newState.maxValue - step) == newState.minValue) {
                newState.minValue = newState.minValue - step
            }
            newState.maxValue = newState.maxValue - step
        }
        newState.minValue2 = newMin
        newState.maxValue2 = newMax
        setState(newState)
        // onChange({ min: newMin, max: newMax });
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;
    const minPos2 = ((minValue2 - min) / (max - min)) * 100;
    const maxPos2 = ((maxValue2 - min) / (max - min)) * 100;

    return (
        <div className="wrapper">
            <div className="input-wrapper">
                <input
                    className="input"
                    type="range"
                    value={minValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => handleChange(+e.target.value, maxValue)}
                />
                <input
                    className="input"
                    type="range"
                    value={maxValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => handleChange(minValue, +e.target.value)}
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

            <div className="control-wrapper">
                <div className="control" style={{ left: `${minPos}%` }} >
                    <div className="range-thumb" >{minValue}</div>
                </div>
                <div className="control" style={{ left: `${maxPos}%` }} > <div className="range-thumb" >{maxValue}</div></div>
                {(minValue2 != maxValue2) && <>  <div className="control" style={{ left: `${minPos2}%` }} > <div className="range-thumb" >{minValue2}</div></div>
                    <div className="control" style={{ left: `${maxPos2}%` }} > <div className="range-thumb" >{maxValue2}</div></div></>}


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
                    <div className="-mx-1.5">
                        <div className="flex justify-between pt-2">
                            {[...Array((max - min + 1) / step)].map((_, index) => <div className="w-3 text-center" key={index}>{(index + 1) * step}</div>)}
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};
