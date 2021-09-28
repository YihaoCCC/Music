import styled from 'styled-components'

import buttonPlay from '@/assets/img/index.png'
import coverBg from '@/assets/img/sprite_cover.png'
import iconAddTo from "@/assets/img/sprite_icon2.png"

export const RankingWrapper = styled.div`
    flex: 1;
    a {
        :hover {
            text-decoration: underline;
        }
    }
    .header {
        padding: 20px 0 0 20px;
        height: 120px;
        display: flex;
        justify-content: space-between;
        .imgBox {
            position: relative;
            width: 80px;
            height: 80px;
            .cover {
                position: absolute;
                width: 80px;
                height: 80px;
                background: url(${coverBg});
                background-position: -1px  -894px;
            }
            img {
                width: 80px;
                height: 80px;
            }
            
        }
        .header-left {
            color: #333;
            font-weight: bold;
            width: 116px;
            height: 50px;
            margin: 6px 0 0 10px;
            .buttons {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 8px;
                a {
                    display: inline-block;
                        width: 22px;
                        height: 22px;
                        text-indent: -9999px;
                        background: url(${buttonPlay}) no-repeat 0 9999px;

                    :first-child {
                        background-position: -267px -205px;
                        margin-right: 10px;
                    }
                    :last-child {
                        background-position: -300px -205px;
                    }

                }
            }
        }
    }
    
    .songItem {
        position: relative;
            font-size: 12px;
            padding-left: 20px;
            height: 32px;
            line-height: 32px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        :hover {
            .operate {
                position: absolute;
                right: 0;
                top:0px;
                display: inline-block;
            }
            span {
                width: 96px;
                cursor: pointer;
                text-decoration: underline;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
            .number {
                font-size: 16px;
                text-align: center;
                display: inline-block;
                width: 35px;
            }
            span{ 
                display: inline-block;
               width: 170px; 
                
            }
            
           
            .operate {
                display: none  ; 
                width: 80px;
                
                a{ 
                    width: 17px;
                    height: 17px;
                    margin: 6px 10px 0 0px;
                }
                button {
                    width: 17px;
                    height: 17px;
                    margin: 6px 10px 0 0px;
                    border: none;
                }
                .play {
                    width: 17px;
                    height: 17px;
                    background: url(${buttonPlay}) no-repeat 0 9999px;
                    display: inline-block;
                    background-position: -267px -268px;
                }
                .addto {
                    width: 17px;
                    height: 17px;
                    background: url(${iconAddTo}) no-repeat 0 9999px;
                    display: inline-block;
                    margin-top: 11px;
                    background-position: 0 -700px;
                }
                .favor {
                    width: 17px;
                    height: 17px;
                    background: url(${buttonPlay}) no-repeat 0 9999px;
                    display: inline-block;
                    background-position: -297px -268px;
                    margin-right: 0;
                }

            }
    }
    
    
`