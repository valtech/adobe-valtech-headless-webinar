package com.adobe.valtech.headless.spa.core.models.impl;

import com.adobe.valtech.headless.spa.core.models.Event;
import com.adobe.valtech.headless.spa.core.models.Location;
import com.adobe.cq.dam.cfm.ContentFragment;
import com.adobe.cq.dam.cfm.content.FragmentRenderService;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Event.class, ComponentExporter.class},
        resourceType = EventImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class EventImpl implements Event {

    static final String RESOURCE_TYPE = "adobe-valtech-headless-spa/components/event";

    @ValueMapValue
    private String fragmentPath;

    @Inject
    private FragmentRenderService fragmentRenderService;

    @SlingObject
    private ResourceResolver resourceResolver;

    private String title;
    private String description;
    private String imageReference;

    private Location location;
    @PostConstruct
    protected void initialise() {
        String locationReferencePath = null;
        Resource contentFragmentResource = resourceResolver.resolve(fragmentPath);
        ContentFragment contentFragment = contentFragmentResource.adaptTo(ContentFragment.class);
        if (contentFragment != null) {
            locationReferencePath = contentFragment.getElement("location").getValue().getValue(String.class);
            title = contentFragment.getElement("title").getContent();
            description = contentFragment.getElement("description").getContent();
            imageReference = contentFragment.getElement("image").getContent();
        }

        if (locationReferencePath != null) {
            location = new Location(resourceResolver.resolve(locationReferencePath));
        }

    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getImageReference() {
        return imageReference;
    }

    @Override
    public String getExportedType() {
        return EventImpl.RESOURCE_TYPE;
    }

    @Override
    public Location getLocation() {
        return location;
    }


}
