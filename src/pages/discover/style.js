import styled from "styled-components";

export const DiscoverWrapper = styled.div`

`

export const TopMenu = styled.div`
    background: #C20C0C;
    height: 35px;
`
export const MenuItem = styled.div`
    padding-left: 120px;
    .active {
        span {
                background: #000;
                background-color: rgba(0,0,0,0.2);
                color: #fff;
                border-radius: 10px;
                
        }
    }
    .discoverTopItem {
        display: inline-block;
        font-size: 12px;
        width: 83px;
        text-align: center;
        color:#fff;
        text-decoration: none;
        &:hover {
            span {
                background: #000;
                background-color: rgba(0,0,0,0.2);
                color: #fff;
                border-radius: 10px;
            }
        }
        span{
            display: block;
            box-sizing: border-box;
            margin:5px 10px 5px 10px ;
            cursor: pointer;
        }
    }
`