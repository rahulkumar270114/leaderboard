import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './Filters.module.scss'
import {useState} from 'react';
import classNames from 'classnames';

const timeFrameOptions = [
    'This Week', 'This Month', 'All Time'
];
const slackChannelOptions = [
    `coffeeholics`, '#specialty-coffee-squad', '#salesforce-guild'
];
const brevillevaluesOptions = [
    'collaborative', 'creative', 'passionate', 'can-do-attitude ', 'transparent', 'team-work', 'supportive', 'empowering', 'fun', 'trust'
];

const sortByOptions = [
    'Sort by Top Receivers', 'Sort by Top Gifters', 'Sort by Total (Received + Gifted)'
];

const Filters = ({className = ''}) => {

    const [time, setTime] = useState(timeFrameOptions[0]),
     [channel, setChannel] = useState(slackChannelOptions[0]),
     [value, setValue] = useState(brevillevaluesOptions[0]),
     classes = classNames( styles['filters-section'], className );
    
//const defaultOption = options[0];

const sortArray = (arr) => {
    return arr.sort()
}

const handleChange = (e) => {
    console.log('value', e.value);
}

  return (
    <div className={classes}>
        <div className={styles['filter-col']}>
            <span>Time Frames:</span>
            <Dropdown options={sortArray(timeFrameOptions)} onChange={handleChange} value={timeFrameOptions[0]} placeholder="Select an option" />
        </div>
        <div className={styles['filter-col']}>
            <span>Slack Channels:</span>
            <Dropdown options={sortArray(slackChannelOptions)} onChange={() => {}} value={slackChannelOptions[0]} placeholder="Select an option" />
        </div>
        <div className={styles['filter-col']}>
            <span>Breville Values:</span>
            <Dropdown options={sortArray(brevillevaluesOptions)} onChange={() => {}} value={brevillevaluesOptions[0]} placeholder="Select an option" />
        </div>
        <div className={styles['filter-col']}>
            <span>Choose:</span>
            <Dropdown options={sortArray(sortByOptions)} onChange={() => {}} value={sortByOptions[0]} placeholder="Select an option" />
        </div>
    </div>
  )
}

export default Filters