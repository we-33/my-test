import React from "react";
import './showcolor.css';
function ShowColor(){
    function getText():any {
        fetch('https://search.zongheng.com/search/default')
        .then((res)=>{
            console.log('请求结果：', res);
            return res.json();
        })
        .then((json)=>{
            console.log('json:', json)
        })
        .catch((err)=>{
            console.log('请求错误', err);
        }).finally(()=>{
            console.log('最后--------');
        })
    }
    
    getText();
    return (
        <div className="show-box">
            <div className="left">
                <div className="btn-box">
                    旋转发光
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}

export { ShowColor }