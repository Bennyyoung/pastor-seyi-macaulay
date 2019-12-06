import React from "react";
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import Gallery from "react-grid-gallery";


const About = () => {
    const IMAGES1 =
        [{
                src: "https://2.bp.blogspot.com/-qVa-eO6THR8/U0ujU6OefyI/AAAAAAAAANc/i_MizJo7WwM/s1600/DSCF3182.JPG",
                thumbnail: "https://2.bp.blogspot.com/-qVa-eO6THR8/U0ujU6OefyI/AAAAAAAAANc/i_MizJo7WwM/s1600/DSCF3182.JPG",
                thumbnailWidth: 330,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
                src: "https://1.bp.blogspot.com/-ExlUVeGM5SA/U0ukFumAjlI/AAAAAAAAANk/s6JtugyVRVc/s1600/IMG_1556.JPG",
                thumbnail: "file://https://1.bp.blogspot.com/-ExlUVeGM5SA/U0ukFumAjlI/AAAAAAAAANk/s6JtugyVRVc/s1600/IMG_1556.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
                src: "https://3.bp.blogspot.com/-qT5So-lMKzY/U0umQ-ZjisI/AAAAAAAAAOE/tCj9exm8jrg/s1600/photo+%25287%2529.JPG",
                thumbnail: "https://3.bp.blogspot.com/-qT5So-lMKzY/U0umQ-ZjisI/AAAAAAAAAOE/tCj9exm8jrg/s1600/photo+%25287%2529.JPG",
                thumbnailWidth: 320,
                thumbnailHeight: 212
        },

        {
            src: "https://4.bp.blogspot.com/-Km-uuJ5RPPw/U0ukoV8Z_mI/AAAAAAAAANs/u48SgMEroa4/s1600/IMG_1563.JPG",
            thumbnail: "https://4.bp.blogspot.com/-Km-uuJ5RPPw/U0ukoV8Z_mI/AAAAAAAAANs/u48SgMEroa4/s1600/IMG_1563.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://3.bp.blogspot.com/-6jmR_2xCt0U/U0upUGEn5kI/AAAAAAAAAOY/NyPLwm091Xk/s1600/photo+%252823%2529.JPG",
            thumbnail: "https://3.bp.blogspot.com/-6jmR_2xCt0U/U0upUGEn5kI/AAAAAAAAAOY/NyPLwm091Xk/s1600/photo+%252823%2529.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://3.bp.blogspot.com/-0LjY7etv3ic/U0ulCyb1XGI/AAAAAAAAAN0/mhtnaVSfDvc/s1600/IMG_1628.JPG",
            thumbnail: "https://3.bp.blogspot.com/-0LjY7etv3ic/U0ulCyb1XGI/AAAAAAAAAN0/mhtnaVSfDvc/s1600/IMG_1628.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://1.bp.blogspot.com/-njfvC9RjebM/U0umAsCXvXI/AAAAAAAAAN8/t7X9qPt6Qzo/s1600/Facilate.JPG",
            thumbnail: "https://1.bp.blogspot.com/-njfvC9RjebM/U0umAsCXvXI/AAAAAAAAAN8/t7X9qPt6Qzo/s1600/Facilate.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://3.bp.blogspot.com/-g9C_JoVFCpE/U0uptJIAFfI/AAAAAAAAAOg/FwbghZAaTJM/s1600/photo+%252812%2529.JPG",
            thumbnail: "https://3.bp.blogspot.com/-g9C_JoVFCpE/U0uptJIAFfI/AAAAAAAAAOg/FwbghZAaTJM/s1600/photo+%252812%2529.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }

    ]

    const IMAGES2 =
    [{
            src: "https://2.bp.blogspot.com/-coWHSj_Hn7U/U0s5TEo7CiI/AAAAAAAAAME/JLjTwxIoegk/s1600/JOLLY+PIC1.JPG",
            thumbnail: "https://2.bp.blogspot.com/-coWHSj_Hn7U/U0s5TEo7CiI/AAAAAAAAAME/JLjTwxIoegk/s1600/JOLLY+PIC1.JPG",
            thumbnailWidth: 620,
            thumbnailHeight: 150,
            isSelected: false,
            caption: "After Rain (Jeshu John - designerspics.com)"
    }
    ]

    const IMAGES3 =
    [{
            src: "https://2.bp.blogspot.com/-IOK9Dq4TkbE/U0s5zBnEG0I/AAAAAAAAAMU/qHOSKmxBzeM/s1600/robotics+education1.JPG",
            thumbnail: "https://2.bp.blogspot.com/-IOK9Dq4TkbE/U0s5zBnEG0I/AAAAAAAAAMU/qHOSKmxBzeM/s1600/robotics+education1.JPG",
            thumbnailWidth: 620,
            thumbnailHeight: 150,
            isSelected: false,
            caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "http://2.bp.blogspot.com/-bC9Xt7JSGn8/U0u3XPbIxbI/AAAAAAAAAO0/wy_PtcNtPbk/s1600/robot3.JPG",
        thumbnail: "http://2.bp.blogspot.com/-bC9Xt7JSGn8/U0u3XPbIxbI/AAAAAAAAAO0/wy_PtcNtPbk/s1600/robot3.JPG",
        thumbnailWidth: 620,
        thumbnailHeight: 150,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
{
    src: "http://1.bp.blogspot.com/-wucfp3f8vVE/U0u3g2ceYYI/AAAAAAAAAO8/VOWxIJ1JuNQ/s1600/robot.JPG",
    thumbnail: "http://1.bp.blogspot.com/-wucfp3f8vVE/U0u3g2ceYYI/AAAAAAAAAO8/VOWxIJ1JuNQ/s1600/robot.JPG",
    thumbnailWidth: 620,
    thumbnailHeight: 150,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)"
},
{
    src: "http://4.bp.blogspot.com/-KvCdqHyOj3g/U0u3lnp2oFI/AAAAAAAAAPE/MZp-ILus0BA/s1600/robot2.JPG",
    thumbnail: "http://4.bp.blogspot.com/-KvCdqHyOj3g/U0u3lnp2oFI/AAAAAAAAAPE/MZp-ILus0BA/s1600/robot2.JPG",
    thumbnailWidth: 620,
    thumbnailHeight: 150,
    isSelected: false,
    caption: "After Rain (Jeshu John - designerspics.com)"
}
    ]


    return (
        <div>
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
                    <Heading size={500} marginTop="default" style={{width: "auto", background: 'linear-gradient(to top, #ffe838, #fd57bf)'}}>ABOUT DREAMYOUTH INTERNATIONAL</Heading>
                    <Paragraph size={350} 
                    fontSize="1vw"
                    wordWrap="break-word"
                    marginTop="default" style={{width:"100%", color: "white"}}>Dreamyouths International is a social entrepreneurship organization with interest in project management, education and youth development with the vision to inspire, educate and empower our younger generation to lead in their areas of calling</Paragraph>

                    <Heading size={500} marginTop="default" style={{width: "auto", background: 'linear-gradient(to top, #ffe838, #fd57bf)'}}>PROJECT MANAGEMENT</Heading>
                    <Paragraph size={350} 
                    fontSize="1vw"
                    marginTop="default" style={{width:"100%", color: "white"}}>
                    Dreamyouths International believes in the skillful development of the upcoming leaders and that is why we have made project management training our core assignment.  Our mission in project management is to lead the corporate world through project management
                    </Paragraph>
            </Pane>

            <Gallery clear='left' images={IMAGES1}/>


            <Pane

                elevation={9}
                backgroundColor="black"
                height={230}
                color="white"
                // margin={60}
                // padding={15}
                borderRadius={10}
                flexDirection="column"
                align="justify"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
                opacity= "0.95"
                >
                    <Heading size={500} marginTop="default" style={{width: "auto", background: 'linear-gradient(to top, #ffe838, #fd57bf)'}}>LITERACY EDUCATION</Heading>
                    <Paragraph size={350} 
                    fontSize="1vw"
                    wordWrap="break-word"
                    marginTop="default" style={{width:"100%", color: "white"}}>Dreamyouths International is championing the promotion of literacy education through her teacher training program for schools. We have developed G-Phonics for adult education literacy program.  We are committed to training school teachers in literacy education  in order to promote literacy level of our children and adults who are having problem with reading. </Paragraph>

            </Pane>
                    <Gallery images={IMAGES2}/> 
            <Pane

                elevation={9}
                backgroundColor="black"
                height={230}
                color="white"
                // margin={60}
                // padding={15}
                borderRadius={10}
                flexDirection="column"
                align="justify"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="default"
                opacity= "0.95"
                >

                    <Heading size={500} marginTop="default" style={{width: "auto", background: 'linear-gradient(to top, #ffe838, #fd57bf)'}}>ROBOTICS EDUCATION</Heading>
                    <Paragraph size={350} 
                    fontSize="1vw"
                    wordWrap="break-word"
                    marginTop="default" style={{width:"100%", color: "white"}}>We are in partnership with Oysterbay Integrated Services, USA to pioneer the development of Robotics Education in Nigeria. Our mission in Robotics Education is to use the excitement of Robotics to teach our children to complex concept of Science, Technology, Engineering and Mathematics (STEM).</Paragraph>

            </Pane><br />
            <Gallery images={IMAGES3}/>


        </div>
    )
}

export default About