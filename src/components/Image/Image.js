import React from 'react';



export default function Image({ image, itemProp }) {


    return (<img itemType="image" itemProp={itemProp} data-editor-itemfilter="images"
        className="Image-src"
        src={image._publishUrl}
        alt={image.alt}
        title={image.title} />);
}


