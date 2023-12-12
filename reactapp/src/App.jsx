import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FaqsPage from './pages/FaqsPage';
import ChatPage from './pages/ChatPage';


const App =() =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ChatPage />} />
                    <Route path="/ChatPage" element={<ChatPage/> } />
                    <Route path="/FaqsPage" element={<FaqsPage/> } />
                </Routes>
            </BrowserRouter>  
        </div>
    );
}

export default App;