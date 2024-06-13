import { useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { TextField, MessageData } from './components/TextField';

const texts = [
    {
        username: 'Lenka Nová',
        text: 'Ahoj! Jsem Lenka!',
    },
    {
        username: 'Lenka Nová',
        text: 'Ahoj! Jsem Lenka!',
    },
    {
        username: 'Lenka Nová',
        text: 'Ahoj! Jsem Lenka!',
    },
];
function App() {
    const [textsField, setTextsField] = useState(texts);
    const handleSubmitForm = (twitter: MessageData) => {
        console.log(twitter);
        const newTexts = [...textsField];
        newTexts.unshift(twitter);
        setTextsField(newTexts);
    };
    console.log(textsField);
    return (
        <>
            <h1>Cvrlikání</h1>
            <TextField onSubmit={handleSubmitForm} />
            {textsField.map((t, i) => (
                <Message key={i} username={t.username} text={t.text} />
            ))}
        </>
    );
}

export default App;
