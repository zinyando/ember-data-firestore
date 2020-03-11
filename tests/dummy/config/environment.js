"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "dummy",
    environment,
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: "AIzaSyCwX6ULr5eDMvN2JvDD4TUKqwP-0F0zpQY",
      authDomain: "ember-firestarter-ed790.firebaseapp.com",
      databaseURL: "https://ember-firestarter-ed790.firebaseio.com",
      projectId: "ember-firestarter-ed790",
      storageBucket: "ember-firestarter-ed790.appspot.com",
      messagingSenderId: "sender-id",
      appId: "ember-firestarter-ed790",
      measurementId: "G-measurement-id"
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
