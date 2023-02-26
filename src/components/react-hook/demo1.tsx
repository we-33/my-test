import * as React from 'react';
import { createPortal } from 'react-dom';

const HookDemo1: React.FC = function(){

    const eleRef = React.useRef<HTMLDivElement|null>(null);

    console.log('元素：', eleRef);

    React.useEffect(()=>{
        if(!eleRef.current){
            console.log('创建元素');
            eleRef.current = document.createElement('div');
            document.body.appendChild(eleRef.current);
            eleRef.current.setAttribute('id','my-box');
        }
    }, [])

    return createPortal(<p>hhahah</p>, document.body);
}

export default HookDemo1;