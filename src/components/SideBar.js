import React from 'react';
import './SideBar.css';
import LogoLinktera from '../images/Linktera_Ailem_Logo.png';
import LogoKisi from '../images/people-profile-icon_24877-40756.png';
import LogoRight from '../images/play_arrow-1.png'; // büyük logo
import cikisİmagee from '../images/cikis1.png';
import LogoDown from '../images/play_arrow-24px.png'; 
import LogoRight2 from '../images/keyboard_arrow_right-2.png'; // küçük logo(alt seçenek olan logo)
const SideBar = () =>{
return(
    <div className="contoinerr" >
        <div className="ustBar">
            <img className="image" src={LogoLinktera} />
            <img className="image" src={LogoKisi}/>
            <div className="ustbar-name-design">
                <h1 style={{marginBottom:1,color:"white"}}>Deniz Arkan</h1>
                <p style={{marginTop:1,color:"white"}}>Computer Engineer</p>
            </div>
           
        </div>

        <div style={{flexDirection:"column",display:"flex"}} className="ortaBar"> 
            <div className="logoText"> 
                <img className="LogoRight" src={LogoDown}/>    
                <h3 className="textColor">Linktera Hakkında</h3>
            </div> 

            <ul>
                <div className="logoText">
                    <img className="LogoRight2" src={LogoRight2}/>
                    <p style={{marginTop:0,color:"white",marginTop:2}} >Linktera Web Sitesi</p>
                </div>
                <div className="logoText">
                    <img className="LogoRight2" src={LogoRight2} style={{position:"relative",bottom:20}}/>
                    <p style={{marginTop:0,color:"white",marginTop:2,position:"relative",bottom:20}}>Linkedln Hesabı</p>
                </div>
                <div className="logoText">
                    <img className="LogoRight2" src={LogoRight2} style={{position:"relative",bottom:40}}/>
                    <p style={{marginTop:0,color:"white",marginTop:2,position:"relative",bottom:40}}>YouTube Kanalı</p>
                </div>
                <div className="logoText">
                    <img className="LogoRight2" src={LogoRight2} style={{position:"relative",bottom:60}}/>
                    <p style={{marginTop:0,color:"white",marginTop:2,position:"relative",bottom:60}}>Oryantasyon Sunumu</p>
                </div>
            </ul>

            <div className="logoText" style={{position:"relative", bottom:90}}>
                <img className="LogoRight" src={LogoRight}/>
                <h3 className="textColor">Zaman Girişi</h3>
            </div>
            <div className="logoText" style={{position:"relative", bottom:90}}>
                <img className="LogoRight" src={LogoRight}/>
                <h3 className="textColor">İzinlerim</h3>
            </div>
            <div className="logoText"style={{position:"relative", bottom:90}}>
                <img className="LogoRight" src={LogoRight}/>
                <h3 className="textColor">Bilgi Bankası</h3>
            </div>
            <div className="logoText"style={{position:"relative", bottom:90}}>
                <img className="LogoRight" src={LogoRight}/>
                <h3 className="textColor">Arge Portalı</h3>
            </div>
            <div className="logoText"style={{position:"relative", bottom:90}}>
                <img className="LogoRight" src={LogoRight}/>
                <h3 className="textColor">Mesajlar</h3>
            </div>
            <div className="logoText"style={{position:"relative", bottom:90}}>
                <img className="LogoRight" src={LogoRight}/>
                <h3 className="textColor">Yardım</h3>
            </div>
        </div>
        
        <div className="altBar">
            <p style={{flex:1,marginLeft:80,color:"white",position: "relative",bottom:8}}>Çıkış <img className="cikisİmagee" src={cikisİmagee} style={{position:"relative",top:14,left:10}}/></p>
            
        </div>
        
    </div>
)
}
export default SideBar;