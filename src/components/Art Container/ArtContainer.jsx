import ArtCard from '../Art Card/ArtCard'
import styles from './ArtContainer.module.css'

const image1 = 'https://s3-alpha-sig.figma.com/img/27e5/f2fe/4b47a4f93fc460020f91da620e99e6b7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UmQ76~ch1CNAWGJEkp97HNbx2Ezq8Hu7sHRvm26oD6CUPdYxPPHRZoUDfAMdfY5UTw1rZXcmXy6FXASKYEffPXDxy4NVl84njsZGZeyuW2NGC15o3N00iR0SNGmoJwHX-emMyMip5WCnKNXH6CnRQzLppRu52yhh5hWOSMcn7k7ZgBdGeYG8onqc2bFfe58Q98egpModo1CD6grpbVq6u8qH0~rQk8eJCpZq7e5V2f6pMWHVsnXGO47nbmW8JBFwSQV81lPapRtV5VV3FpbyITrS4mogc2twqiEfh5xoa1ZPZvuVh8pg6-FoXERzxaWm0pYaZ21okav77L1e9C~C9Q__'
const image2 = 'https://www.figma.com/file/vZYRjuWSbqwcIf0GbaUT3g/image/d223945ec02ec5bc05d1e20f89bd1b87f22cd62a'
const image3 =  'https://s3-alpha-sig.figma.com/img/39fd/34f5/c68bfbf235ccdf7e982b59015f40b0d7?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AGnSpJFOk5SzySbCsfmgYxkrRqX1C5HfRswwe7gyL5fY~908-xyrmk0LhJiYtNrsrRvNGbUxrkJ8GlVIFNXihuO1irz1RraoKJjfrCTBc3CrJYPHXrrMpuvZeTp79k6~3MUlfnVJ04NiiqJQmGTcWauD0bq4D4McIzF30xAXadHO1FnWhpfhhXuPZARWPyX6l21grslWzkkiDxNOQv-Nnms3rBy68NCfIteD~VExlS35usGEDLjBWVUR6GiFz8Ngnz5AQ6MkPTm7BMgL76GDP9dokRJcXGqCfrBilqswSXXBV5PcbcNw6Mb35CQcfrNKOngkO1c0HD59OXJvV7Ehuw__'
const arts = [
    {
    id: 1,
    image:image1,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 2,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 3,
    image:image3,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 4,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 5,
    image:image3,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 6,
    image:image1,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 7,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 8,
    image:image3,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 9,
    image:image1,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 10,
    image:image2,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 11,
    image:image3,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  },
  {
    id: 12,
    image:image1,
    title: 'See of the eye',
    userName: 'some guy',
    userImage:'https://s3-alpha-sig.figma.com/img/1120/5a78/6937745c3558139520e2a36c339911c2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKUttPe1RV0h3pEwFbeLCmyfSDuqLANI7~KFd2clijhBwhfQ1yCwuKhJ7ELGGY7NQCHBxACpSso8mLo~KC-830eceqNsHi~Rkkx4dTaeVDDfzfYa1VojbyQ~HBhppgkSM~s4dLRiWjKyfPH~rqqmNBk6yIScd~8u1h5q7GcDDbUnsO8LpTioQZkmQO5dk0OSE4FTXjwE-jtJDGWdWJ3O3QHWqgUpda9dLxILkk2UTAgjKFHYNEWdm3LhlqHNuJTn286Lau9a2slGaXGwHuChJ-CxADjGyJkv~QrBwueiA6BR7j7-MiYGqUtRgFMpovX3HRuGigJg2lfhM-5f7504bA__',
    views: '2.5K',
    duration: '4 weeks'
  }
]


const ArtContainer = () => {

    return(
        <div className={styles.art_container}>
            {arts.map((a)=>{
                return <ArtCard key={a.id} art={a} className={styles.art_card}/>
            })}

        </div>
    )
}
export default ArtContainer