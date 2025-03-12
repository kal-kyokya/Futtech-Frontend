import './home.scss';
import Navbar from '../../components/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Watch from '../../pages/watch/Watch';
import Register from '../../pages/register/Register';

const Home = () => {
    return (
	<div className='home'>
	    <Register />
	</div>
    );
}

export default Home;
