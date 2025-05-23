import React, {useState} from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

const services = ['Spotify', 'YouTube', 'Soundcloud', 'Deezer', 'Jamendo']


function Settings() {
    var settingsContent = <div>
        <div className = "Header">Accounts</div>
        <br/>
        <div className= "Services">
            {services.map((service) => (
                            <div className = "Link"> 
                <div>{service}</div> 
                <div className = "LinkArea">
                <div>unlinked</div>
                <div className = "LinkButton">Link Now<LaunchIcon/></div>
                </div>
            </div>
            ))}
        </div>

        <br/>
        <div className= "Header">Importance of Linking</div>
        <div className='Content'>To export playlists to other applications Syncify requires a linked account to each platform. 
            Linking can be done by clicking on one of the "Link Now" buttons above for each respective platform. After linking
            the link option will then be avalible for that platform.

        </div>
        </div>

    const [mainContent, setMainContent] = useState(settingsContent);

    const handleButtonClick = (type) => {
        switch(type) {
            case 'link':
                setMainContent(settingsContent)
                break;
            case 'appearence':
                setMainContent(<div>
                    <div className = "Header">App Purpose</div>
                    <div className= "Content">Delicious in Dungeon (Japanese: ダンジョン飯, Hepburn: Danjon Meshi, lit. "Dungeon Meal") is a Japanese manga series written and illustrated by Ryoko Kui. 
                        It was serialized in Enterbrain's seinen manga magazine Harta from February 2014 to September 2023, with its chapters collected in 14 tankōbon volumes. 
                        The story follows a group of adventurers in a fantasy world who, after failing to defeat a dragon that consumed one of their own, embark on a journey through a dungeon to revive her, 
                        surviving by cooking and eating the monsters they encounter along the way.</div>
                </div>)
                break;
            case 'account':
                setMainContent(<div>WIP</div>)
        }
    }

        return ( 
        <div className = "page-wrapper">
                <div className = "Leftbar">
                <div className = "Title">Settings</div>
                    <div className = "Buttons">
                        <button className = "Button" onClick = {() => handleButtonClick('link')}>Link Accounts</button>
                        <button className = "Button" onClick = {() => handleButtonClick('appearence')}>Appearance</button>
                        <button className = "Button" onClick = {() => handleButtonClick('account')}>Account</button>
                    </div>
                </div> 
                <div className = "Mainbox">{mainContent}</div>

                </div>
        )

}

export default Settings;