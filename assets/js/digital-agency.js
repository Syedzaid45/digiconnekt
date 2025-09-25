(($ => {
    $(window).on('load', () => {
		setTimeout(() => {
			$('.custom-hero-bg').addClass('loaded');
		}, 500);
	
	});

	// Check if GSAP is loaded
	if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

		/*
			Circle Expand
			*/
			var generateCircleExpand = () => {

				let section = document.getElementById('circleSection'),
				    dot = document.getElementById("circleDot");

				gsap.set(dot, {
				    width: "142vmax",
				    height: "142vmax",
				    xPercent: -50,
				    yPercent: -50,
				    top: "50%",
				    left: "50%"
				});

				let tl1 = gsap.timeline({
					    	scrollTrigger: {
						        trigger: section,
						        start: "-50%",
						        end: "0%",
								scrub: 2, 
						        invalidateOnRefresh: true,
						    },
						    defaults: {
						        ease: "none"
						    }
						});

				tl1
				    .fromTo(dot, {
				        	scale: 0
					    }, {
					        x: 0,
					        y: 0,
					        ease: "power3.in",
					        scale: 1
					    });

			}

			// Dummy generateScroller function to avoid error
			var generateScroller = () => {
				// ...implement as needed...
			};

			// Init GSAP Elements
			generateScroller();
			generateCircleExpand();

		} else {
			if (typeof theme !== 'undefined' && theme.fn && typeof theme.fn.showErrorMessage === 'function') {
				theme.fn.showErrorMessage(
					'Failed to Load File',
					'Failed to load: GSAP - Include the following file(s): (vendor/gsap/gsap.min.js)'
				);
			} else {
				console.error('Failed to load: GSAP - Include the following file(s): (vendor/gsap/gsap.min.js)');
			}
		}
})).apply( this, [ jQuery ]);
