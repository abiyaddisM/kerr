import { useEffect, useState } from 'react';
import RadioButtons from '../../buttons/RadioButtons/RadioButtons';
import CommandButton from '../../buttons/Command Buttons/CommandButton';
import styles from './ViewBidsContainer.module.css'
import BidCard from '../../cards/Bid Card/BidCard';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import OfferCard from '../../cards/Offer Card/OfferCard';
import { ArrowLeft } from 'iconsax-react';

const ViewBidsContainer = ({userID=null, jobID=null, setIsOpen }) =>{

    const [view, setView] = useState('bids')
    const [bids, setBids] = useState([])
    const [offers, setOffers] = useState([])

    //state for distinguishing between sent and recieved bids/offers, default is sent
    const [isJobs, setIsJobs] = useState(!!jobID)

    function handleSwitch(){
        setView(view === 'bids' ? 'offers' : 'bids')
        
    }




    const fetchJobBids = async () => {
        console.log(isJobs)

        const url = `https://auth.bizawit.com/api/v1/job/${jobID}/job-bid`

         try {
                const response = await axios.get(url)
                
                setBids(response.data.data)
            }
        catch(error) {console.error(error)}
    }


    const fetchUserBids = async () => {
        console.log(isJobs)

        const url = `https://auth.bizawit.com/api/v1/job-bid`

        if(userID !== null){
        try {
            const response = await axios.get(url, {
                params: {
                    userID: userID,
                    type: 'sender'
                },
                headers: {
                    'Content-Type' : 'application/json',
                },
            });
            setBids(response.data.data);
        }
        catch(error){
            console.error(error)
        }}

    }


    const fetchJobOffers = async () => {
        console.log(isJobs)

        const url = `https://auth.bizawit.com/api/v1/job/${jobID}/job-offer`
        try{
            const response = await axios.get(url)
            setOffers(response.data.data)
            
        }
        catch(err){console.error(err)}
    }
        
    


    const fetchUserOffers = async () => {
        console.log(isJobs)
        const url = `https://auth.bizawit.com/api/v1/job-offer`
        try {
            const response = await axios.get(url, {
                params:{
                    userID: userID
                },
                headers:{
                    'Content-Type' : 'application/json',
                }
            })
            console.log(response.data)
            setOffers(response.data.data)

        }
        catch(err){console.error(err)}
        
    }


    useEffect(()=>{
        
        if(!isJobs){
            if (view=='bids')
                fetchUserBids()
            else
                fetchUserOffers()
        }
        else{
            if (view=='bids')
                fetchJobBids()
            else
                fetchJobOffers()
        }
        // console.log(bids)

    }, [view])



    const closePopUp = () => {
        setIsOpen(false)
    }
    
    return(
        <div className={styles.container}>

          
            <div className={styles.buttons}>
                <button className={styles.back_button} onClick={closePopUp}>
                    <ArrowLeft size="20px" color="var(--primary-color)" /> 
                    {/* Back */}
                </button>  
                <div className={styles.switch_views}>
                    <div onSelect={handleSwitch} selected={view} className={styles.radios}>
                        <button className={`${styles.btn} ${view === 'bids' ? styles.selected : ''}`} onClick={()=>setView('bids')}>Bids</button> 
                        <button className={`${styles.btn} ${view === 'offers' ? styles.selected : ''}`}  onClick={()=>setView('offers')}>Offers</button> 
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                {

                    view === 'bids' ? 
                    <div className={styles.sent_bids}>
                        { bids &&
                        bids.length > 0 ?
                        // console.log('hi')
                        bids.map((bid, index) => (
                            <div key={index}>
                                {/* <p>{bid.created_at}</p> */}
                            <BidCard bid={bid}
                                    received={isJobs}
                            />
                            </div>)
                            // <BidCard key={index} bid={bid}/>

                        )
                         :
                        (
                            <div className={styles.empty}>
                                <p>No bids sent</p>
                            </div>
                        )
                    
                    }
                    </div>
  
                    : 
                    
                    <div className={styles.received_bids}>
                        { offers &&
                        offers.length > 0 ?
                        offers.map((offer, index) => (
                            <div key={index}>
                                {/* <p>{bid.created_at}</p> */}
                            <OfferCard offer={offer} recieved={!isJobs}/>
                            </div>)

                        ):(
                            <div className={styles.empty}>
                                <p>No offers received</p>
                            </div>
                        )
                    
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default ViewBidsContainer;