console.log('This would be the main JS file.');

// Parallax effect
jQuery(function($) {
	// Enable parallax and fade effects on homepage sections
	$(window).scroll(function() {
		scrolltop = $(window).scrollTop()
		scrollwindow = scrolltop + $(window).height();
		$(".home-section-1").css("backgroundPosition", "50% " + -(scrolltop / 6) + "px");
		if ($(".home-section-3").length) {
			sectionthreeoffset = $(".home-section-3").offset().top;
			if (scrollwindow > sectionthreeoffset) {
				// Enable parallax effect
				backgroundscroll = scrollwindow - sectionthreeoffset;
				$(".home-section-3").css("backgroundPosition", "50% " + -(backgroundscroll / 6) + "px");
			}
		}
		if ($(".home-section-5").length) {
			sectionfiveoffset = $(".home-section-5").offset().top;
			if (scrollwindow > sectionfiveoffset) {
				// Enable parallax effect
				backgroundscroll = scrollwindow - sectionfiveoffset;
				$(".home-section-5").css("backgroundPosition", "50% " + -(backgroundscroll / 6) + "px");
			}
		}
	});
});

google.load('visualization', '1', {packages: ['geochart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Universities');
    data.addRows([		  ["Argentina",102  ],
		  ["Austria",17  ],
		  ["Belgium",10  ],
		  ["Bolivia",50  ],
		  ["Brazil",153  ],
		  ["Chile",57  ],
		  ["China",2146  ],
		  ["Colombia",110  ],
		  ["Costa Rica",48  ],
		  ["Czech Republic",13  ],
		  ["Denmark",7  ],
		  ["Dominican Republic",26  ],
		  ["Ecuador",52  ],
		  ["El Salvador",23  ],
		  ["Estonia",9  ],
		  ["France",241  ],
		  ["Germany",70  ],
		  ["Greece",47  ],
		  ["Greenland",1  ],
		  ["Guatemala",11  ],
		  ["Honduras",12  ],
		  ["Hong Kong",7  ],
		  ["Hungary",19  ],
		  ["Ireland",48  ],
		  ["Israel",34  ],
		  ["Italy",51  ],
		  ["Jamaica",6  ],
		  ["Luxembourg",2  ],
		  ["Mexico",334  ],
		  ["Nicaragua",34  ],
		  ["Norway",13  ],
		  ["Panama",20  ],
		  ["Paraguay",9  ],
		  ["Peru",58  ],
		  ["Poland",49  ],
		  ["Portugal",66  ],
		  ["Puerto Rico",15  ],
		  ["Russia",386  ],
		  ["Serbia",10  ],
		  ["Slovakia",33  ],
		  ["Slovenia",4  ],
		  ["South Africa",1  ],
		  ["Spain",50  ],
		  ["Sweden",29  ],
		  ["Switzerland",30  ],
		  ["The Netherlands",61  ],
		  ["The United Kingdom",286  ],
		  ["Turkey",3  ],
		  ["Ukraine",133  ],
		  ["United States",4617  ],
		  ["Uruguay",6  ],
		  ["Venezuela",42  ]
    ]);
    
    var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
google.visualization.events.addListener(chart, 'select', function() {
        var selectionIdx = chart.getSelection()[0].row;
        var countryName = data.getValue(selectionIdx, 0);
        window.open('http://en.wikipedia.org/wiki/' + countryName);
    });    
    var options = {
        backgroundColor: '#ffffff',
	    legend: 'none',
	    datalessRegionColor: '#F3F2ED',
	    colorAxis: {minValue: 0, maxValue: 1,  colors: ['#F3F2ED', '#D86A6B']},
        height: 500,
        width: 900,
        region: 'world',
        tooltip: {isHtml: true},
    };
    
    $('a').click(function () {
        options.region = $(this).attr('region');
        chart.draw(data, options);
    });
    
    chart.draw(data, options);
}
