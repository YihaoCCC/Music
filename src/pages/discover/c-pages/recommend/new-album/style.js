import styled from 'styled-components'

export const NewAblumContent = styled.div`
    margin: 10px 0 20px 0;
    background: #f5f5f5;
    box-sizing: border-box;
    display: flex;
    border: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px 10px 10px;
    svg {
        cursor: pointer;
        :hover {
            fill: #666;
        }
    }
    .ant-carousel {
        width: 94%;
        .page{
            display: flex !important;
            justify-content: space-between;
        }
    }
`