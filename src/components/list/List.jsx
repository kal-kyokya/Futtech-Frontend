import './list.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

const List = () => {
    const listRef = useRef();
    const [ slideNumber, setSlideNumber ] = useState(0);
    const [ isMoved, setIsMoved ] = useState(false);

    const handleClick = (direction) => {
	let distance = listRef.current.getBoundingClientRect().x - 50;
	setIsMoved(true);

	if (direction === 'left' && slideNumber > 0) {
	    setSlideNumber(slideNumber - 1);
	    listRef.current.style.transform = `translateX(${230 + distance}px)`;
	}

	if (direction === 'right' && slideNumber < 5) {
	    setSlideNumber(slideNumber + 1);
	    listRef.current.style.transform = `translateX(${-230 + distance}px)`;
	}
    }

    return (
	<div className='list'>
	    <span className='listTitle'> Your next Watch </span>

	    <div className='wrapper'>
		<ArrowBackIosNewIcon className='sliderArrow left'
				     onClick={ () => handleClick('left') }
				     style={{display: !isMoved && "none"}}/>
		<div className='container' ref={listRef}>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		    <ListItem/>
		</div>
		<ArrowForwardIosIcon className='sliderArrow right'
				     onClick={ () => handleClick('right') }/>
	    </div>
	</div>
    );
}

export default List;
