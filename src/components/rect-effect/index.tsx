import * as React from 'react';
import './index.css';
import MyString from './String';

interface toolProp{
    theme: string;
}

interface btnProp extends toolProp{
    text: string;
}

const CompEffect = function(){
    let myString = new MyString('chenx');
    console.log( myString );
    
    return (
        <div>
            <ToolBar theme='Red'></ToolBar>
        </div>
    )
}

const ToolBar: React.FC<toolProp> = function(props){

    return (
        <div className={ 'toolBtns' }>
            <ThemeButton theme={ props.theme } text = {'首页'}/>
            <ThemeButton theme = { props.theme }  text = { 'JQuery' }/>
        </div>
    )

}

class ThemeButton extends React.Component<btnProp> {
    render(): React.ReactNode {
        return (
            <div className='btn-container'>
                <button className={this.props.theme}>
                    { this.props.text }
                </button>
            </div>
        )
    }
}

export { CompEffect };