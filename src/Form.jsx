import React from "react";
export default function Mainbody() {
    // const [upperText, setUpperText] = React.useState("");
    // const [bottomText, setBottomText] = React.useState("");
    
    const [meme, setMeme] = React.useState({
        topText: "TOP TEXT",
        bottomText: "BOTTOM TEXT",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allurls, setAllurls] = React.useState([])
    const [count, setCount] = React.useState(0)

    function eventoccur(event){
        const {name, value} = event.currentTarget
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    React.useEffect(()=>{
        const arr=[]
        fetch("https://api.imgflip.com/get_memes").
        then(res=>res.json()).
        then(data=>data.data.memes.map((item)=>arr.push(item.url)));
        setAllurls(arr)
    },[])
    function getanother(){
        const random=Math.floor(Math.random()*100)
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                imageUrl: allurls[random]
            }
        })
    }
    
   
    return (
        <>
        <div className="container">
            <div>
                <label  htmlFor="up" className="label" >UPPERTEXT</label>
                <input type="text"   id="up" name="topText" placeholder="TOP TEXT" onChange={eventoccur} className="input-box"/>
            </div>  
            <div>
                <label  htmlFor="down" className="label">BOTTOMTEXT</label>
                <input  id='down' name='bottomText' type="text" placeholder="BOTTOM"className="input-box wide-input" onChange={eventoccur} />
            </div>
        </div>
        <button  onClick={getanother}className="btn">Click here to generate new image 🤙</button>
        <div className="hello">
        <img src={meme.imageUrl} alt="meme" className="meme" id="photo"/>
        <div className="upper-text">{meme.topText}</div>
        <div className="bottom-text" >{meme.bottomText}</div>
        </div>
        </>

    )
}