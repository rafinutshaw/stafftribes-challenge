import { useEffect, useState } from "react";
import './style.scss'

export default function IntervalsSlider({ min, max, value, step, onChange }: any) {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(30);
    const [minValue2, setMinValue2] = useState(60);
    const [maxValue2, setMaxValue2] = useState(90);

    useEffect(() => {
        if (value) {
            setMinValue(0);
            setMaxValue(30);
            setMinValue2(60);
            setMaxValue2(90);
        }
    }, []);

    const handleChange = (newMin: number, newMax: number) => {
        if (newMin >= newMax && newMax < max) {
            newMax += 5
        }
        if (newMax <= newMin && newMin > min) {
            newMin -= 5
        }

        setMinValue(newMin)
        setMaxValue(newMax)
        onChange({ min: newMin, max: newMax });
    };

    const handleChange2 = (newMin: number, newMax: number) => {
        if (newMin >= newMax && newMax < max) {
            newMax += 5
        }
        if (newMax <= newMin && newMin > min) {
            newMin -= 5
        }

        setMinValue2(newMin)
        setMaxValue2(newMax)
        onChange({ min: newMin, max: newMax });
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
                <input
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
                />
            </div>

            <div className="control-wrapper">
                <div className="control" style={{ left: `${minPos}%` }} />
                <div className="control" style={{ left: `${minPos2}%` }} />
                <div className="rail">
                    <div
                        className="inner-rail"
                        style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                    />
                    <div
                        className="inner-rail"
                        style={{ left: `${minPos2}%`, right: `${100 - maxPos2}%` }}
                    />
                </div>
                <div className="control" style={{ left: `${maxPos}%` }} />
                <div className="control" style={{ left: `${maxPos2}%` }} />

            </div>
        </div>
    );
};
