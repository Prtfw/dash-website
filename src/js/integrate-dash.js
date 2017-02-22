;(function ($) {
	'use strict';
	$(document).ready(function () {
		autoPlayYouTubeModal();
		function autoPlayYouTubeModal() {
			console.log('automodal');
			var trigger = $('body').find('[data-toggle="modal"]');

			console.log('trigger',trigger.text());
			trigger.click(function () {
				console.log('this', this);
				var theModal = $(this).data('target'),
					videoSRC = $(this).attr('data-theVideo'),
					videoSRCauto = videoSRC + '?autoplay=0';

				console.log('theModal', theModal);
				console.log('videoSRC', videoSRC);
				console.log('videoSRCauto', videoSRCauto);


				$(theModal + ' iframe').attr('src', videoSRCauto);
				$(theModal).on('hidden.bs.modal', function () {
					$(theModal + ' iframe').removeAttr('src');
				});
			});
		}
	});
}(jQuery));


