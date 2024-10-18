import style from './ContractContainer.module.css'
import { ArrowSwapHorizontal } from 'iconsax-react';
import html2pdf from 'html2pdf.js';
import React, { useRef } from 'react';
import Signature from '../../general/signature/signature';


function ContractContainer(){
    const contractRef = useRef();
    const downloadPdf = () => {
        const element = contractRef.current; 
        html2pdf()
            .from(element)
            .save();
    };
    
    

    return(
        <>
        <div className={style.container} ref={contractRef}>
            <div className={style.profiledetails}>
            <div className={style.receiver}>
                <p className={style.header}>Client</p>
                <div className={style.profiles}>
                    <img className={style.porifile_pic} src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div className={style.profileinfo}>
                        <p className={style.username}>Yom Fisseha</p>
                        <p className={style.address}>@YOMMMM</p>
                    </div>
                    

                </div>

            </div>

            <ArrowSwapHorizontal size="32" color="#656565"/>

            <div className={style.sender}>
                <p className={style.header}>Freelancer</p>
                <div className={style.profiles}>
                    <img className={style.porifile_pic} src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div className={style.profileinfo}>
                        <p className={style.username}>Yom Fisseha</p>
                        <p className={style.address}>@YOMMMM</p>
                    </div>

                </div>

            </div>

            </div>

            <div className={style.orderDescription}>
                <p className={style.dhead}>Order Descripition</p>
                <p className={style.orderdesc}><big>1.</big>  Object: [Describe the object, character, environment, etc. to be modeled—e.g., futuristic spaceship, fantasy character, modern architectural building, etc.]</p>
                <p className={style.orderdesc}><big>2.</big>  Style: The art style should be [realistic, stylized, cartoonish, minimalistic, etc.]. Reference images can be provided for clarity on the desired visual direction.</p>
                <p className={style.orderdesc}><big>3.</big>  Poly Count: The model should be optimized for [low-poly for gaming, high-poly for cinematic quality, etc.], with a maximum poly count of [number of polygons].</p>
                <p className={style.orderdesc}><big>4.</big>  File Format: Final deliverables should be in [FBX, OBJ, STL, etc.] format, compatible with [software, e.g., Blender, Unity, Unreal Engine, etc.].</p>
                <p className={style.orderdesc}><big>5.</big>  Deadline: The project deadline is [specific date]. Please ensure timely communication throughout the process.</p>
            </div>
            
            <div className={style.agreement}>
                <p className={style.dhead}>Agreement Clause</p>
                <p className={style.orderdesc}><big>1.</big> Scope of Work: The Artist agrees to create and deliver custom 3D art as outlined in the project description, including but not limited to the specified model, textures, rigging, and file format requirements. The work will align with the agreed-upon style, technical specifications, and any reference materials provided. </p>
                <p className={style.orderdesc}><big>2.</big> Timeline and Delivery: The Artist will deliver the final 3D model(s) and any associated files by [insert deadline date]. Both parties agree to maintain clear and timely communication throughout the project. Any delays must be communicated in advance and approved by the Client. </p>
                <p className={style.orderdesc}><big>3.</big> Revisions: The Artist agrees to provide up to [insert number] rounds of revisions to the work. Any additional revisions beyond this will be subject to further negotiation and may incur additional charges. </p>
                <p className={style.orderdesc}><big>4.</big> Payment Terms: The total fee for the project is [insert amount], payable as follows:

[Insert percentage]% deposit due upon signing this agreement.
The remaining [insert percentage]% is due upon final delivery and approval of the 3D art by the Client.
Any additional work requested beyond the scope of this agreement will be billed at an agreed-upon rate. </p>
                <p className={style.orderdesc}><big>5.</big> Ownership and Rights: Upon final payment, the Client will retain full ownership of the 3D model(s) and all associated assets created under this agreement. The Artist retains the right to use the work in their personal portfolio, unless otherwise agreed in writing. </p>
                <p className={style.orderdesc}><big>6.</big> Confidentiality: The Artist agrees to maintain confidentiality regarding all aspects of the project, including any proprietary information or materials provided by the Client. </p>
                <p className={style.orderdesc}><big>7.</big> Termination: Either party may terminate this agreement with written notice. In the event of termination, the Client will pay the Artist for any work completed up to the termination date, based on the agreed-upon rate </p>

                
                    
            </div> 

        <Signature/>



        </div>

        <div className={style.buttondiv}>
            <button onClick={downloadPdf} className={style.pbuttons}>Download</button>

        </div>

        
        </>
        
    )

}

export default ContractContainer

