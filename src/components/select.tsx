import React, { FC } from 'react';
import { valutes } from '../const/getValutes';
import { useDispatch, useSelector } from 'react-redux';
import { state } from '..';

export const Select: FC = () => {
    const dispatch = useDispatch();
    const valueSelect = useSelector((state: any) => state.valueSelect);
    const valueInput = useSelector((state: state) => state.valueInput);

    const options = Object.keys(valutes).map((el) => {
        return <option key={el}>{el}</option>;
    });
    const handlerValueSelect = (value: string) => {
        dispatch({ type: 'change_select', payload: value });
        dispatch({
            type: 'change_input_result',
            payload: (Number(valueInput) / valutes[value].Value).toString(),
        });
    };

    return (
        <select
            className="select"
            onChange={(event) => handlerValueSelect(event.target.value)}
            value={valueSelect}
        >
            {options}
        </select>
    );
};
