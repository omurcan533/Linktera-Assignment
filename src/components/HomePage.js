import React from 'react';
import './HomePage.css';
import { FaBars } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";

import duyurularPng from '../images/2020 başvuru_duyuru.png';
import duyurularRight from '../images/duyurularRight.png';
import haber1 from '../images/haber1.png';
import haber2 from '../images/haber2.png';
import haber3 from '../images/haber3.png';
import haber4 from '../images/haber4.png';
import person from '../images/kisi.png';
import dogumGunuSend from '../images/dogumGunuSend.png';
import ilan1 from '../images/ilan1.png';
import ilan2 from '../images/ilan2.png';
import dahaFazlasıLogo from '../images/play_arrow-24px.png';

const HomePage = () =>{
return(
    <div className="home" >
        <header className="header"> 
            <h2 style={{position:"relative",left:25,color:"royalblue",top:5}}>Merhaba Deniz Hoşgeldin !</h2>
            <div style={{position:"relative",padding:10,top:13,left:180}}>
                <input type="text" style={{padding:7,borderRadius:45,borderColor:"royalblue",width:"140%",backgroundColor:"#dbe7ec "}}/>
                <FaSistrix style={{position:"relative",left:180,bottom:26,fontSize:20,color:'royalblue'}}/>
            </div>
            <FaBars style={{position:"relative",top:26,right:25,fontSize:26,color:'royalblue'}}/>
        </header>

        <div>
            <img className="duyurularPng" src={duyurularPng}/>
            <h3 style={{position:"absolute",left:"13cm",top:"13vh"}}>DUYURULAR</h3>
            <img style={{position:"absolute",right:"34%",top:"33%"}} src={duyurularRight}/>
            
            <div>
                <div className="haberler" >
                <p style={{position:"relative",left:"32%",top:"91%" ,fontSize:"12px"}}>Daha Fazlası  </p>
                <img style={{background:"gray", position:"absolute", height:"4%",width:"2%",bottom:"5mm",left:"87%"}} src={dahaFazlasıLogo}/>
                </div> 
                <div>
                    <img className="haber1" src={haber1}/>
                    <div >
                        <h5 style={{font:"inherit",position:"relative",right:"23pc",bottom:"26pc"}}>Veri Analitiği Etkinliği </h5>
                        <p id="haber1">Lorem ipsum dolor sit amet consectetuer adipiscing elit.Lorem ipsum dolor sit amet</p>
                    </div>    
                </div>
                <img className="haber2" src={haber2}/>
                <div>
                    <h5 style={{font:"inherit",position:"relative",bottom:"41pc",left:"7ch"}}>Kış Sporları Kulübü Palandöken'de</h5>
                    <p id="haber2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet</p>
                </div>
                <img className="haber3" src={haber3}/>
                <div>
                    <h5 style={{font:"inherit",position:"relative",right:"22pc",bottom:"48pc"}}>Yelken Kulübü Antrenmanda!</h5>
                    <p id="haber3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet</p>
                </div>
                <h3 style={{position:"absolute",left:"29pc",top:"60%",color:"darkblue"}}>HABERLER</h3>
                <img className="haber4" src={haber4}/>
                <div>
                    <h5 style={{font:"inherit",position:"relative",left:"1pc",bottom:"63pc"}}>Veri Analitiği Etkinliği</h5>
                    <p id="haber4" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet</p>
                </div>
            </div> 
        </div>

        <div className="dogumGunleri"> 
            <div id="dogumGunleriPng" >
                <img style={{height:70,width:75,margin:"1pc"}}src={person}/>
                <img style={{height:70,width:75,margin:"1pc"}}src={person}/>
                <img style={{height:70,width:75,margin:"1pc"}}src={person}/>
            </div>
            <h3 style={{position:"absolute",top:"0cm",left:"1pc",color:"darkblue"}}>DOĞUM GÜNLERİ</h3>
            <div id="dogumGunleriText">
                <h4 style={{height:70,width:120,margin:"2pc"}}> LOREM İPSUM<p style={{fontSize:"7px",position:"relative",right:"3mm"}}>loremipsum@linktera.com.tr</p><p style={{fontSize:"9px",position:"relative",right:"3mm"}}>Doğum Gününü Kutla!</p><img id="dogumGunuSend" src={dogumGunuSend}/></h4>

                <h4 style={{height:70,width:120,margin:"2pc"}}> LOREM İPSUM<p style={{fontSize:"7px",position:"relative",right:"3mm"}}>loremipsum@linktera.com.tr</p><p style={{fontSize:"9px",position:"relative",right:"3mm"}}>Doğum Gününü Kutla!</p><img id="dogumGunuSend" src={dogumGunuSend}/></h4>

                <h4 style={{height:70,width:120,margin:"2pc"}}> LOREM İPSUM<p style={{fontSize:"7px",position:"relative",right:"3mm"}}>loremipsum@linktera.com.tr</p><p style={{fontSize:"9px",position:"relative",right:"3mm"}}>Doğum Gününü Kutla!</p> <img id="dogumGunuSend" src={dogumGunuSend}/> <p style={{position:"relative",left:"3mm",bottom:"4mm" ,fontSize:"12px"}}>Daha Fazlası  </p>
                <img style={{background:"gray", position:"absolute", height:"4%",width:"8%",top:"97%",left:"38mm"}} src={dahaFazlasıLogo}/> </h4>
            </div>
        </div>

        <div className="aramızaKatılanlar"> 
            <div id="dogumGunleriPng" >
                <img style={{height:70,width:75,margin:"1pc"}}src={person}/>
                <img style={{height:70,width:75,margin:"1pc"}}src={person}/>
                <img style={{height:70,width:75,margin:"1pc"}}src={person}/>
            </div>
            <h4 style={{position:"absolute",bottom:"19pc",left:"1pc",color:"darkblue"}}>ARAMIZA KATILANLAR</h4>
            <div id="dogumGunleriText">
                <h4 style={{height:70,width:120,margin:"2pc"}}> LOREM İPSUM<p style={{fontSize:"7px",position:"relative",right:"3mm"}}>loremipsum@linktera.com.tr</p></h4>
                <h4 style={{height:70,width:120,margin:"2pc"}}> LOREM İPSUM<p style={{fontSize:"7px",position:"relative",right:"3mm"}}>loremipsum@linktera.com.tr</p></h4>
                <h4 style={{height:70,width:120,margin:"2pc"}}> LOREM İPSUM<p style={{fontSize:"7px",position:"relative",right:"3mm"}}>loremipsum@linktera.com.tr</p> <p style={{position:"relative",left:"3mm",top:"2mm" ,fontSize:"12px"}}>Daha Fazlası  </p>
                <img style={{background:"gray", position:"absolute", height:"4%",width:"8%",bottom:"10mm",left:"38mm"}} src={dahaFazlasıLogo}/> </h4>
            </div>
        </div>

        <div className="takvim"> 
            <div>
                <h2></h2>
            </div>
            <h3 style={{position:"absolute",bottom:"9pc",left:"4pc",color:"darkblue"}}>ŞUBAT</h3>
        </div>

        <div className="acıkPozisyonlar"> 
            <div>
                
            </div>
            <h4 style={{position:"absolute",bottom:"12pc",color:"darkblue"}}>AÇIK POZİSYONLAR</h4>
        </div>

        <div className="acıkPozisyonlar2"> 
            <div id="acıkPozisyonlar2"  >
                <h4 style={{position:"relative",top:"1mm"}}>Senior.Net Software Developer <hr/></h4>
                <h4 style={{position:"relative",bottom:"2mm"}}>Senior.Net Software Developer <hr/></h4>
                <h4 style={{position:"relative",bottom:"5mm"}}>Senior.Net Software Developer <hr/></h4>
                <p style={{position:"relative",left:"20mm",bottom:"7mm" ,fontSize:"12px"}}>Daha Fazlası  </p>
                <img style={{background:"gray", position:"absolute", height:"5%",width:"8%",bottom:"11mm",left:"38mm"}} src={dahaFazlasıLogo}/>
            </div>
        </div>

        <div className="ilanlar"> 
            <div id="ilanlar2">
                <img style={{height:85,width:145,margin:"1pc"}}src={ilan1}/>
                <img style={{height:85,width:145,margin:"1pc"}}src={ilan2}/>
                <p style={{position:"relative",left:"3mm",bottom:"5mm" ,fontSize:"12px",color:"gray"}}>Daha Fazlası  </p>
                <img style={{background:"gray", position:"absolute", height:"5%",width:"8%",bottom:"8mm",left:"38mm"}} src={dahaFazlasıLogo}/>
            </div>
            <h3 style={{position:"absolute",bottom:"83%",color:"darkblue",right: "48%",}}>İLANLAR  </h3>
            
        </div>
    </div>
)
}
export default HomePage;