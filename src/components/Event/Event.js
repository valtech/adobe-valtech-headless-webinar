import React, { Component } from "react";
import Image from "../Image/Image";
import Text from "../Text/Text";

import Weather from "../Weather/Weather";

import "./Event.scss";

export const EventEditConfig = {
  emptyLabel: "Event",

  isEmpty: function (props) {
    console.log(props)
    return !props || !props.title;
  },
};

export default class Event extends Component {

  render() {

    console.log('start render Event')
    if (EventEditConfig.isEmpty(this.props)) {
      console.log('Event is empty')
      return null;
    }

    const editorProps = {
      itemID: "urn:aemconnection:" + this.props._path + "/jcr:content/data/master",
      itemType: "reference",
      itemfilter: "cf"
    };

    return (
      <div {... editorProps} itemScope className="event">
        <div className="event__header">
          <h2 itemType="text" itemProp="title">{this.props.title}</h2>
        </div>
        <div className="event__image">
          {this.props.image ? (
            <Image itemProp="image" image={this.props.image} />
          ) : null}
        </div>
        <div className="event__weather">
          <Weather location={this.props.location} />
        </div>
        <div className="event__description">
          {this.props.description ? (
            <Text editorProps={editorProps} text={this.props.description.html} richText={true} />
          ) : null}
        </div>
      </div>
    );
  }
}

