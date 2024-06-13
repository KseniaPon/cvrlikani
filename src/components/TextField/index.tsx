import { useState } from 'react';

export interface TextFieldProps {
    onSubmit: (message: MessageData) => void;
}
export interface MessageData {
    username: string;
    text: string;
}
export const TextField = ({ onSubmit }: TextFieldProps) => {
    const [message, setMessage] = useState<MessageData>({
        username: 'David Pohl',
        text: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(message);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className='form__input'
                name='text'
                onChange={handleChange}
                placeholder='Řekni, co se dějě?'
            />
            <button className='form__button' type='submit'>
                Zacvrlikej to
            </button>
        </form>
    );
};
