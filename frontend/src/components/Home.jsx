import Books from './Books'
import '../styles/Home.css'
import Sidebar from './Sidebar'
const Home = () => {

    return (
        <div className='home'>
            <Sidebar />
            <Books />
        </div>
    )
}

export default Home