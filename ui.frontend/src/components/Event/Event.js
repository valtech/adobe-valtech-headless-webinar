import React, { Component } from "react";
import Image from "../Image/Image";
import Text from "../Text/Text";

import { MapTo } from "@adobe/aem-react-editable-components";
import Weather from "../Weather/Weather";

import "./Event.scss";

export const EventEditConfig = {
  emptyLabel: "Event",

  isEmpty: function (props) {
    return !props || !props.title;
  },
};

export default function Event(props) {
    if (EventEditConfig.isEmpty(props)) {
        console.log('Event is empty')
        return null;
    }

    let locationName;
    if (props.location) {
        locationName = props.location.name;
    }
    return (
      <div className="event">
        <div className="event__header">
            <h2>{props.title} {locationName ? ' in ' + locationName : ''}</h2>
        </div>
        <div className="event__image">
          {props.imageReference ? (
            <Image src={props.imageReference} />
          ) : null}
        </div>
        <div className="event__weather">
          <Weather location={props.location} />
        </div>
        <div className="event__description">
          {props.description ? (
            <Text text={props.description} richText={true} />
          ) : null}
        </div>
      </div>
    );
}

MapTo("adobe-valtech-headless-spa/components/event")(Event, EventEditConfig);
