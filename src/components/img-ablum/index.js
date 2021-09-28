import React, { memo } from 'react'
import { imgSize } from '../../utils/imgSize';
import { AblumWrapper } from './style'

export default memo(function AblumCoverImg(props) {
    const  { info, size = 130, width = 153, bgp = "-845px" } = props;

    return (
        <AblumWrapper size={size} width={width} bgp={bgp}>
            <div className="coverBox">
                <img src={imgSize(`${info.blurPicUrl}`,100)} alt="" />
                <div className="cover">
                    <div className="bottom">
                        <a href="javascript"> </a>
                    </div>
                </div>
            </div>
            <a href="javascript">{info.name}</a>
            <span>{info.artist.name}</span>

        </AblumWrapper>
    )
})
