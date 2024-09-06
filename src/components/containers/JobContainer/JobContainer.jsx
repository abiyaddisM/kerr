// import { useState } from "react";
import JobCard from "../../cards/Job Cards/JobCard.jsx";
import styles from './JobContainer.module.css'

const user = [
    {
        id: '1',
        image: 'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CnlHAhBd1D0h5E0nrFu8lENfYMdV5GvOwb3MplvjcSbi5PW7IIt23UlWYEgaVwPSNH3LZ4WrlWBPLNLIXeVsIiM43apMo9pHtsjI7tuz-uvHCZEif7T8sVuzNyyl2KP8Cm0L4WuBC7MJoJvSpIMG6ZUvV7BHLvMpKBMiENfEGU4n3wDoixBDNWN5hZwRwii-uu7CWL-xq6zdXUng1Vy0QxjoDFV5LPfKNLawf0Z6FMp2tMSU9QMhd5wK3NJ0C9VofUrIXcJNVUC26gGVqcOv8t06iod9KvlC8Fxs8V9EDIhulGSB24sFZAwnjEXzL-3C2JkFP~SWf6KyGT0KUcChZw__',
        name: 'Aaron Mesfin'
    },
    {
        id:'2',
        image: 'https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Izxqi5Yttmrb8UOgxq2uS8MOFLcMZ5sgsWq9deY8YvRpTT5thFxPrToncCMUsYQjBo1SwXPxMKAI0aYCpYu-LIlhgLffYYXdAwF7kDXqQTx6eKpS7xtuI9S7-xn4~cFbQG1i3h1v2gmpOZji2L04V41ned86ghr35ClYJQkcpx3w-7Kr-0z~uyBTPGcdrNJiRAVBDom1Mp8r1FoEzUFuwlYZOVwzPgCVsEk-KIxwcSbP1~waHbnuSy4RzYQYf9~wgrzfM0lTW0fup~ahGB5VpdGExMzvd-MzvyIP0tyapLzjFBVia3xiFc7nfak6f1KQAJM3iHXhpVfmgeZKikSkDg__',
        name: 'Some Guy'
    },
    {
        id: '3',
        image: 'https://s3-alpha-sig.figma.com/img/5092/512c/8486c7c89c9bd726da4a9370ff0c1d02?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cgvqS~buljhPcbVLwbMy4jxRsNDweWTgSo4fhE0KG6hr4Ubg26QvovHSq3mXqzKq19CcQ~TX4kefPHk5xyYWj9-VO2ZVMQs8~ZT7GfNh4NzCHFABuH7mVFxJ4ZucTH8NqL40QqZnQFHGSRxEqY7XQbDqfykbP6X7y~AnF61IWnliZ-l8JSxXTkhZs5hJGFNyWCmE0xl4zd9BML6W6-wl5w2IvKQXZiIuva~KzbWEqj498MvvchSAZX3K~GjbtT76Jb82LkK8JxZ~HrGGKy8l6ykFR4F-0MGNlAy1le9AtDvRj08U8DKXF6w6h~GJ2hQbSCrkYbyCGVIzjRl98syy0Q__',
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
    {
        id: '4',
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
