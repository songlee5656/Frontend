import React, { useState } from 'react'
import Item from './Item'

const List = ({list}) => {
    console.log(list);

    /*
    <추가적인 작업>
    (1) 포지션이 MF인 선수만 나오는 배열을 생성
    - 기존의 배열에서 조건을 단 새로운 배열을 만들고 싶으면 사용 : filter
    (2) 만들어진 배열을 map함수로 뿌려주기
    */
    const mfList = list.filter(item=>item.position=="MF")
    console.log(mfList);
  


    // item={item} 이렇게 객체 상태로 하위 컴포넌트에 보낼 수도 있다.
    // key={index}를 작성해줘야 개발자모드에서 에러가 안뜬다!!
    // -> 하위 컴포넌트에서 따로 key값을 받을 필요는 없다.
  return (
    <div className='list-container'>
        <h1>KOREA REPUBLIC</h1>
        <div className='item-container'>
            {list.map((item, index)=><Item 
            key={index}
            name={item.name} 
            position={item.position} 
            imgSrc={"data:image/;base64,"+item.imgSrc}
            index={index}
            />)}
        </div>  
        <h1>MF</h1>

        <div className='item-container'>
            {list.map((item, index)=><Item 
            key={index}
            name={item.name} 
            position={item.position} 
            imgSrc={"data:image/;base64,"+item.imgSrc}
            index={index}
            />)}
         </div>   

    </div>
  )
}

export default List