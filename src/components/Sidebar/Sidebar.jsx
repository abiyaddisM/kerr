import logo from '../../assets/icons/logo.svg'
import homeIcon from '../../assets/icons/homeIcon.svg'
import briefcaseIcon from '../../assets/icons/briefcaseIcon.svg'
import documentIcon from '../../assets/icons/documentIcon.svg'
import messageIcon from '../../assets/icons/messageIcon.svg'
import horizontalLine from '../../assets/icons/horizontalLine.svg'
import brushIcon from '../../assets/icons/brushIcon.svg'
import libraryIcon from '../../assets/icons/libraryIcon.svg'
import './Sidebar.css';

const SideBar = () => {
    const navigateToHome = () =>{

    }

    const navigateToJobListing = () =>{

    }

    const navigateToMyJobs = () =>{

    }

    const navigateToChats = () =>{

    }

    const navigateToLibrary = () =>{

    }

    return (
        <div className="sidebar">
            <img src={logo} className='kerrlogo' alt="" />
            <button className='button' onClick={navigateToHome}>
                <img src={homeIcon} alt="" />
            </button>
            <button className='button' onClick={navigateToJobListing}>
                <img src={briefcaseIcon} alt="" />
            </button>
            <img src={horizontalLine} className='hr' alt="" />
            <button className='button' onClick={navigateToMyJobs}>
                <img src={documentIcon} alt="" />
            </button>
            <button className='button' onClick={navigateToChats}>
                <img src={messageIcon} alt="" />
            </button>
            <img src={horizontalLine} className='hr' alt="" />
            <button className='button' onClick={navigateToLibrary}>
                <img src={brushIcon} alt="" />
            </button>
            <button className='button'>
                <img src={libraryIcon} alt="" />
            </button>
            {/* remaining buttons */}


        </div>
    );
}


export default SideBar
