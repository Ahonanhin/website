import React, {useState, useEffect} from "react";
import "./IntroPane.css";

export default function IntroPane() {
    
    const scrollToNext = () => {
        window.scrollTo({  
            top: 700,  
            behavior: 'smooth'
        });
    }

    const greetings = [
        { language: "English", greeting: "Hello" },
        { language: "French", greeting: "Bonjour" },
        { language: "Ewe", greeting: "Woezɔ̃"},
        { language: "Spanish", greeting: "Hola" },
        { language: "Chinese", greeting: "你好" },
        { language: "Japanese", greeting: "こんにちは" },
        { language: "Hindi", greeting: "नमस्ते" },
        { language: "Korean", greeting: "안녕하세요" },
        { language: "Portuguese", greeting: "Olá" }, 
        { language: "German", greeting: "Hallo" },
        { language: "Italian", greeting: "Ciao" },
        { language: "Arabic", greeting: "مرحبا" },
        { language: "Turkish", greeting: "Merhaba" },
        { language: "Yoruba", greeting: "Kaabo" }
    ];


    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 2000); 

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText((prevText) => prevText + greetings[index].greeting[charIndex]);
            setCharIndex((prevCharIndex) => prevCharIndex + 1);
        }, 100); // Add a new character every 100ms
    
        return () => clearTimeout(timeout); // Clear timeout on component unmount
    }, [text, charIndex]);

    return (
        <>
            <div className="intro_pane">
                <div className="intro_pane_greetings">
                    <p>{greetings[index].greeting}</p>
                </div>
                <div className="scroll-downs" onClick={scrollToNext}>
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                </div>
            </div>
        </>
    );
}