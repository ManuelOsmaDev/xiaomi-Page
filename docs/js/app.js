//libreria de fullpage

const SeccionPage = new fullpage('#fullpage',{
		 autoScrolling: true,
		 fitToSection: false, 
		 fitToSectionDelay: 300, 
		 easing: 'easeInOutCubic', 
		 scrollingSpeed: 700, 
		 css3: true, 
		 easingcss3: 'ease-out',
		 loopBottom: false, 

         navigation: true, 
		 menu: '#menu', 
		 anchors: ['inicio', 'productos', 'Mas','acerca-nosotros'],
		 navigationTooltips: ['Inicio', 'Productos', 'Mas','acerca-nosotros'],
		 showActiveTooltip: false,
		 verticalCentered: true, 

}
);

// libreria de typedJS

const typed = new Typed('.typed',{
	strings: [ 'Colombia',
	           'Argentina',
			   'Peru',
			   'Mexico',
			   'Paraguay',
			   'Ecuador'
	],
	stringsElement: '#cadenas-texto', 
	typeSpeed: 75, 
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: true,
	backDelay: 2000, 
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
})

