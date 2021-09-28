import styled from 'styled-components'
import headerImg from '@/assets/img/sprite_02.png'
export const RemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    font-size: 12px;
    color: #333;
    padding: 0 10px 0 34px;
    background: url(${headerImg}) no-repeat 0 9999px;
    background-position: -225px -156px;
    .left {
        
        h2{
            display: inline;
            margin-right: 10px;
        }
        .item {
            a {
                color: #666;
            }
           margin:0 10px; 
            ::after {
               content: '|';
               margin-left: 10px;
           }
          
            :last-child {
                ::after{
                    content: ' ';
                }
            }
        }
    }
    .right {
        .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: url(${headerImg}) no-repeat 0 9999px;
            background-position: 0 -240px;
        }
    }
    a{
        font-size: 12px;
        color: #333;
    }
`