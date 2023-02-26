import * as React from 'react';
import './../style.css';

interface IFirstLetter{
    text: string;
}

const FirstLetter: React.FC<IFirstLetter> = (props) => {
    console.log('属性');
    return (
        <div className='textBox'>
            <p className='text'>{ props.text }</p>
            <img  className="test-path" alt='' src={ 'https://ts1.cn.mm.bing.net/th?id=OIP-C.eSS4x40qTlliW4ftI7-RNAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' } />
            <img className='test-clip' alt=''
            src='https://ts3.cn.mm.bing.net/th?id=OIP-C.kw9Pt3w3B8oaS_uR09csKQHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
            />
        </div>
    )
}

export { FirstLetter }