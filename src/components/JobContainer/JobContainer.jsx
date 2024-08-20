// import { useState } from "react";
import JobCard from "../JobCards/JobCard";
import styles from './JobContainer.module.css'

const user = [
    {
        id: '1',
        image: 'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HxXwboFcW~OzP7l8JE7ao7DdCHIRT9cfG0n9gMRgUyGzkwpgXPQiJ~encA95RHrlQPCQ5GVDn4DMNxw7~Si3vlSeRRcCfIcWvGMViUr5Rf9TSJsq1ipyJtOsTw58WktIjewYhV0jei~Ebg2hogbp6iEpmjEpvjWcE4WUhmqh3jL0JEsOi6CYg9rMT6N2iyHjKrlXOojojp0R7nZMr5iWH6~KkDV7lFJ0mJMDB9~kEJDWxhG1ibLBxF5Qsg01ObtvumqtSbaJyu0Q0HvxeK2vrZnwQKHcHRGmCwFrWR8zyRGskDeOF1UDtza2hIr2edYboFWcd~igvBwXC6QDc3scqQ__',
        name: 'Aaron Mesfin'
    },
    {
        id:'2',
        image: 'https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTxPVUGBCSy1~HNEFcf~e~oRGwsI6WSr0rQprruzJU3~8VHB4cWc73T295SftHZaZXd7lTKaFPChV1iCfowe-Sb8MnbquJyPxCMZxbFmN85CllnKIucacs-hvTq2DFlj9SWljYrFH1hiAV7~U9Zmrrg8QoHS64H11w-zFiAG5ewi5JuycEZaVlIi1EmSHAvIPTzdZHgrCH7q7LQ3yiV4Dd0syH8~PO6SFtCqmxOqPR-Hxp1i4HGwhTRJT7onz20Ll97oQhKEWqMDWG4I1AwNR3j2Am3uz5a2vpEs1B3CSOB1Yi0xa8l8Z3-1nnKze7A0ush2Dw0Ca9m1kJ3m0ihINg__',
        name: 'Some Guy'
    },
    {
        id: '2',
        image: 'https://s3-alpha-sig.figma.com/img/5092/512c/8486c7c89c9bd726da4a9370ff0c1d02?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ji2rcQMGilGhikanDR~0I5jbsLSpuK73l5jR4MF6du749i34jmvcSgcCWI6KIacwFBc5nqQCheKDWdbTUsQxzgweKzkmFv65~2BcGbtekiDV5h4518-2aeXdhRkZgaYH2GHEJ-jPPEzN0Uane2xohQSR5-hZEMZxsBvcgFRYCDn4OKIpaAXBMwtMZzVYtjES4gkmZqzdwauajc2d2naqhcvHXrcBO0Xn6dXj6tWpCZvSuDemnMrfw85hNGeMOhGLGL508V3Vkx~VJpZf1ASbSuX4X6JjckdzFxxudywcXhgtXs9u8b50cnbthHJy9ORl1fT-iS~aAVoG9d5P~z9xDQ__',
        name: 'Kate Smith'
    }
]

const jobs = [
    {
        id: '1',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 3,
        image: user[1].image,
        name: user[1].name,
        hourlyrate: 650,
        totalPrice: 3000,
        successrate: 80
        

    },
    {
        id: '2',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 5,
        image: user[0].image,
        name: user[0].name,
        hourlyrate: 170,
        totalPrice: 3000,
        successrate: 60


    }, 
    {
        id: '3',
        title: 'Tech Start Up Logo Design',
        description: 'We are seeking a talented digital artist to create a realistic portrait that embodies a futuristic vibe with a cool color palette. The portrait should seamlessly blend realistic human features with elements that evoke a sense of advanced technology and forward-thinking aesthetics. The overall color tone should convey a sense of calmness and sophistication. The artwork should evoke a sense of the future, incorporating modern and high-tech elements',
        rating: 2,
        image: user[2].image,
        name: user[2].name,
        hourlyrate: 950,
        totalPrice: 3000,
        successrate: 90

    },
]


const JobContainer = () => {
    // const [jobs, setJobs] = useState([]);

    return(
        <div className={styles.jobContainer}>
            {jobs.map((j)=>{
                return( <JobCard
                key={j.id}
                job={j}
                />)
            })

            }

        </div>
    );
}

export default JobContainer