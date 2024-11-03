import React, { useEffect, useRef } from "react";
import style from "./LandingPage.module.css"
import vector from "../../assets/icons/vector.svg"
import img1 from "../../assets/images/wallhaven-kx5v57_1280x720 2 (3).svg/"
import img2 from "../../assets/images/wallhaven-kx5v57_1280x720 3 (2).svg/"
import img3 from "../../assets/images/wallhaven-kx5v57_1280x720 4 (3).svg/"
import img4 from "../../assets/images/wallhaven-kx5v57_1280x720 5 (1).svg/"
import img5 from "../../assets/images/wallhaven-kx5v57_1280x720 6 (3).svg/"
import log1 from "../../assets/images/image 8.svg/"
import log2 from "../../assets/images/image 9.svg/"
import log3 from "../../assets/images/image 10.svg/"
import log4 from "../../assets/images/image 11.svg/"
import b1 from "../../assets/images/image 2 (4).svg/"
import b2 from "../../assets/images/image 2 (5).svg/"
import b3 from "../../assets/images/image 3 (2).svg/"
import i1 from "../../assets/images/wallhaven-kx5v57_1280x720 8.svg/"
import i2 from "../../assets/images/image 2 (2).svg/"
import i3 from "../../assets/images/wallhaven-kx5v57_1280x720 9 (2).svg/"
import i4 from "../../assets/images/wallhaven-kx5v57_1280x720 7 (2).svg/"
import c1 from"../../assets/images/image 4.svg/"
import c2 from"../../assets/images/image 4 (1).svg/"
import c3 from"../../assets/images/image 4 (2).svg/"
import c4 from"../../assets/images/image 4 (3).svg/"
import c5 from"../../assets/images/image 4 (4).svg/"
import c6 from"../../assets/images/image 4 (5).svg/"



import Discover from "../../assets/images/Discover Artists.svg/"
import { ArrowCircleRight } from "iconsax-react";





const images = [img1, img2, img3, img4, img5,img1, img2, img3, img4, img5];




