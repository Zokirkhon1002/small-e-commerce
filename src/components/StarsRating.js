import React from 'react';

const StarsRating = ({ stars}) => {
    let empty = "https://toppng.com/public/uploads/thumbnail/free-png-grey-star-png-images-transparent-grey-star-icon-11562980999vkwysxoqqk.png"
    let filled = "https://icon-library.com/images/yellow-star-icon/yellow-star-icon-4.jpg"
    const starArray = [];
    for (let i=0; i<5; i++) {
        starArray.push(stars > i);
    }

    return (
        <div className="starRating">
            {starArray.map((star,idx)=> (<img className="starss" key={idx} src={star?filled:empty} />))}
        </div>
    )
}

export default StarsRating
