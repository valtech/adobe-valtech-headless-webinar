(function() {
    "use strict";

    // Best practice:
    // For a good separation of concerns, don't rely on the DOM structure or CSS selectors,
    // but use dedicated data attributes to identify all elements that the script needs to
    // interact with.
    var selectors = {
        self:      '[data-cmp-is="cmp-event"]'
    };

    function Event(config) {

        function init(config) {
            // Best practice:
            // To prevents multiple initialization, remove the main data attribute that
            // identified the component.
            config.element.removeAttribute("data-cmp-is");
            var weatherElement = config.element.getElementsByClassName('event__weather')[0];

            var lat = weatherElement.dataset.lat;
            var lng = weatherElement.dataset.lng;

            fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
            ).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data.current_weather.temperature);
                weatherElement.append(`${data.current_weather.temperature} °C`);
            });



            if (console && console.log) {
                console.log(
                    "Event component",
                    "lat=", lat,
                    "lng=", lng
                );
            }
        }

        if (config && config.element) {
            init(config);
        }
    }

    // Best practice:
    // Use a method like this mutation obeserver to also properly initialize the component
    // when an author drops it onto the page or modified it with the dialog.
    function onDocumentReady() {
        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new Event({ element: elements[i] });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body             = document.querySelector("body");
        var observer         = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new HelloWorld({ element: element });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true, 
            childList: true,
            characterData: true
        });
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

}());
