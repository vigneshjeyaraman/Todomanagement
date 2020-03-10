import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from './Navbar'
import Footer from './Footer'
const Welcome = () => {
        const images = [
            { url: "todo1.png" },
            { url: "todo2.png" },
            { url: "todo3.png" },
            { url: "todo4.png" }
        ];
        return(
            <div>
                <Navbar />
                <br></br>
                <div className="Container">
                    <SimpleImageSlider
                        width={1435}
                        height={504}
                        images={images}
                    />
                </div>
                <Footer />
            </div>
        )
    }

export default Welcome