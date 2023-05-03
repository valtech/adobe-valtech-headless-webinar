package com.adobe.valtech.headless.spa.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.valtech.headless.spa.core.models.Animal;
import com.adobe.cq.export.json.ComponentExporter;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { Animal.class,
    ComponentExporter.class }, resourceType = AnimalImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class AnimalImpl implements Animal {

    static final String RESOURCE_TYPE = "adobe-valtech-headless-spa/components/animal";

    @ValueMapValue
    private String src;

    @ValueMapValue
    private String label;
    
    @Override
    public String getSrc() {
        return src;
    }

    @Override
    public String getLabel() {
        return label;
    }

    @Override
    public String getExportedType() {
        return AnimalImpl.RESOURCE_TYPE;
    }
    
}
