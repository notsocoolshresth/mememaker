import imgs from './mad-trollge.gif';


export default function Header(){

    return (
        <header >
            <img src={imgs} alt="meme" width={75}/>
            <h1>Meme Generator</h1>
        </header>
    )

}