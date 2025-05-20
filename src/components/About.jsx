import React, {useState} from 'react';


function About() {
    var aboutContent = <div>
                    <div className = "Header">General Information</div>
                    <div className = "Content">The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. 
                        The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. 
                        A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. 
                        The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. 
                        On your mark. Get ready!… Start. ding﻿
                        </div>
                        <br/>
                    <div className = "Header">Centralized Playlisting</div>
                    <div className = "Content">Jones debuted in 1998 and competed for various independent promotions before gaining initial mainstream exposure in World Championship Wrestling (WCW) in 2001. 
                        He gained prominence after signing with Total Nonstop Action Wrestling (TNA) having been described as "the cornerstone of the company since its inception";
                        [6] he won the TNA World Heavyweight Championship twice. </div>
                </div>
    const [mainContent, setMainContent] = useState(aboutContent);

    const handleButtonClick = (type) => {
        switch(type) {
            case 'about':
                setMainContent(aboutContent)
                break;
            case 'purpose':
                setMainContent(<div>
                    <div className = "Header">App Purpose</div>
                    <div className= "Content">Delicious in Dungeon (Japanese: ダンジョン飯, Hepburn: Danjon Meshi, lit. "Dungeon Meal") is a Japanese manga series written and illustrated by Ryoko Kui. 
                        It was serialized in Enterbrain's seinen manga magazine Harta from February 2014 to September 2023, with its chapters collected in 14 tankōbon volumes. 
                        The story follows a group of adventurers in a fantasy world who, after failing to defeat a dragon that consumed one of their own, embark on a journey through a dungeon to revive her, 
                        surviving by cooking and eating the monsters they encounter along the way.</div>
                </div>)
                break;
            case 'github':
                setMainContent(<div>
                    <div className = "Header">Project Repository</div>   
                    <div className = "Content">https://github.com/oleedee/Syncify</div><br/>
                    <div className = "Header">Developers</div>
                    <div className = "Content">https://github.com/TheBryanSmith<br/>
                        https://github.com/oleedee</div> 
                               
                </div>
                )
                break;
        }
    }
    
    return ( 
        <div className = "page-wrapper">
                <div className = "Leftbar">
                <div className = "Title">About</div>
                    <div className = "Buttons">
                        <button className = "Button" onClick={() => handleButtonClick('about')}>About Syncify</button>
                        <button className = "Button" onClick={() => handleButtonClick('purpose')}>Purpose</button>
                        <button className = "Button" onClick={() => handleButtonClick('github')}>Github</button>
                    </div>
                <div className = "Sidebox">Updates
                </div>
                </div> 
                <div className = "Mainbox">
                    {mainContent}
                </div>
                </div>
        );
}

export default About;