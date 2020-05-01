    //Detremine device type by user agent
    //Temporary solution does noo encompass many use cases where user agent is modified by requesting app
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
