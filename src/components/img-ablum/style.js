import styled from "styled-components";
import RemBgImg from '@/assets/img/sprite_icon.png'
import coverBg from '@/assets/img/sprite_cover.png'

export const AblumWrapper = styled.div`
    width:  ${props => props.width + "px"};
    display: inline-block;
    .coverBox {
        position: relative;
        width:  ${props => props.width + "px"};
        height: ${props => props.size + "px"};
       
        .cover {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width:  ${props => props.width + "px"};;
            height: ${props => props.size + "px"};
            background: url(${coverBg});
            background-position: 0 ${props => props.bgp};
            box-shadow:0 20px 6px -15px #9999;
            
        }
        :hover {
                a{
                    position: absolute;
                        right: 10px;
                        bottom: 5px;
                        left: 72px;
                        width: 22px;
                        height: 22px;
                        background: url(${RemBgImg});
                        background-position: 0 -85px;
                }
            }
    }
    a {
        margin-top: 5px;
        font-size: 12px;
        width: 100%;
        display: block;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    span {
        color:#666;
        width: 100%;
        font-size: 12px;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; 
        overflow: hidden;//两行后开始隐藏文字
    }
   
`