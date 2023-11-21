import { useEffect, useState } from "react";
import './style.scss'

export default function IntervalsSlider({ min, max, value, step, onChange }: any) {
    const [minValue, setMinValue] = useState(value ? value.min : min);
    const [maxValue, setMaxValue] = useState(value ? value.max : max);

    useEffect(() => {
        if (value) {
            setMinValue(value.min);
            setMaxValue(value.max);
        }
    }, [value]);

    const handleChange = (newMin: number, newMax: number) => {
        if (newMin >= newMax && newMax != max) {
            newMax += 5
        }
        if (newMax <= newMin && newMin != min) {
            newMin -= 5
        }
        setMinValue(newMin)
        setMaxValue(newMax)
        onChange({ min: newMin, max: newMax });
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

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
            </div>

            <div className="control-wrapper">
                <div className="control" style={{ left: `${minPos}%` }} />
                <div className="rail">
                    <div
                        className="inner-rail"
                        style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                    />
                </div>
                <div className="control" style={{ left: `${maxPos}%` }} />
            </div>
        </div>
    );
};
