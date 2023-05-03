import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./Image.scss');

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

export default function Image(props) {
        return props.src ? <img
                className="Image-src"
                src={props.src}
                alt={props.alt}
                title={props.title ? props.title : props.alt} /> : null


}

MapTo('adobe-valtech-headless-spa/components/image')(Image, ImageEditConfig);
