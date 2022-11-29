import React, {useState} from 'react';

function AboutUs() {

    const[text, setText]=useState(true)
    const getText =()=>{
       setText(!text)

    }
    return (
        <div>
            {
                text &&
                (<p>Текст</p>)
            }
            <button onClick={getText}>кнопка</button>
        </div>
    );
}

export default AboutUs;