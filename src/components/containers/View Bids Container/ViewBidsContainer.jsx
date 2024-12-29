import { useEffect, useState } from 'react';
import RadioButtons from '../../buttons/RadioButtons/RadioButtons';
import CommandButton from '../../buttons/Command Buttons/CommandButton';
import styles from './ViewBidsContainer.module.css'
import BidCard from '../../cards/Bid Card/BidCard';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import OfferCard from '../../cards/Offer Card/OfferCard';
import { ArrowLeft } from 'iconsax-react';
import { useAuth } from '../../../utils/AuthContext';

const ViewBidsContainer = ({userID=null, jobID=null, setIsOpen }) =>{

    
    const [view, setView] = useState('bids')
    const [bids, setBids] = useState([])
    const [offers, setOffers] = useState([])
    const {id} = useParams();

    //state for distinguishing between sent and recieved bids/offers, default is sent
    const [isJobs, setIsJobs] = useState(!!jobID)
    const {user} = useAuth()

    function handleSwitch(){
        setView(view === 'bids' ? 'offers' : 'bids')
        
    }

    const removeBid = async (id) => {
        
        setBids(prev=> prev.filter((b)=>b.id !== id))
        try{
        const url = `https://auth.bizawit.com/api/v1/job-bid/${id}`
        await axios.delete(url)
    } catch(error) {console.error(error)}
    }
    const acceptBid = async (index) => {
        try{
            const url = `https://auth.bizawit.com/api/v1/job/${id}/job-contract`
            await axios.post(url,{clientID:user.id, freelanceID:bids[index].user_id, price:bids[index].bid_counter_price ? bids[index].bid_counter_price : -1})
            setIsOpen(false)
        } catch(error) {console.error(error)}
    }

        const acceptOffer = async (offer) => {
        try{
            const url = `https://auth.bizawit.com/api/v1/job/${offer.job_id}/job-contract`
            await axios.post(url,
                {
                    clientID:offer.user_id, 
                    freelanceID:user.id, 
                    price:offer.job_price ? offer.job_price : -1
                })
            setIsOpen(false)
        } catch(error) {console.error(error)}
    }
    const removeOffer = async (id) => {
        console.log(id)
        
        setOffers(prev=> prev.filter((o)=>o.id !== id))
        
        try{
            const url = `https://auth.bizawit.com/api/v1/job-offer/${id}`
            await axios.delete(url)
        } catch(error) {console.error(error)}
   
        
    }




    const fetchJobBids = async () => {
        // console.log(isJobs)

        const url = `https://auth.bizawit.com/api/v1/job/${jobID}/job-bid`

         try {
                const response = await axios.get(url)
                
                setBids(response.data.data)
            }
        catch(error) {console.error(error)}
    }


    const fetchUserBids = async () => {
        // console.log(isJobs)

        const url = `https://auth.bizawit.com/api/v1/job-bid`

        if(userID !== null){
        try {
            const response = await axios.get(url, {
                params: {
                    userID: user.id,
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

        const url = `https://auth.bizawit.com/api/v1/job/${id}/job-offer`
        try{
            const response = await axios.get(url)
            console.log(response.data.data)

            setOffers(response.data.data)
            
        }
        catch(err){console.error(err)}
    }
        
    


    const fetchUserOffers = async () => {
        // console.log(isJobs)
        const url = `https://auth.bizawit.com/api/v1/job-offer`
        try {
            const response = await axios.get(url, {
                params:{
                    userID: user.id
                },
                headers:{
                    'Content-Type' : 'application/json',
                }
            })
            // console.log(response.data)
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
                                    onDelete={()=>removeBid(bid.id)}
                                     onAccept={()=>acceptBid(index)}
                            />
                            </div>)
                            // <BidCard key={index} bid={bid}/>

                        )
                         :
                        (
                            <div className={styles.empty}>
                                {userID!==null?
                                <p>No bids sent</p>:
                                <p>No bids received</p>

                                }
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
                            <OfferCard offer={offer} recieved={!isJobs}
                            onDelete={()=>removeOffer(offer.id)}
                            onAccept={()=>acceptOffer(offer)}/>
                            </div>)

                        ):(
                            <div className={styles.empty}>
                                {userID===null?
                                <p>No offers sent</p>:
                                <p>No offers received</p>

                                }
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
