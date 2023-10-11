import React from 'react'
import List from './List'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Item = ({name, position, imgSrc, index}) => {
    
    /*
    프로필 카드 클릭 시 해당하는 선수의 상세 페이지로 이동
    /detail/index
    => useNavigate 사용
    */

    /*
    백틱(``) : 템플릿 문자열
             - 백틱 안에 있는 글자-> 문자열로 인식
             - 백틱 안에서 ${변수} -> 변수 인식
    */
    const nav = useNavigate();

  return (
    <div className='item-item'  onClick={()=>{
        //React->Spring 데이터 전송
        console.log("detail 요청");
        let url='http://localhost:8089/SpringBoot2/PlayerDetail.do?name='+name;

        axios.get(url)
        .then((res)=>{

            console.log(res.data);  // 나사홍의 정보
        });

        nav(`/detail/${index}`)}}
    >
        <img src={imgSrc} />
        <table>
            <tbody>
                <tr>
                    <td>이름</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>포지션</td>
                    <td>{position}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Item