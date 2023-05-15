import React,{ useState, useEffect } from 'react';

const LoadImage = (props) => {
    const [image, setImage] = useState('');
  
    const loadImage = imageUrl => {
      import(`../asset/${imageUrl}`).then(image => {
        setImage(image.default);
      });
    };
  
    useEffect(() => {
      loadImage(props.imageUrl || props.src);
    }, [image, props.imageUrl, props.src]);

    return (
        image && <img src={image} alt={props.alt} loading='lazy' height={props.height} width={props.width} className={props.className} style={props.style}/>
    )
}

export default LoadImage;