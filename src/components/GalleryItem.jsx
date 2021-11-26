import {useState} from 'react';
import axios from 'axios';

function GalleryItem({item}) {
    const [showText, setShowText] = useState(item.display)
    const [likeAmount, setLikeAmount] = useState(item.likes)

    const displayText = () => {
        if (showText){
            console.log(showText)
            return <div onClick={flipDisplay}>{item.description}</div>
        }else{
            return <div><img onClick={flipDisplay} src={item.path}/> </div>
        }
    }


    const flipDisplay = () => {
        if (showText) {
            setShowText(false);
        } else {
            setShowText(true);
        }
    };

    function addLike () {
        axios.put(`/gallery/like/${item.id}`).then(response =>{
            setLikeAmount(likeAmount + 1)
        })
    }








    return (
    <td>
        {displayText()}
        <div><button onClick={addLike}>Like!</button></div>
        Total likes :{likeAmount}
    </td>
    )
}


export default GalleryItem;