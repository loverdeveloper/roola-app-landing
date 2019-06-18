import React, {useState} from 'react';
import logo from './assets/images/logo.svg';
import next from './assets/images/next.svg';
import android from './assets/images/android.svg';
import apple from './assets/images/apple.svg';
import googlePlay from './assets/images/googlePlay.svg';
import anardonoi from './assets/images/anardonoi.svg';
import par1 from './assets/images/particle.svg';
import par2 from './assets/images/Rectangle 3.svg';
import par3 from './assets/images/Rectangle 4.svg';
import par4 from './assets/images/Rectangle 5.svg';
import par5 from './assets/images/Rectangle 6.svg';
import './App.css';

function App() {
    const [messageState, setMessageState] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [text, setText] = useState("");
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function showMessage() {
        if (text!="" && validateEmail(text) && !messageState){
            setMessage("هممم، سپاس")
            setMessageState(true)
            setType("success")
            setText("")
            setTimeout(function () {
                setMessageState(false)
            },2590)
        } else if(!messageState){
            setMessage("ایمیلتون رو بنویسید :)")
            setMessageState(true)
            setType("error")
            setTimeout(function () {
                setMessageState(false)
            },2590)
        }
    }
    function setNewText(i){
        setText(i.target.value.toString())
    }
    return (
        <div className="container-fluid">
            <img src={logo} alt="logo" className="app-logo"/>
            <div className={"notification "+type} style={messageState?{display:"inherit"}:{display:"none"}}>
                {/*<img src={Mars} className="notificationIcon" alt=""/>*/}
                {message.toString()}
            </div>
            <div className="row">
                <div className="col-md-6 col-xl-6 col-sm-12">
                    <img src={par1} className="par1 par" alt=""/>
                    <img src={par2} className="par2 par" alt=""/>
                    <img src={par3} className="par3 par" alt=""/>
                    <img src={par4} className="par4 par" alt=""/>
                    <img src={par5} className="par5 par" alt=""/>
                    <div className="info">
                        <h2>آماده ورود به دنیای رولا هستید؟</h2>
                        <p>رولا به ایجاد بستری امن، با رابط کاربری زیبای خود تحولی در سیستم های مدیریت کلاس ایجاد کرده
                            است و شما نیز میتوانید با ما همراه باشید.</p>
                        <form action="#notifMe" onSubmit={showMessage}>
                            <div className="input-container">
                                <input disabled={false} autoFocus={true} type="email" value={text} onChange={setNewText} id="#notifMe" placeholder="در زمان انتشار من را مطلع کن"/>
                                <button className="next" type="submit">
                                    <img src={next} alt="next"/>
                                </button>
                            </div>
                        </form>
                        <div className="platform-logo">
                            <img src={apple} alt="ios"/>
                            <img src={android} alt="android"/>
                            <div className="row">
                                <div className="col">
                                    {/*<img src={anardonoi} className="img-fluid" alt="ios"/>*/}
                                </div>
                                <div className="col">
                                    {/*<img src={googlePlay} className="img-fluid" alt="ios"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-6 col-sm-12">
                    <div className="main">
                        <div className="app-container">
                            <div className="app under">
                                <div className="item">
                                    <div className="row">
                                        <div className="col">
                                            <div className="itm-img f"></div>
                                        </div>
                                        <div className="col-7">
                                            <div className="lazy first w-75"></div>
                                            <div className="lazy w-50"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="itm-img s"></div>
                                        </div>
                                        <div className="col-7">
                                            <div className="lazy first w-75"></div>
                                            <div className="lazy w-50"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="itm-img t"></div>
                                        </div>
                                        <div className="col-7">
                                            <div className="lazy first w-75"></div>
                                            <div className="lazy w-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="app upper">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="lazy pop first w-75"></div>
                                        <div className="lazy pop w-50"></div>
                                    </div>
                                    <div className="col">
                                        <div className="itm-img pop t"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="lazy pop first w-75"></div>
                                        <div className="lazy pop w-75"></div>
                                        <div className="lazy pop w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
