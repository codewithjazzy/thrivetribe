const mongoose = require("mongoose"); // connects to and communicates with database to use schemas

//Schemas give the database structure. Maintainability. It is like a template for the DB 
const ProfileSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  journey: {
    type: String,
  },
  heritage: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(email) {
        // Simple regex for email validation; you might want to use a more complex one depending on your needs
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(phone) {
        // Simple regex for US phone number validation;
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return re.test(phone);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  website: {
    type: String,
  },
  expertise: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expertise",
  }],
  treatments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Treatment",
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  }],
  dialects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dialect",
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
});

module.exports = mongoose.model("Profile", ProfileSchema); //module.exports is used in the posts controller

//"Profile" will become plural and lowercase as db collection name. to change this, use the third argument in the model method
//module.exports = mongoose.model("ModelName", SchemaObject, "customCollectionName"); __SYNTAX