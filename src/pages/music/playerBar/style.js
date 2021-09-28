import styled from 'styled-components'

export const PlayerWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 47px;
    background: radial-gradient(#00000075, #0000009e);
    .content {
        svg{
                cursor: pointer;
                & :hover {
                    fill :#fff;
                }
            }
        width: 980px;
        margin: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .leftIcons {
            width:120px;
            height: 47px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .playContent {
            display: flex;
            width:610px;
            align-items: center;
            img {
                margin-right: 10px;
                width: 34px;
                height: 34px;
            }
            .slider {
                display: flex;
                flex-direction: column;
                width: 100%;
                .singer {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #fff100b8;
                    height: 26px;
                    line-height: 26px;
                    span {
                        :last-child {
                            margin-left: 10px;
                            
                            color: #e8e8e8;
                        }
                    }
                }
                .play {
                    
                    .ant-slider {
                        
                        margin: 0 0 8px ;
                        .ant-slider-track {
                            
                            background-color: #fff100;
                        }
                            .ant-slider-handle {
                                border: solid 3px #fff100;
                        }
                    }
                    
                }
            }
            .time {
                width: 100px;
                margin-left: 20px;
                margin-top: 10px;
                color: #e8e8e8;
                font-size: 12px;
            }
            
        }
        .rightIcons {
            width: 205px;
            display: flex;
            justify-content: space-between;
            align-items: center;
           
        }
    }
`