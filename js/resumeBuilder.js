// Base contact information

var bio = {
	"name": "Janet S. Bell",
	"role" : "Information Technology Professional",
	"contacts" : {
		"mobile": "555-555-3620",
		"email" : "janetsbell@gmail.com",
		"github" : "janbell",
		"twitter" : "@janbell",
		"location" : "Denver, CO"
	},
	"picture" : "https://media.licdn.com/media/p/5/005/03f/11a/2b917aa.jpg",
	"welcome" : "Whether you are a small business seeking short-term professional assistance with technology or a large corporation requiring deep project and management skills, I can help. Available for long- or short-term contracts.",
	"skills" : ["Upper management", "Project management", "Web technical", "Writing and Editing", "Technical documentation", "Web Design", "Mainframe Technical"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);


$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);


if (bio.skills.length>0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

 	for (item in bio.skills) {

		formattedSkills = HTMLskills.replace("%data%", bio.skills[item]);
		$("#skills").append(formattedSkills);
	}
}

// Work history
// To Do:  Differentiate job descriptions for a management, consulting, and technical resume and add code to allow either of the three
// to be selected.


var work = {
	"jobs" : [
	{
		"employer" : "Innovation Accomplice",
		"position" : "Small business consultant",
		"yearsWorked" : "2013-present",
		"location" : "Aurora, CO",
		"description" : "Assist small, generally owner-operated businesses to succeed by providing various office, data entry, administrative, computer, and project management services."
	},
	{
		"employer" : "Barrett-Bell Enterprises, LLC dba Doodlebug Toys (2011-2012) dba Lovely Lullabies Boutique (2008-2011)",
		"position" : "Owner/Operator",
		"yearsWorked" : "2008-2012",
		"location" : "O'Fallon, MO",
		"description" : "Co-owner/operator of a small, independent retail business, including procurement, budgeting, ordering, pricing, display setup, sales, technical support, and compliance. The businesses were upscale baby boutique furniture and children’s toys, respectively. Closed business and relocated to Colorado."
	},
		{
		"employer" : "Smurfit-Stone Container Corporation",
		"position" : "IT Director, Manager, Tech Support, Operations, Security, and Business Continuity",
		"yearsWorked" : "1999-2007",
		"location" : "Creve Coeur, MO",
		"description" : "At various stages throughtout this time, managed several departments and project teams. Managed a staff of forty system administrators, production control specialists, computer operators, and automation experts to support the performance and availability of two large data centers populated with IBM mainframe and midrange computers and Windows servers and over one hundred IBM midranges distributed throughout North American manufacturing locations. Championed and designed problem, change, and asset management processes and systems based on ITIL standards.  Successfully led the year 2000 remediation project to a problem-free rollover. Worked with IT and corporate accountants to manage multi-million hardware, software, and staff expense budgets for the data centers. Managed vendors to ensure maximum value for corporate IT infrastructure investments."
	},
		{
		"employer" : "Regions Bank, NA (f/k/a Magna Bank and Union Planters Bank",
		"position" : "Senior Systems Programmer, Supervisor, Vice President, Senior Vice President",
		"yearsWorked" : "1991-1999",
		"location" : "Belleville, IL",
		"description" : "Responsible for a staff of sixty comprising technical support, end user computing, help desk, and operations for a 7-billion dollar bank.  Supported 130 branches and three bank operations centers across three states.  Managed an annual budget of $8 million. Assisted with purchasing bank’s Year 2000 assessment and remediation efforts"
		},
		{
		"employer" : "Federal Reserve Bank of St. Louis",
		"position" : "Senior Systems Programmer",
		"yearsWorked" : "1987-1991",
		"location" : "St. Louis, MO",
		"description" : "Responsible for IBM mainframe program product installation, maintenance, and troubleshooting.  Designed, implemented and documented software systems to automate disaster recovery backup, restoration, and testing processes.  Represented department on several committees and user community groups.  Led major project to convert hardware and operations processes from single-system to multiple-system configuration."
		}]
	}


var displayWork = function(work) {
	for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
			var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
			var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description)
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorklocation);
			$(".work-entry:last").append(formattedYears);
			$(".work-entry:last").append(formattedWorkDescription)

		}

}

displayWork(work);

// Education history (omit years attended per resume best practices)

var education = {
	"schools" : [
	{
	"school" : "Southern Illinois University at Edwardsville",
//    "yearsAttended" : "1982 - 1985",
	"location" : "Edwardsville, IL",
	"degree" : "Bachelor of Science",
	"major" : "Computer Science",
	"minor" : "Mathematics"
	}]
}

var displayEducation = function(education) {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].school);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].yearsAttended);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedMinor);

	}
}

displayEducation(education);

// Major project history
// To Do: Add links to live sites

var projects = {
	efforts: [
	{
		"title" : "Professional Portal",
		"description" : "Website to display qualifications and link to projects.",
		"dates" : "2015",
		"link" : "github Project 1"
	},
	{
		"title" : "Art Portfolio",
		"description" : "Collection of mixed media artwork.",
		"dates" : "2014 - 2015",
		"link" : "Deviant art portfolio."
	},
	{

		"title" : "SAP Implementation",
		"description" : "Infrastructure lead for implementation of SAP financials and procurement.",
		"dates" : "2000-2003"
	}]

}

projects.display = function() {
	for (entry in projects.efforts) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.efforts[entry].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.efforts[entry].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.efforts[entry].description);
		$(".project-entry:last").append(formattedProjectDescription);
	}

}

projects.display(projects)

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y)

})

// Switch last name between upper and lower case, allowing for middle initial being present or absent

$("#main").append(internationalizeButton)

function inName(oldName) {
	var finalName = [];
	var names = oldName.split(' ');
	names[names.length-1] = names[names.length-1].toUpperCase();
	names[0] = names [0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase()
	finalName = names.join(" ");

	return finalName;
};

// Show the map

$("#mapDiv").append(googleMap);