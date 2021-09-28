import React, { memo } from 'react'
import { RemHeader } from './style'
export default memo(function RemThemeHeader(props) {

    const { title, links } = props
//     const [links, setlinks] = useState([{
//         title: '华语',
//     },{
//         title: '流行',
//     },
//     {
//         title: '摇滚',
//     },
//     {
//         title: '民谣',
//     },
//     {
//         title: '电子',
//     }

// ])

    return (
        <RemHeader>
           <div className="left">
                <h2 style={{marginTop:'5px'}}>{title}</h2>
                {
                    links.map( (item, index) => {
                        return <a key={index} className='item' href='javascrit:;' >{item.title}</a>
                    })
                }
           </div>
           <div className="right">
               <a href="javascrit:;">更多</a>
               <span className = 'icon'></span>
           </div>
        </RemHeader>
    )
})
