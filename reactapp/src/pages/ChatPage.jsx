import Sidebar from '../components/Sidebar'
import Chat from '../components/chat'

const ChatPage = () => {
    return (
        <div>
            <Sidebar/>
            <div className="ml-72 px-4 mt-4">
                <Chat/>
            </div>

        </div>
    )
}

export default ChatPage;