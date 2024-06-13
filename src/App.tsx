import './App.css';
import { TextField, MessageData } from './components/TextField';

// const texts = [
//     {
//         name: 'Lenka Nová',
//         text: 'Ahoj! Jsem Lenka!',
//     },
// ];
function App() {
    const handleSubmitForm = (twitter: MessageData) => {
        console.log(twitter);
    };
    return (
        <>
            <h1>Cvrlikání</h1>
            <TextField onSubmit={handleSubmitForm} />
        </>
    );
}

export default App;