const LandingPage = () => {
  const rightToLeftRef = useRef(null);
  const leftToRightRef = useRef(null);

  useEffect(() => {
    const scrollRightToLeft = rightToLeftRef.current;
    const scrollLeftToRight = leftToRightRef.current;

    const scrollSpeed = 2; // Speed for both directions

    // Variables to store the requestAnimationFrame IDs
    let rightToLeftAnimationId;
    let leftToRightAnimationId;

    const totalWidth = scrollRightToLeft.scrollWidth / 2; // Half width for reset

    // Scroll right to left
    const scrollImagesRightToLeft = () => {
      scrollRightToLeft.scrollLeft += scrollSpeed;

      // Reset scroll position for seamless effect
      if (scrollRightToLeft.scrollLeft >= totalWidth) {
        scrollRightToLeft.scrollLeft = 0;
      }

      rightToLeftAnimationId = requestAnimationFrame(scrollImagesRightToLeft);
    };

    // Scroll left to right
    const scrollImagesLeftToRight = () => {
      scrollLeftToRight.scrollLeft -= scrollSpeed;

      // Reset scroll position for seamless effect
      if (scrollLeftToRight.scrollLeft <= 0) {
        scrollLeftToRight.scrollLeft = totalWidth;
      }

      leftToRightAnimationId = requestAnimationFrame(scrollImagesLeftToRight);
    };

    // Start animations
    rightToLeftAnimationId = requestAnimationFrame(scrollImagesRightToLeft);
    leftToRightAnimationId = requestAnimationFrame(scrollImagesLeftToRight);

    // Cleanup function to cancel animation frames on unmount or re-render
    return () => {
      cancelAnimationFrame(rightToLeftAnimationId);
      cancelAnimationFrame(leftToRightAnimationId);
    };
  }, []);


    return(
        <div className={style.container}>
            <div className={style.button_div}>
                <div className={style.logo}>
                    <img className={style.logoimg} src={vector} alt="" />
                    <p className={style.logona}>Kerr</p>
                </div>

                <div className={style.topbuttons}>
                    <button className={style.btn1}>Discover</button>
                    <button className={style.btn2}>Log in</button>

                </div>

            </div>

            
      <div className={style.imgcons} ref={rightToLeftRef}>
        <div className={style.imgcon1}>
          
          {images.map((img, index) => (
            <img key={index} className={style.image} src={img} alt="" />
          ))}
          {images.map((img, index) => (
            <img key={`dup-${index}`} className={style.image} src={img} alt="" />
          ))}
        </div>
      </div>

      
      <div className={style.imgcons} ref={leftToRightRef}>
        <div className={style.imgcon2}>
          
          {images.map((img, index) => (
            <img key={index} className={style.image} src={img} alt="" />
          ))}
          {images.map((img, index) => (
            <img key={`dup-${index}`} className={style.image} src={img} alt="" />
          ))}
        </div>    
            </div>

            <img className={style.discover} src={Discover} alt="" />

            <div className={style.description}>
                <p className={style.desc}>Collection of Ethiopia's best digital artists. Featuring over 30,000 aspiring Creators
                Commision the right person for you!</p>
                <button className={style.findtal}>Find telent <ArrowCircleRight size="32" color="#505050"/></button>
            </div>  

            <div className={style.trust}>
                <p className={style.desc2}>Trusted by designer teams at</p>
                
                <div className={style.logcont}>
                    <img src={log1} alt="" />
                    <img src={log2} alt="" />
                    <img src={log3} alt="" />
                    <img src={log4} alt="" />

                </div>

            </div>

            <div className={style.boastdivs}>
                <div className={style.boastdiv1}>
                    <div className={style.boastdesc1}>
                        <p className={style.breakthru2}>Break through your limits</p>
                        <p className={style.enhance}>Enhance your skills and stay updated with the latest trends through Kerr's extensive library of resources. From in-depth tutorials and workshops to industry news and tips, you'll have everything you need to grow as a digital artist</p>
                        <button className={style.seemore}>See more <ArrowCircleRight size="32" color="#505050"/></button>
                    </div>
                    <img className={style.b1} src={b1} alt="" />
                </div>

                <div className={style.boastdiv2}>
                    <img className={style.b2} src={b2} alt="" />    
                    <div className={style.boastdesc1}>
                        <p className={style.breakthru}>Find Your Artist</p>
                        <p className={style.enhance}>Kerr is the ultimate hub for Ethiopian digital artists, offering a vibrant community where you can connect with fellow creatives, discover new opportunities, and access valuable resources. Showcase your portfolio, participate in events and workshops, and receive support and feedback from experienced artists.</p>
                    </div>
                    
                </div>

                <div className={style.boastdiv3}> 
                    <div className={style.boastdesc1}>
                        <p className={style.breakthru}>Discover new projects, collaborations,and job openings.</p>
                        <p className={style.enhance}>Kerr opens the door to a world of opportunities. Whether you're looking for freelance gigs, full-time positions, or collaborative projects, our platform connects you with potential clients and partners who value your unique skills and creativity.</p>
                    </div>
                    <img className={style.b3} src={b3} alt="" />   
                    
                </div>
                  
            </div>

            <div className={style.feedbackdiv}>
              <div className={style.aside}>
                <img className={style.anime} src={i1} alt="img1"/>
                <img className={style.anime2} src={i2} alt="img1"/>
                <img className={style.anime3} src={i3} alt="img1"/>
                <img className={style.anime4} src={i4} alt="img1"/>
            

              </div>

              <div className={style.comhead}>
                <p className={style.breakthru}>See what our users have to say.</p>
                <button className={style.seemore}><span>See More</span><ArrowCircleRight size="32" color="#505050"/></button>
                <div className={style.comment}>
                        <div className={style.com1}>
                          <div className={style.profile}>
                            <img src={c1} alt="" />
                            <div className={style.user}>
                              <p className={style.username}>Sarah Mulugeta</p>
                              <p className={style.platform}>Twitter</p>

                            </div>

                          </div>
                          <p className={style.test}>Kerr is a great resource and it always comes in handy to see what the best practices or standards are for digital art patterns in our current landscape.</p>

                        </div>

                        <div className={style.com2}>
                          <div className={style.profile}>
                          <img src={c2} alt="" />
                          <div className={style.user}>
                              <p className={style.username}>Mekdes Fikru</p>
                              <p className={style.platform}>Instagram</p>

                            </div>

                          </div>
                          <p className={style.test}>The opportunities I've discovered through Kerr are incredible. From collaborative projects to job openings, the platform has opened so many doors for me. I highly recommend it to any digital artist.</p>

                        </div>

                        <div className={style.com3}>
                          <div className={style.profile}>
                          <img src={c3} alt="" />
                          <div className={style.user}>
                              <p className={style.username}>Lidya Getachew</p>
                              <p className={style.platform}>Facebook</p>

                            </div>

                          </div>
                          <p className={style.test}>"Joining Kerr was the best decision I've made as a digital artist.</p>

                        </div>

                        <div className={style.com4}>
                          <div className={style.profile}>
                          <img src={c4} alt="" />
                          <div className={style.user}>
                              <p className={style.username}>Sebastian Speier</p>
                              <p className={style.platform}>Art Station</p>

                            </div>

                          </div>
                          <p className={style.test}>Kerr's platform is amazing! I've gained so much exposure and have even landed freelance projects through the site. The feedback from other artists has been incredibly helpful.</p>

                        </div>

                        <div className={style.com5}>
                          <div className={style.profile}>
                          <img src={c5} alt="" />
                          <div className={style.user}>
                              <p className={style.username}>Daryl Ginn</p>
                              <p className={style.platform}>Figma</p>

                            </div>

                          </div>
                          <p className={style.test}>Mobbin has quickly become our favourite inspiration resource for designing mobile apps at endless.design, their advanced filtering is unmatched in the inspiration space.</p>

                        </div>

                        <div className={style.com6}>
                          <div className={style.profile}>
                          <img src={c6} alt="" />
                          <div className={style.user}>
                              <p className={style.username}>Marco Cornacchia</p>
                              <p className={style.platform}>Twitter</p>

                            </div>

                          </div>
                          <p className={style.test}>Kerr has completely transformed my artistic career. The community is incredibly supportive, and I've found so many opportunities to showcase my work and collaborate with other talented artists.</p>
                          
                        </div>
                       
                </div>

              </div>

            </div>

        </div>
    )

}

export default LandingPage