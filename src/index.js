import React from 'react';
import logo from './logo.png';
import ReactDOM from 'react-dom';
import {SimpleTabs} from './component/navbar'
import './index.css';
import Chip from '@material-ui/core/Chip';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
const handleDelete = () => {
    window.location.href="http://www.baidu.com"
};
const handleClick = () => {
    console.info('You clicked the Chip.');
};

class App extends React.Component{
    render() {
        return (
                <div>
                    <div className="nav-bar"><center><img src={logo} alt="logo" width={'100px'}/></center><br/><br/><SimpleTabs/></div>
                    <div className="footer"><Chip
                        size="small"
                        avatar={<SubtitlesIcon/>}
                        label="闽ICP备15012807号-1"
                        clickable
                        color="primary"
                        onDelete={handleDelete}
                        deleteIcon={<DoneAllIcon />}
                    />&nbsp;
                        <Chip
                            size="small"
                            color="secondary"
                            icon={<AllInclusiveIcon/>}
                            label="由React开发"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            deleteIcon={<DoneAllIcon />}
                        />
                    </div>
                    <br/>
                </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));