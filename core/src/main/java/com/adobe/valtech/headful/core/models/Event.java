package com.adobe.valtech.headful.core.models;

import com.adobe.cq.wcm.core.components.models.Component;
import org.osgi.annotation.versioning.ProviderType;

@ProviderType
public interface Event extends Component {

    String getTitle();
    String getDescription();
    String getImageReference();

    Location getLocation();
}
