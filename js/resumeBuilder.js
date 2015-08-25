/*
This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName = HTMLheaderName.replace("%data%","Chen Li");
var formatedRole = HTMLheaderRole.replace("%data%","Front End Developer");
$("#header").prepend(formatedRole);
$("#header").prepend(formattedName);

var bio={
	"name":"Chen Li",
	"role":"technical support",
	"contacts": {
		"mobile":"215-285-2867",
		"email":"chenliupenn@gmail.com",
		"github":"lichen122",
		"twitter":"@neverknow122",
		"location":"Los Angeles,CA"
	},
	"welcomeMessage":"welcome to my page!",
	"skills":[
		"JavaScript","GIS","Technical Support","Application Development"
	],
	"bioPic":"images/my_picture.jpg"
};
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
for(var i =0;i<bio.skills.length;i++){
	$("#header").append(HTMLskills.replace("%data%",bio.skills[i]));
}

var work={
	"jobs":[
		{
			"position":"Programming Support Analyst",
			"Employer" : "ESRI",
			"dates" : "Sep 2014 - Now",
			"location" :"Redlnads,CA",
			"description":"<p> •  Provide world-class technical support to end users of Esri software to effectively diagnose and resolve incidents.</p>"+
						"<p> •  Identify, understand, and recommend solutions for customer issues by means of ArcGIS technologies.</p>"+
						"<p> •  Testing workflows, reviewing recorded finding and then logging software bugs.</p>"
		},{
			"position":"GIS Application Developer",
			"Employer" : "GeoDecisions, Gannett Fleming",
			"dates" : "Feb 2013 - Sep 2014",
			"location":"Philadelphia, PA",
			"description":"<p> •  Work as part of a software development team to develop mapping solutions based on client requirements. Participate in application requirements and design review meetings.</p>" +
                          "<p> •  Worked as core developer for national emergency management and accomplished 85% GIS web functionalities using HTML/CSS, JavaScript and ASP.NET MVC framework.</p>"+
                          "<p> •  Testing workflows, reviewing recorded finding and then working  to resolve defects(JIRA).</p>"+
                          "<p> •  Created database tables and PL/SQL packages for managing attributes and locations of emergency resources.</p>"+
                          "<p> •  Analyze the feasibility of software enhancement requests. Execute testing workflows on code and record findings. </p>"+
                          "<p> •  Attend project status meetings as required. </p>"
		},{
			"position":"Research Assistant ",
			"Employer" : "The Wharton School of the University of Pennsylvania",
			"dates" : "Oct 2012 – Dec 2012",
			"location":"Philadelphia, PA",
			"description":"<p> •  Developed a bidding software independently in Java/J2ME which improved the efficiency of price competition.</p>" +
                          "<p> •  Implemented the open/seal auction algorithm using Java Wireless Toolkit on CLDC platform.</p>"+
                          "<p> •  Performed text parsing, file storage, and periodic messaging with SMSLib API on GSM modem. </p>"
		},{
			"position":"GIS Web Development Intern",
			"Employer" : "ESRI",
			"dates" : "Jun 2012 – Sep 2012",
			"location":"Redlands, CA",
			"description":"<p> •  Built the website UI for a mapping agency that provided advanced GIS printing using JavaScript API and Dojo Toolkit. </p>" +
                          "<p> •  Created PyUnit test cases, improved 30% test coverage and revealed bugs of ArcMap Desktop 10 and performed ad hoc testing for website.</p>"
		},{
			"position":"GIS Volunteer ",
			"Employer" : "USGS",
			"dates" : "Dec 2012 - Jan 2013",
			"location":"Philadelphia, PA",
			"description":"<p> •  Conducted data mining that enabled editing of data from the National Structures Dataset within Colorado.</p>" +
                          "<p> •  Collected demographic, educational, and climatic data to The National Map Corps project.</p>"+
                          "<p> •  Increased data points from 2600 to 4678 and improved the number of topographic quads from 30 to 253.</p>"
		}
	]
}


for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].Employer));
	$(".employer:last").append(HTMLworkTitle.replace("%data%",work.jobs[job].position));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));

}



var projects={
	"projects":[
		{
			"title":"Arcade Game (Javascript, HTML5)",
			"dates" : "Aug 2015",
			"image" :["images/arcadegame.png"],
			"description":"<p> •  Developed an Arcade Game using Object Oriented Javascript and HTML5</p>"+
						  "<p> •  http://lichen122.github.io/ArcadeGame/</p>"
        },
		{
			"title":"GIS Web Application for Travel Routing Analysis  (ActionScript, Flex)",
			"dates" : "May 2012",
			"image" :["images/project.jpg","images/default_profile_photo.png"],
			"description":"<p> •  Developed a web app on ArcGIS Server that could generate the optimized traveling route given points of interest.</p>"+
						  "<p> •  Hosted New York network dataset on ArcGIS Server and implemented TSP algorithm with enumeration.</p>"
		},{
			"title":"MedSearch - JavaScript Project on Amazon EC2(JavaScript, HTML/CSS, php, Google Maps API)",
			"dates" : "Oct 2011",
			"image" :[],
			"description":"<p> •  Developed a search application on Amazon EC2 that supported searching, routing and geocoding of medical resources.</p>"+
						  "<p> •  Published spatial data on ArcGIS server, queried database in PHP/MySQL and implemented GIS functionalities using JavaScript API and Google Maps API.</p>"
		},{
			"title":"Hackthon Project (AngularJS, JavaScript, Postman)",
			"dates" : "Apr 2014",
			"image" :[],
			"description":"<p> •  Built a website (http://www.messagelaunch.com) on Amazon EC2 that could send messages as rapid response to emergency.</p>"+
						  "<p> •  Implemented front-end functionalities such as csv/audio file upload, data filtering and geodata display.</p>"
		},{
			"title":"Web Game on Google App Engine ( HTML/CSS,MySQL,jQuery,JavaScript)",
			"dates" : "May 2012",
			"image" :["images/project.jpg"],
			"description":"<p> •  Implemented a multiplayer web game in which players throw dice and buy lands to get rich.</p>"+
						  "<p> •  Engineered animations in JavaScript, created UI in HTML/CSS, and rendered graphics in Photoshop</p>"
		}
	]
}

for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
	$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
	if(projects.projects[project].image.length > 0){
		for(image in projects.projects[project].image){
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].image[image]));
		}
	}

}

var education={
	"schools":[
		{
			"name":"University of Pennsylvania",
			"degree":"Master",
			"dates" : "Sep 2011 - Jun 2012",
			"location":"Philadelphia,PA",
			"major":"Urban Spatial Analytics"
		},{
			"name":"Wuhan University of Technology",
			"degree":"Bachelor",
			"dates" : "Sep 2007 - Jun 2011",
			"location":"Wuhan, China",
			"major":"Geographic Information System"
		}
	]
}

for(school in education.schools){
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name));
	$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
	$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));


}

function locationizer(work){
	var locationArray = [];
	for(job in works.jobs){
		var newlocation = work.jobs[job].location;
		locationArray.push(newlocation);
	}
	return locationArray;
}
function inName(name){
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

require(["esri/map","esri/layers/GraphicsLayer", "esri/geometry/Point","esri/symbols/PictureMarkerSymbol",
	"esri/symbols/SimpleMarkerSymbol",
	"esri/graphic","dojo/domReady!"],
	function(Map,GraphicsLayer,Point,PictureMarkerSymbol,SimpleMarkerSymbol,graphic) {
  var map = new Map("map", {
    center: [-172.675567, 38.432848],
    zoom: 3,
    basemap: "topo"
  });
  var graphicLayer = new GraphicsLayer();
  map.addLayer(graphicLayer);
  var symbol = new PictureMarkerSymbol("images/map_pin.png",50,50);
  graphicLayer.add(new graphic(new Point(-117.190939, 34.065655), symbol));
  graphicLayer.add(new graphic(new Point(-75.158545, 39.993181), symbol));
  graphicLayer.add(new graphic(new Point(116.431791, 39.907288), symbol));
  graphicLayer.add(new graphic(new Point(114.285965, 30.589989), symbol));
});