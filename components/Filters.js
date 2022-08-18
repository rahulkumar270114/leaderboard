import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './Filters.module.css'
import {useState} from 'react';

const timeFrameOptions = [
    'This Week', 'This Month', 'All Time'
];
const slackChannelOptions = [
    `coffeeholics`, '#specialty-coffee-squad', '#salesforce-guild'
];
const brevillevaluesOptions = [
    'collaborative', 'creative', 'passionate', 'can-do-attitude', 'transparent', 'team-work', 'supportive', 'empowering', 'fun', 'trust'
];

const Filters = () => {

    const [time, setTime] = useState(timeFrameOptions[0]);
    const [channel, setChannel] = useState(slackChannelOptions[0]);
    const [value, setValue] = useState(brevillevaluesOptions[0]);
    
//const defaultOption = options[0];

const sortArray = (arr) => {
    return arr.sort()
}

const handleChange = (e) => {
    console.log('value', e.value);
}
  return (
    <div className={styles['filters']}>
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
    </div>
  )
}

export default Filters