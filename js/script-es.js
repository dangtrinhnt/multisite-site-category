/*
 * Add new field in /wp-admin/network/site-new.php
 * URI: http://stackoverflow.com/a/10372861/1287812
 */

(function($) {
    $(document).ready(function() {
        $('<tr class="form-field form-required"></tr>').append(
            $('<th scope="row">Categoría del sitio</th>')
        ).append(
            $('<td></td>').append(
                $('<input class="regular-text" type="text" title="Categoría del sitio" name="blog[site_category]">')
            ).append(
                $('<p></p>')
            )
        ).insertAfter('#wpbody-content table tr:eq(2)');

		
    });
})(jQuery);