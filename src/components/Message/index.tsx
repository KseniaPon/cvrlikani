import { MessageData } from '../TextField';
export const Message = ({ username, text }: MessageData) => {
    return (
        <>
            <h3>{username}</h3>
            <div>{text}</div>
        </>
    );
};
