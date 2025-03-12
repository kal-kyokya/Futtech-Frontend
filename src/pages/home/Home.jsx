import './home.scss';
import Navbar from '../../components/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Watch from '../../pages/watch/Watch';

const Home = () => {
    return (
	<div className='home'>
	    <Watch />
	</div>
    );
}

export default Home;
