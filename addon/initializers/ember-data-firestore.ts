import Application from "@ember/application";
import * as firebase from "firebase/app";
import FirestoreAdapter from "../adapters/firestore";
import FirestoreSerializer from "../serializers/firestore";
import "firebase/auth";
import "firebase/firestore";

export function initialize(application: Application): void {
  const environment = application.resolveRegistration("config:environment");
  const firebaseConfig = {
    ...environment.firebaseConfig
  };

  firebase.initializeApp(firebaseConfig);
  application.register("adapter:-firestore", FirestoreAdapter);
  application.register("serializer:-firestore", FirestoreSerializer);
}

export default {
  name: "ember-data-firestore",
  initialize
};
