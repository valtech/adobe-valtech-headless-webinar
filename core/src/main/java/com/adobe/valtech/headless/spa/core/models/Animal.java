package com.adobe.valtech.headless.spa.core.models;

import org.osgi.annotation.versioning.ProviderType;

import com.adobe.cq.wcm.core.components.models.Component;

@ProviderType
public interface Animal extends Component{

    public String getSrc();

    public String getLabel();

}

