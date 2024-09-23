import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"
import { Context } from '../../context/context'

const Main = () => {

  const [extended, setExtended] = useState(false)
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input, isDark} = useContext(Context)

  return (
    <div className='main' data-theme={isDark ? 'dark' : 'light'}>
        <div className="nav">
            <p>Gemini</p>
            <div className="user-icon">
                <img onClick={()=>setExtended(prev=>!prev)} src={assets.user_icon} alt="" />
                {extended ?
                <div className="profile-setting">
                    <p>Profile</p>
                    <p>Logout</p>
                </div>
                : null }
            </div>
        </div>
        <div className="main-container" data-theme={isDark ? 'dark' : 'light'}>

            {!showResult ? 
                <>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={isDark ? assets.light_compass_icon : assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={isDark ? assets.light_bulb_icon : assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={isDark ? assets.light_message_icon : assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the follow code</p>
                            <img src={isDark ? assets.light_code_icon : assets.code_icon} alt="" />
                        </div>
                    </div>
                </>
                : 
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={isDark ? assets.light_gemini_icon : assets.gemini_icon} alt="" />
                        {loading ? 
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
            }

            <div className="main-bottom" data-theme={isDark ? 'dark' : 'light'}>
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={isDark ? assets.light_gallery_icon: assets.gallery_icon} alt="" />
                        <img src={isDark ? assets.light_mic_icon : assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} src={isDark ? assets.light_send_icon : assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main