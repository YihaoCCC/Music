import styled from "styled-components";
import rightImg from '@/assets/img/download.png'
import bannerControl from '@/assets/img/banner_sprite.png'

export const BgImg = styled.div`
    background: url(${props => props.bgImage}) center center/6000px;
`
export const TopBannerWrapper = styled.div`
    display: flex;

`


export const BannerRight = styled.div`
    width: 254px; 
    height: 285px;
    background-image: url(${rightImg}) ;
`

export const BannerLeft = styled.div`

    height: 285px;
    width: 730px;
    background: #fff;
   
    img{
            width: 100%;
            height: 285px;
        }
    
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${bannerControl});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`