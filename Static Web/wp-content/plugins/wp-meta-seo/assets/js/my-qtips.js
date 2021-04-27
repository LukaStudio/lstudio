jQuery(document).ready(function ($) {
    jQuery('.label-dash-widgets').qtip({
        content: {
            attr: 'data-alt'
        },
        position: {
            my: 'bottom left',
            at: 'top center'
        },
        style: {
            tip: {
                corner: true
            },
            classes: 'wpms-widgets-qtip'
        },
        hide: {
            fixed: true,
            delay: 1
        }
    });

    jQuery('.wpms_dash_widgets').qtip({
        content: {
            attr: 'data-alt'
        },
        position: {
            my: 'bottom center',
            at: 'top center'
        },
        style: {
            tip: {
                corner: true
            },
            classes: 'wpms-widgets-qtip'
        },
        hide: {
            fixed: true,
            delay: 1
        }
    });

    jQuery('.intro-topic-tooltip').qtip({
        content: {
            attr: 'data-alt'
        },
        position: {
            my: 'top center',
            at: 'bottom center'
        },
        style: {
            tip: {
                corner: true
            },
            classes: 'wpms-widgets-qtip'
        },
        hide: {
            fixed: true,
            delay: 1
        }
    });
});