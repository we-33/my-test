import * as React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './book.css';

const Book: React.FC = function(){
    return (
        <>
            <div className='book-container'>
            <HTMLFlipBook 
            className={'myBook'} 
            style={{}}
            startPage = { 0 } 
            size={'stretch'} 
            width={ 600 } 
            height={ 400 } 
            minWidth={ 400 } 
            maxWidth={ 600 } 
            minHeight={ 200 } 
            maxHeight={ 500 } 
            drawShadow={ true } 
            flippingTime={ 1000 } 
            usePortrait={ false } 
            startZIndex={ 0 } 
            autoSize={ true } 
            maxShadowOpacity={0.3} 
            showCover={ true } 
            mobileScrollSupport={ false } 
            clickEventForward={ false } 
            useMouseEvents={ true } 
            swipeDistance={100} 
            showPageCorners={ true } 
            disableFlipByClick={ false }>
                <div className='demo'>Page1</div>
                <div className='demo'>Page2</div>
                <div className='demo'>Page3</div>
                <div className='demo'>Page4</div>
                <div className='demo'>Page5</div>
                <div className='demo'>Page6</div>
                <div className='demo'>Page7</div>
            </HTMLFlipBook>
        </div>
        <div className='control'>
            
        </div>
        </>
    )
}

export { Book };