(function ($) {
    $(document).ready(function () {
        $('.ju-top-tabs .link-tab').click(function () {
            var href = $(this).attr('href').replace(/#/g, '');
            $('.wpms_hash').val(href);
        });

        $('.wpms-notice-dismiss').on('click', function () {
            $('.saved_infos').slideUp();
        });

        $('.tabs.ju-menu-tabs .tab a.link-tab').on('click', function () {
            var href = $(this).attr('href').replace(/#/g, '');
            window.location.hash='#' + href;
            setTimeout(function () {
                $('#' + href + ' ul.tabs').itabs();
            }, 100);
        });

        jQuery('.wp-meta-seo_page_metaseo_settings .ju-setting-label').qtip({
            content: {
                attr: 'data-alt'
            },
            position: {
                my: 'bottom center',
                at: 'center center'
            },
            style: {
                tip: {
                    corner: true
                },
                classes: 'metaseo-qtip qtip-rounded'
            },
            hide: {
                fixed: true,
                delay: 1
            }

        });

        $('.wpms-settings-dismiss').click(function() {
            $(this).parent('.save-settings-mess').hide('fade');
        });
    });
})(jQuery);