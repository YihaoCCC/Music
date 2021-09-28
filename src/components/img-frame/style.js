import styled from 'styled-components'
import RemBgImg from '@/assets/img/sprite_icon.png'
import FrameBg from '@/assets/img/sprite_cover.png'
export const ImgFrame = styled.div`
    width: 140px;
    height: 204px;
    margin: 10px 0;
    .imgBox {
        position: relative;
            &>img {
            width: 140px;
            height: 140px;
            }  
    }
    .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 140px;
            height: 140px;
            background: url(${FrameBg});
            background-position: 0 0 ;
                .bottom {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    background: url(${FrameBg});
                    background-position: 0 -537px;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 27px;
                    color: #ccc;
                    .listen {
                        margin: 8px 5px;
                        display: inline-block;
                        width: 14px;
                        height: 11px;
                        background: url(${RemBgImg});
                        background-position: 0 -24px;
                    }
                    a{
                        position: absolute;
                        right: 10px;
                        bottom: 5px;
                        width: 16px;
                        height: 17px;
                        background: url(${RemBgImg});
                        background-position: 0 0;
                    }
                 }
            }
    .title {
        a{
            color: #000;
            
            width: 100%;
        :first-child{
            margin-top: 6px;
            display: inline-block;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:   wrap;
            :hover{
                text-decoration: underline;
            }
        }
        

        }
        .auth {
           
            color: #666;
            font-size: 12px;
            :hover{
                text-decoration: underline;
            }
            span {
                color: #999;
            }
        
        }

    }

`