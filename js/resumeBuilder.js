/* ---- Bio ---- */
var bio = {
  "name": "Corina",
  "role": "web developer, creator, design thinker",
  "contacts": {
    "mobile": "xxx-xxx",
    "email": "corina@mail.com",
    "github": "CorinaV",
    "twitter": "@CorinaVladut",
    "blog": "EmotionalTech",
    "location": "Barcelona"
  },
  "welcomeMessage": "This is a resume sample website built with javascript",
  "skills": ["javascript", "html/css", "ux design", "user-testing"],
  "bioPic": "images/Co.png"
};

bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedNameRole = formattedName + formattedRole;
  $("#header").append(formattedNameRole);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }

  var formattedPhone = HTMLphone.replace("%data%", bio.contacts.mobile);
  $('#topContacts').append(formattedPhone);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#footerContacts").append(formattedMobile);

  var formattedMail = HTMLmail.replace("%data%", bio.contacts.email);
  $('#topContacts').append(formattedMail);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#footerContacts").append(formattedEmail);

  var formattedTwitt = HTMLtwitt.replace("%data%", bio.contacts.twitter);
  $('#topContacts').append(formattedTwitt);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#footerContacts").append(formattedTwitter);

  var formattedBlogTop = HTMLblogTop.replace("%data%", bio.contacts.blog);
  $('#topContacts').append(formattedBlogTop);

  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#footerContacts").append(formattedBlog);

  var formattedGit = HTMLgit.replace("%data%", bio.contacts.github);
  $('#topContacts').append(formattedGit);

  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#footerContacts").append(formattedGitHub);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $('#footerContacts').append(formattedLocation);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").prepend(formattedBioPic);

};

bio.display();

/* ---- Work ---- */
var work = {
  "jobs": [{
    "employer": "EmotionalTech",
    "title": "Captain",
    "location": "Barcelona, Spain",
    "dates": "2015-2016",
    "description": "In charge with my little agency."
  }, {
    "employer": "LifeStore",
    "title": "Manager",
    "location": "Dublin, Ireland",
    "dates": "2009-2013",
    "description": "Making life work on a rainy weather."
  }, {
    "employer": "Psychology Research",
    "title": "Manager",
    "location": "Cluj-Napoca, Romania",
    "dates": "2009-2013",
    "description": "Research people, cognitions and behaviours."
  }]
};

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

/* ---- Projects ---- */
var projects = {
  "projects": [{
    "title": "EmotionalTech",
    "dates": "2015-2016",
    "description": "My website",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }, {
    "title": "Portfolio",
    "dates": "2016",
    "description": "Small sample portfolio site",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

/* ---- Education ---- */
var education = {
  "schools": [{
    "name": "Lulu School",
    "location": "Italy",
    "degree": "Diploma in Awesomeness",
    "dates": "2009 -2011",
    "major": "English",
    "url": "http://www.google.com"
  }, {
    "name": "Miau-Miau School",
    "location": "Spain",
    "degree": "Diploma in Amazingness",
    "dates": "2011-2099",
    "major": "UX design",
    "url": "http://www.google.com"
  }],
  "onlineCourses": [{
    "title": "Front-end development",
    "school": "Udacity",
    "dates": "2016",
    "url": "http://www.udacity.com"
  }]
};

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

  }
  for (onlinecourse in education.onlineCourses) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);

    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
    $(".education-entry:last").append(formattedUrl);
  }
};

education.display();

/* MAP */
$("#mapDiv").append(googleMap);

/* Footer*/

$("#footerContacts").hide();
$("#footer-btn").click(function() {
  $("#footerContacts").slideToggle();
});
