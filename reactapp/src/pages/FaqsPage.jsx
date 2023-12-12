import Sidebar from '../components/Sidebar'
import Faqs from '../components/faqs'

const FaqsPage = () => {
    return (
        <div>
            <Sidebar />
            <div className="ml-72 px-4 mt-5">
                <Faqs/>
            </div>
        </div>
    )
}

export default FaqsPage;