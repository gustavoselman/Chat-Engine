import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow  
                projectId="f795d1f1-462a-44ab-be77-764db0cb5590"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;