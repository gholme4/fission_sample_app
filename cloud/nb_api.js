module.exports.addSignup = function(req, res) {
  Parse.Cloud.httpRequest({
    method: 'PUT',
    url: 'https://rebuildthedream.nationbuilder.com/api/v1/people/push?access_token=1e41a02e14a47e23dbccf4dc1d511a4c4c6f3e1ac521dd5db615db913d18eb7d',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:{
      person: {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        employer: req.body.name,
        is_volunteer: req.body.is_volunteer,
        tags: req.body.tags
      }
    },
    success: function(httpResponse){
      console.log(httpResponse.text);
      res.send(httpResponse.text);
    },
    error: function(httpResponse){
      console.log('ERROR: ' + httpResponse.text);
      res.send(500);
    }
  })
};

module.exports.addEmployer = function(req, res) {
  console.log(req.body.role);

  Parse.Cloud.httpRequest({
    method: 'PUT',
    url: 'https://rebuildthedream.nationbuilder.com/api/v1/people/push?access_token=1e41a02e14a47e23dbccf4dc1d511a4c4c6f3e1ac521dd5db615db913d18eb7d',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:{
      person: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        employer: req.body.company,
        website: req.body.website,
        employer_joined_employers_council: req.body.employer_interested_joining_employers_council,
        employer_hiring_coders: req.body.employer_interested_hiring_coder,
        employer_sponsorship_opportunities: req.body.employer_interested_sponsorship_opportunities,
        employer_join_other: req.body.employer_interested_in_other
      }
    },
    success: function(httpResponse){
      console.log(httpResponse.text);
      res.send(httpResponse.text);
    },
    error: function(httpResponse){
      console.log('ERROR: ' + httpResponse.text);
      res.send(500);
    }
  });
};

module.exports.addEmployer = function(req, res) {
  Parse.Cloud.httpRequest({
    method: 'PUT',
    url: 'https://rebuildthedream.nationbuilder.com/api/v1/people/push?access_token=1e41a02e14a47e23dbccf4dc1d511a4c4c6f3e1ac521dd5db615db913d18eb7d',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:{
      person: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        zip: req.body.zip,
        employer_type: req.body.role

      }
    },
    success: function(httpResponse){
      console.log(httpResponse.text);
      res.send(httpResponse.text);
    },
    error: function(httpResponse){
      console.log('ERROR: ' + httpResponse.text);
      res.send(500);
    }
  });
};

module.exports.addEducator = function(req, res) {

  Parse.Cloud.httpRequest({
    method: 'PUT',
    url: 'https://rebuildthedream.nationbuilder.com/api/v1/people/push?access_token=1e41a02e14a47e23dbccf4dc1d511a4c4c6f3e1ac521dd5db615db913d18eb7d',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:{
      person: {
        employer: req.body.name, // organization name
        educator_email: req.body.general_email, // organization email
        phone: req.body.phone, // organization phone
        website: req.body.website, // organization website
        facebook_profile_url: req.body.facebook, // organizationfacebook page
        twitter_login: req.body.twitter, // organization twitter
        first_name: req.body.contact_first_name, // contact first name
        last_name: req.body.contact_last_name, // contact last name
        occupation: req.body.contact_title, // contact title
        email: req.body.contact_email, // contact email

        loc_1_address: req.body.loc_address_1,
        loc_1_city: req.body.loc_city_1,
        loc_1_zip: req.body.loc_zip_1,
        loc_1_state: req.body.loc_state_1,
        loc_1_country: req.body.loc_country_1,


        loc_2_address: req.body.loc_address_2,
        loc_2_city: req.body.loc_city_2,
        loc_2_zip: req.body.loc_zip_2,
        loc_2_state: req.body.loc_state_2,
        loc_2_country: req.body.loc_country_2,


        loc_3_address: req.body.loc_address_3,
        loc_3_city: req.body.loc_city_3,
        loc_3_zip: req.body.loc_zip_3,
        loc_3_state: req.body.loc_state_3,
        loc_3_country: req.body.loc_country_3,

        loc_4_address: req.body.loc_address_4,
        loc_4_city: req.body.loc_city_4,
        loc_4_zip: req.body.loc_zip_4,
        loc_4_state: req.body.loc_state_4,
        loc_4_country: req.body.loc_country_4,

        loc_5_address: req.body.loc_address_5,
        loc_5_city: req.body.loc_city_5,
        loc_5_zip: req.body.loc_zip_5,
        loc_5_state: req.body.loc_state_5,
        loc_5_country: req.body.loc_country_5,

        year_founded: req.body.founded, // year founded
        keywords: req.body.keywords, // keywords
        description: req.body.description, // description
        population_focus: req.body.population_focus,
        age_group: req.body.age_group,
        cost: req.body.cost,
        duration: req.body.duration,
        time_commitment: req.body.time_commitment,
        languages: req.body.languages,
        online_education: req.body.online,
        volunteer_description: req.body.volunteer_description,
        volunteer_email: req.body.volunteer_email,
        volunteer_website: req.body.volunteer_website,
        tags: 'YesWeCode-educator-awaiting-review,YesWeCode, YesWeCode-educator'
      }
    },
    success: function(httpResponse){
      //console.log('response: '+JSON.parse(httpResponse.text).person.id);

      //mailgun for sending notification to info@yeswecode.com
      var Mailgun = require('mailgun');
      Mailgun.initialize('mg.yeswecode.com', 'key-5m2hll6-qq2tzx6wjx9kty4vm0ywpp09');

      Mailgun.sendEmail({
        to: "info@yeswecode.com",
        from: "educator_notification@mg.yeswecode.com",
        subject: "Organization \"" + req.body.name + "\" has just signed up wanting to be an educator for YesWeCode!",
        text: req.body.name + " has just signed up to become an educator, please go to https://rebuildthedream.nationbuilder.com/admin/signups/" + JSON.parse(httpResponse.text).person.id + " to approve them."
      }, {
        success: function(emailHttpResponse) {
          console.log(emailHttpResponse);
          response.success("Email sent!");
        },
        error: function(emailHttpResponse) {
          console.error(emailHttpResponse);
          response.error("Uh oh, something went wrong");
        }
      });

      res.send(httpResponse.text);
    },
    error: function(httpResponse){
      console.log('ERROR: ' + httpResponse.text);
      res.send(500);
    }
  });
};

module.exports.addTagToSignup = function(signupID, tag) {
  Parse.Cloud.httpRequest({
    method: 'POST',
    url: 'https://rebuildthedream.nationbuilder.com/api/v1/people/' + signupID + '/taggings?access_token=1e41a02e14a47e23dbccf4dc1d511a4c4c6f3e1ac521dd5db615db913d18eb7d',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:{
      tagging: {
        tag: tag
      }
    }
  })
};

module.exports.fetchSignupsByTag = function(tag) {
  var educator_endpoints = require('cloud/educator_endpoints.js');
  Parse.Cloud.httpRequest({
    method: 'GET',
    url: 'https://rebuildthedream.nationbuilder.com/api/v1/tags/' + tag + '/people?per_page=50&access_token=1e41a02e14a47e23dbccf4dc1d511a4c4c6f3e1ac521dd5db615db913d18eb7d'
  }).then(function(data){

    results = JSON.parse(data.text).results;
    results.forEach(function(item) {

      educator_endpoints.addEducator(item);
    });
  });
};




//module.exports.syncEducatorsFromNB = function()