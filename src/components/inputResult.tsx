import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { valutes } from '../const/getValutes';
import { state } from '..';

export const InputResult: FC = () => {
    const dispatch = useDispatch();
    const valueSelect = useSelector((state: state) => state.valueSelect);
    const valueInputResult = useSelector(
        (state: state) => state.valueInputResult
    );

    const handlerValueInputResult = (value: string) => {
        dispatch({
            type: 'change_input_result',
            payload: value,
        });
        dispatch({
            type: 'change_input',
            payload: (
                Number(value.replace(/[^\d.]/gi, '')) *
                valutes[valueSelect].Value
            ).toString(),
        });
    };

    return (
        <>
            <input
                value={valueInputResult}
                onChange={(event) => {
                    handlerValueInputResult(event.target.value);
                }}
            />
        </>
    );
};
