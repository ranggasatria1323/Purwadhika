import { AiOutlineMenu } from "react-icons/ai"
import style from "./Nav.module.css"
import Logo from "./default-logo.png"
import Human from "./images/4131j-min.png"


export default function Nav(){
    return (<div>
        <div className={style['nav']}>
            <img className={style['logo']} src={Logo}></img>
            <AiOutlineMenu className={style['menu']} />
        </div>
        <div style={{backgroundColor:"#FDD460"}} className={style['block']}>
            <div className={style['cell']}>
                <div><img className={style['foto']} src={Human}></img></div>
                
            </div>
            <div className={style['cell2']}>
                <div className={style['intro']}>
                    <div className={style['box-hello']}>
                        <h1 className={style['hello']}>
                            <center>Hello!</center>
                        </h1>
                    </div>
                    <div className={style['content-intro']}>
                        I’m Jack Norton, a web Designer.
                    </div>
                    <div className={style['footer-intro']}>
                        Image from <u>FREEPIK</u>
                    </div>
                    <div>
                        <button><b>READ MORE</b></button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"#FFFFFF"}} className={style['block']}>
            <div className={style['profile']}>
                <div className={style['profile-text']}>
                    <center>
                    <p style={{fontWeight:450}}>PROFILE</p>
                    <div style={{fontSize:20, fontWeight:20}}>I'm a creative multitasking developer</div>
                    </center>
                </div>
                <div className={style['profile-body']}>
                    <div  className={style['about-me']}>
                        <div style={{fontSize:30, letterSpacing:0, marginLeft:"3%"}}>About me</div>
                        <div style={{fontSize:30, letterSpacing:0, marginLeft:"3%"}}>About me</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"#FDD460"}} className={style['block']}>

        </div>
    </div>)
}