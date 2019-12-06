import React from "react";
import "./Home.css"
import ScrollAnimation from "react-animate-on-scroll"
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import logo from "./images/logo.jpg"
import jim from "./images/jim_goerge.jpg" 
import slide1 from "./images/slide1.jpg"
import slide2 from "./images/slide2.jpg"
import slide3 from "./images/slide3.jpg"
import slide4 from "./images/slide4.PNG"
import slide5 from "./images/slide5.jpg"
import slide6 from "./images/slide6.jpg"

import group_photo from "./images/group_photo.jpg";
import arausi from "./images/arausi.jpg"
import arausi_bro from "./images/arausi_bro.jpg"
import jaiye from "./images/jaiye.jpg"
import mimi from "./images/mimi.jpg"
import seyi from "./images/seyi.JPG"
import adeyemi from "./images/adeyemi.jpg"
import festus from "./images/festus.jpg"
import kehinde from "./images/kehinde.JPG"
import olowo from "./images/olowo.jpg"


import book_cover from "./images/book_cover.PNG"


import tomi from "./images/tomi.jpg"
import { Carousel } from "react-responsive-carousel"



const Home = () => {
    return(
        
        <div>
            {/* <Carousel 
                showArrows={true}
                showThumbs={false}
                >
                    <div>
                            <img src={logo} alt="" />
                            <p className="legend">
                                We Inspire, Educate and Empower
                            </p>
                    </div>

                    <div>
                                <img src={jim} alt="" />
                                <p className="legend">CELEBRATE OUR LATEST CERTIFIED PROJECT MANAGER<br />
                                Mr. Tekena JimGeorge, a graduate of Covenant University<br/>
                                I AM VERY PROUD OF YOU
                                </p>
                        </div>

                        <div className="legend">
                            <img src={slide1} alt="" />
                        </div>

                        <div className="legend">
                            <img src={slide2} alt="" />
                        </div>

                        <div>
                            <img src={slide3} alt="" />
                            <p className="legend">
                                Project Management training @ <br />
                                African Leadership Forum, Temperance Hotel, Ota
                            </p>
                        </div>

                        <div>
                            <img src={slide4} alt="" />
                            <p className="legend">A Trainee Testifying in our recent training @ <br />African Leadership Conference Center, Temperance Ota</p>
                        </div>

                        <div>
                            <img src={slide5} alt="" />
                        </div>

                        <div>
                            <img src={slide6} alt="" />
                        </div>
            </Carousel> */}


            <ScrollAnimation 
                animateIn='bounceInRight'
                delay={400}
                animateIn='tada'
                initiallyVisible={true}
            >

                    <Pane

                        elevation={9}
                        backgroundColor="black"
                        height={230}
                        color="white"
                        margin={60}
                        padding={15}
                        borderRadius={10}
                        flexDirection="column"
                        align="justify"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        border="default"
                        opacity= "0.95"
                        >
                            <Heading size={600} marginTop="-2rem" style={{width: "auto"}}>INDIVIDUALIZED TRAINING</Heading>
                            <Paragraph size={350} 
                            fontSize="1vw"
                            wordWrap="break-word"
                            marginTop="default" style={{ color: "white"}}>1. "This is PMP demystified. The lecturer was down-to-earth. He domesticated every scenario in a manner that is unprecedented. What a good way to teach. I feel like writing the exam immediately. Indeed, this is one of the best lessons I ever attended in my career"
                                        Prof. C. K. AyoFormer Vice Chancellor, Covenant University, Ota</Paragraph>
                            <Paragraph size={350} 
                            fontSize="1vw"
                            marginTop="default" style={{ color: "white"}}>
                            2. "It’s been very illuminating; the teaching style was very simplistic, generating the passion to be a PMP practitioner in order to begin to make needed impact as required"
                                Kings C. Akuma, Executive Director, Nest Oil Port Harcourt
                            </Paragraph>
                            <Paragraph size={350} 
                            fontSize="1vw"
                            marginTop="default" style={{width:"100%", color: "white"}}>
                            3. "The training was splendid. So much information but reduced to a body of very easy to understand information. I had never done project management training before, but I already feel like a professional. I do not have a doubt; the exam will be a walk over for me".Dr. Chris Williams,
                             Senior Pastor, Headstone Church, Ilupeju
                            </Paragraph>
                    </Pane>

                    <Pane
                        elevation={4}
                        backgroundColor="black"
                        height={448}
                        color="white"
                        margin={60}
                        padding={15}
                        borderRadius={10}
                        flexDirection="column"
                        align="justify"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        border="default"
                        opacity= "0.95"
                        >
                            <Heading size={600} marginTop="default" style={{}}>CORPORATE ORGANIZATION TRAINING</Heading>
                            <Heading size={600} marginTop="default" >PM Training@ LFC P/H</Heading>

                            <Paragraph 
                                size={400} 
                                fontSize="1vw"
                                marginTop="default" 
                                textOverflow="ellipsis"
                                style={{minWidth:"{100}",
                                 color: "white"}}

                            >
                                1. "The lecture though intensive was very elaborate, thorough, simplified and all encompassing. Though I have an M.Sc in Engineering Project and Systems Management from Kingston University London U.K. I make bold to say that the lecture style and deliverables are world class. I have been exposed to a whole lot of project management intricacies that I couldn’t even get during my M.Sc. programme in the UK. I am leaving this programme not only inspired but also equipped to be an exceptional Project Manager" 
                                AKPOBARO MESHACK OGHENEKEVWE,
                                Business Executive,P/H
                            </Paragraph>
                            <Heading size={600} marginTop="default" style={{}}>PM Training @ NLNG Bonny</Heading>
                            <Paragraph size={400} 
                                fontSize="1vw"
                            marginTop="default" style={{width: "auto", color: "white"}}>
                                2. "This is excellent impartation of knowledge. I am very proud for recommending Pst Seyi Macaulay to facilitate Project Management training in NLNG Bonny Island. This training is one of the best training my team members have attended. He passionately delivered his lecture and made PM concepts easily understood by all. I recommend Dreamyouth International for those who wants to make easy ride to success in project management". 
                                Eng Bernard Kadiri
                                Nigeria Liquefied Natural Gas, Bonny Island
                            </Paragraph>
                            <Heading size={600} marginTop="default" style={{}}>PM Training @ FMBN, Abuja</Heading>
                            <Paragraph size={400}    fontSize="1vw"

                            marginTop="default" style={{width: "auto", color: "white"}}>
                                3. "Thank you for this thought and inspiring piece you have painstakingly shared with us. I indeed look forward to great feats together. I appreciate God continue to inspire and spur you the more. God bless you sir"
                                Bawas M. J. 
                                Federal Mortage Bank of Nigeria (FMBN), Abuja
                            </Paragraph>
                    </Pane>

                    

                    <Pane clearfix
                        elevation={4}
                        backgroundColor="grey"
                        height={5500}
                        color="white"
                        margin={60}
                        align="center"
                        borderRadius={10}
                        flexDirection="column"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        border="default"
                        opacity= "0.89"
                        >
                            <Heading size={600} marginTop="default" style={{}}>EDUCATIONAL INSTITUTIONAL TRAINING</Heading>

                        <Heading size={600} marginTop="default" style={{}}> PM Training for Covenant University Students </Heading>

                            {/* -------------------------------------------- */}
                                    {/* Group image */}
                                    <img src={group_photo} alt=""/>
                            {/* ------------------------------------------- */}
                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={310}
                                color="white"
                                float="left"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={arausi} align="left" className="arausi"/>
                                <Paragraph size={400}
                                fontSize="1vw"
                                 marginTop="default" style={{width: "auto", color: "white"}}>Oghenefejiro Arausi went through our Project Management Training and with the knowledge and skills acquired, she applied for a project manager job in a software company and         she was preferred among all the applicants and was offered the job as a Project Manager at CKDigital             before graduation from the university. She graduated with a first class degree in  Chemical                      Engineering from the prestigious Covenant CU University Ota. She is among our success stories
                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={370}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={arausi_bro} align="left" className="arausi"/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>I want to say a very big thank you Pst. Macaulay for training me  on Project Management. I've come to realize the difference between a trainer and a lecturer. You are not just a lecturer but a trainer of destinies. One thing I learnt is your tireless passion in explaining every slide and correlating it with different scenarios. It has made me think strategically in handling projects and this is the one of the best trainings I've ever had. I look forward to undertaking massive projects of multi-national companies by applying the knowledge acquired from the PMP training with the Dream Youth International.
                                                                                                                    David Arausi
                                                                                                                    CU Student
                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={420}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={jaiye} align="left" className="arausi"/>
                                <Paragraph size={400}
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>"I have done some certification trainings and examinations like CCNA and autoCAD but this project management training is the most exciting and productive training I have ever done. The PMP training was done within one week but the amount of knowledge gained was as if I did the training for one month. During the PMP training with Dream Youth International, real life scenarios were painted for us to learn and this facilitated creative thinking and application. Sincerely, not even my 5-year B.SC classes in Computer Engineering can be compared to the 35 contact hour classes I received during this training. The training was truly fruitful and I recommend it for everyone regardless of the discipline of study".
                                                                                                                            Jaiyeola David Dideolu,
                                                                                                                            CU Graduate
                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={470}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={tomi} align="left" className="arausi"/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>"PMP Training with Dream Youth International was amazing! It was nothing like I've ever experienced before. I learnt a lot of vital things that are relevant in this project world of today and how to apply the global language of project management in various projects that I may venture into in the near future. During the training, I was not only equipped with project management skills, but with communication and interpersonal skills. Each day was certainly different from the previous. I truly enjoyed my PMP Training and would definitely recommend it to all!"
                                                                                                                            Olutomi Esuruoso,
                                                                                                                            First Class Economics 
                                                                                                                            Graduate CU <br />
                                                                                                                            <b>(Tomi secured an internship opportunity after her project management training and was asked to handle a project, which she did well. She won a £10,000 Scholarship of University of Leeds Business School, UK for her Masters degree in Economics)</b> 

                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={470}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={mimi} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>"The training was exquisite and time flew by! Content and presentation by the facilitator was consistently high quality and engaging. Most importantly, each session provided an excellent review of the challenges and opportunity inherent in each area - while challenging us to clarify and to find our own answers. I feel that the techniques used, the real life examples, the power-point were extremely good. At no point did I feel that the training was long or dragging on. Even after breaks/lunch, I felt that there was a lot of energy and enthusiasm. It is great to have a certified Project Management Professional with so much energy. I felt challenged and consistently drawn into the exercise and presentations had my full attention due to the way in which they were conducted. I found the course very useful and will hopefully be able to put it into practice. Thanks a lot!!!." 
                                                                        Miracle Anazodo
                                                                        CU Graduate

                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={550}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={book_cover} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>"The methodology approach adopted in this writing this book will facilitate quick and proper understanding of principles and concepts of project management. It will serve as a good manual for project management practitioners and it is particularly recommend for those who want to make easy ride to success at the PMP exam". 
Joseph Kikiowo MBA, PMP, LLB, MRICS, MCI Arc
NLNG, Bonny Island


"I took my time to study PMAC textbook was stuck by how simple he made the PMP body of knowledge appear in his book. I could tell that he has deep understanding of the subject matter. I highly recommend his book for anyone design to pass the exam" 
Kehinde Awolesi, B.Sc, PMP
Cannadian Embassy, Lagos

                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={490}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <Heading style={{}}>THE PROOFS</Heading>
                                <img src={seyi} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400}
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>My name is Oluseyi Macaulay, President, Dreamyouth International. My decision to become a certified Project Management Professional (PMP) was inspired by God through His word in Mathew 13:44 and Isaiah 60:3:

Matthew 13:44 says: "....the kingdom of heaven is like treasure hidden in a field, which a man found and hid; and for joy over it sells all that he has and buy that field" This scripture inspired me to sacrifice my car, comfort and pride and get focused to become certified project management professional. Isaiah 60:3: says, "And the Gentile shall come to thy light and kings to the brightness of thy rising" This scripture set me on to see the future of me becoming trainer of young professionals who will be raised as world class consultants and Pm trainers and contribute to the process of nation building. 

I invited one of my proteges, Tope Ojo, CEO of i-WET Consulting, to come and stay with me in Abuja and organize PM training. I was one of his trainnees in Abuja.  


                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={400}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <Heading style={{}}>DREAMYOUTH TRAINED - PMP CERTIFIED</Heading>
                                <img src={adeyemi} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>Mr. Saanumi Adeyemi PMP, was Dreamyouth International's first trained and mentored PMP trainee. His is the motivation for making Dreamyouth International achieve success in project management training. He helped in building our website to promote our brand online. He resigned his paid job immediately after he became certified PMP to start his own company- System-Gate Engineering. His project management skill has given SystemGate Engineering a competitive edge in her industry. He passed his exam in January 2014. 

                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={340}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={festus} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>Mr Festus Nwagbo PMP, an insurance consultant based in Lagos was trained and mentored for his PMP examination by Dreamyouth International. He had the opportunity of going through all our PM  materials throughout his personal study time and was able to develop enough confidence to write the exam. He passed his PMP examination in April 2014.  
                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={330}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={kehinde} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>Mr. Kehinde Awolesi PMP, was a volunteer staff with Dreamyouth International in Abuja and as a compensation for his hardwork was trained and provided with all our PM materials including the PMAC e-book to prepare for his PMP examination. He has worked in high profile organizations since his certified as project management professional including Canadian Embasy Lagos. he passed his PMP examination in December 2015. 
                                </Paragraph>
                            </Pane>

                            <Pane
                                elevation={4}
                                backgroundColor="black"
                                height={340}
                                color="white"
                                width={"100%"}
                                margin={24}
                                padding={15}
                                borderRadius={10}
                                flexDirection="column"
                                align="justify"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                border="default"

                            >
                                <img src={olowo} align="left" className="arausi" style={{borderRadius: '5%'}}/>
                                <Paragraph size={400} 
                                fontSize="1vw"
                                marginTop="default" style={{width: "auto", color: "white"}}>Mr. Asulikpo Olowolaiyemo PMP, was trained by Dreamyouth International in June 2014.  He worked as Training Coordinator with Dreamyouth International to package series of National Training Workshop on Internally Generated Revenue (IGR) for Tertiary Institution. He passed his PMP examination in September 2015. He is into private business and also facilitate for Dreamyouth International. 
                                </Paragraph>

                            </Pane>
                    </Pane>
            </ScrollAnimation>
        </div>
    )
}

export default Home