package com.adobe.valtech.headless.spa.core.models;

import com.adobe.cq.dam.cfm.ContentFragment;
import org.apache.sling.api.resource.Resource;

public class Location {
    private String name;
    private String lat;
    private String lng;

    public Location(Resource resource) {
        ContentFragment locationFragment = resource.adaptTo(ContentFragment.class);
        name = locationFragment.getElement("name").getContent();
        lat = locationFragment.getElement("lat").getContent();
        lng = locationFragment.getElement("lng").getContent();
    }

    public String getName() {
        return name;
    }

    public String getLng() {
        return lng;
    }

    public String getLat() {
        return lat;
    }
}