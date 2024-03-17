import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { state } from '..';
import { valutes } from '../const/getValutes';

export const Input: FC = () => {
    const dispatch = useDispatch();
    const valueInput = useSelector((state: state) => state.valueInput);
    const valueSelect = useSelector((state: state) => state.valueSelect);

    const handlerValueInput = (value: string) => {
        dispatch({
            type: 'change_input',
            payload: value.replace(/[^\d.]/gi, ''),
        });
        dispatch({
            type: 'change_input_result',
            payload: (Number(value) / valutes[valueSelect].Value).toString(),
        });
    };

    return (
        <>
            <input
                className="input first"
                placeholder="Введите данные"
                value={valueInput}
                onChange={(event) => handlerValueInput(event.target.value)}
            />
        </>
    );
};
