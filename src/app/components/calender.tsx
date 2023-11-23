import { useEffect, useState } from "react";
import IntervalsSlider from "./generic-components/intervals-slider/intervals-slider";
import { IntervalProps } from "./generic-components/intervals-slider/intervals-slider.types";
import { Controller, useForm } from "react-hook-form";
import { getMyAvailability, updateMyAvailability } from "../service/app-service";
import { AvailabilityType } from "../types/shared.types";

export default function Calender(props: any) {
    const { myAvailability, onUpdate } = props
    const defaultValues: AvailabilityType[] = [
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
        { minValue1: 1, maxValue1: 7, minValue2: 0, maxValue2: 0, enabled: true },
    ];
    const methods = useForm({
        defaultValues: {
            week: { value: defaultValues }
        }
    });

    const { register, getValues, setValue, control, watch, handleSubmit, formState: { isDirty }, reset } = methods
    const formValues = watch()
    useEffect(() => {
        console.log(myAvailability)
        if (myAvailability.length > 0)
            populateAvailability()
    }, [myAvailability])

    const populateAvailability = () => {
        console.log(myAvailability)
        setValue('week.value', myAvailability)

    }

    const onSubmit = (data: any) => {
        onUpdate(data.week.value)
        reset(data)
    };

    const onSliderUpdate = (updatedValue: IntervalProps, currentValue: any, weekIndex: number) => {
        currentValue[weekIndex].maxValue1 = updatedValue.maxValue1;
        currentValue[weekIndex].maxValue2 = updatedValue.maxValue2;
        currentValue[weekIndex].minValue1 = updatedValue.minValue1;
        currentValue[weekIndex].minValue2 = updatedValue.minValue2;
        return currentValue;
    }

    const addOrRemoveInterval = (weekIndex: number) => {
        const values = { ...formValues }
        if (formValues.week.value[weekIndex].maxValue2 != formValues.week.value[weekIndex].minValue2) {
            values.week.value[weekIndex].maxValue2 = 0
            values.week.value[weekIndex].minValue2 = 0
        } else {
            values.week.value[weekIndex].minValue2 = 6
            values.week.value[weekIndex].maxValue2 = 7
            if (values.week.value[weekIndex].maxValue1 >= 6)
                values.week.value[weekIndex].maxValue1 = 5
            if (values.week.value[weekIndex].minValue1 >= 5)
                values.week.value[weekIndex].minValue1 = 4
        }
        setValue('week.value', values.week.value, { shouldDirty: true });
    }

    return (
        <div className="p-4 app-section">
            <div className="flex justify-between items-center  pb-4">
                <h2 className="text-2xl font-bold uppercase">MY AVAILABILITY FOR THE NEXT 7 DAYS</h2>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {[...Array(7)].map((_, week) => <div key={week} className="flex items-center">
                        <span className="whitespace-nowrap">Week {week + 1}</span>
                        <input {...register(`week.value.${week}.enabled`, {})} type="checkbox" defaultChecked={true} className="mx-4 cursor-pointer" />
                        <Controller
                            control={control}
                            defaultValue={defaultValues}
                            name={`week.value`}
                            render={({ field: { onChange, value } }) => (
                                <IntervalsSlider min={1} max={7} step={1} value={value[week]} onChange={(v) => {
                                    onChange(onSliderUpdate(v, getValues('week').value, week))
                                }}
                                    disabled={!formValues.week.value[week].enabled}
                                />

                            )}
                        />
                        <button type="button" className="pill-white"
                            onClick={() => addOrRemoveInterval(week)}
                            disabled={!formValues.week.value[week].enabled}
                        >
                            {formValues.week.value[week].maxValue2 == formValues.week.value[week].minValue2 ? "+" : "-"}
                        </button>
                    </div>)}
                    <div className="flex flex-row-reverse">
                        <button type="submit" className="btn-primary" disabled={!isDirty} >Save Changes</button>
                    </div>
                </form>
            </div>

        </div >
    )
}
