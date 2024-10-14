import { useEffect, useState } from 'react';
import RadioButtons from '../../buttons/RadioButtons/RadioButtons';
import CommandButton from '../../buttons/Command Buttons/CommandButton';
import styles from './ViewBidsContainer.module.css'
import BidCard from '../../cards/Bid Card/BidCard';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import OfferCard from '../../cards/Offer Card/OfferCard';

const ViewBidsContainer = ({userID}) =>{

    const [view, setView] = useState('bids')
    const [bids, setBids] = useState([])
    const [offers, setOffers] = useState([])

    function handleSwitch(){
        setView(view === 'bids' ? 'offers' : 'bids')
        
    }

    // const {userID} = useParams()

    const fetchBids = async () => {
        const url = `https://auth.bizawit.com/api/v1/job-bid`

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
        // console.log('API Response:', response);

            // console.log(bids)
        }
        catch(error){
            console.error(error)
        }

    }

    const fetchOffers = async () => {
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
        // setBids([])
        if (view=='bids')
            fetchBids()
        else
            fetchOffers()
        // console.log(bids)

    }, [view])

//     useEffect(() => {
//     console.log('Updated bids state:', bids);
// }, [view]);
    
    return(
        <div className={styles.container}>
            <h2 > Bids and Offers</h2>
            <div className={styles.buttons}>
            <div className={styles.switch_views}>
                <RadioButtons onSelect={handleSwitch} selected={view}>
                    <button className={`${styles.btn} ${view === 'bids' ? styles.selected : ''}`} onClick={()=>setView('bids')}>Sent bids</button> 
                    <button className={`${styles.btn} ${view === 'offers' ? styles.selected : ''}`}  onClick={()=>setView('offers')}>Received offers</button> 
                </RadioButtons>
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
                            <BidCard bid={bid}/>
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
                            <OfferCard offer={offer} recieved={true}/>
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