import { Header } from './components/header';
import { Input } from './components/input';
import { InputResult } from './components/inputResult';
import { Select } from './components/select';

export const App = () => {
    return (
        <>
            <Header />
            <p>
                <Input />
            </p>
            <hr />
            <p>
                <InputResult />
                <Select />
            </p>
        </>
    );
};
