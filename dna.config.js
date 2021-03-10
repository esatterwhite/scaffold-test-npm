'use strict'
module.exports = {
  values: {}
, prompts: [
    {
      type: 'input'
    , name: 'name'
    , message: 'Package name'
    , validate: validator('name')
    , filter: textFilter
    , when: ifNot('name')
    }
  , {
      type: 'input'
    , name: 'description'
    , message: 'Brief package description'
    , validate: validator('description')
    , when: ifNot('description')
    }
  , {
      type: 'input'
    , name: 'author_name'
    , message: 'What is the author\'s name'
    , validate: validator('author name')
    , when: ifNot('author_name')
    }
  , {
      type: 'input'
    , name: 'author_email'
    , message: 'What is the author\'s email'
    , validate: validator('author email')
    , when: ifNot('author_email')
    }
  ]
}

function ifNot(key) {
  return function(answers, options) {
    if (options[key]) {
      answers[key] = options[key]
      return false
    }
    return true
  }
}

function textFilter(value) {
  return value.trim().replace(/\s+/g, '-').toLowerCase()
}

/* istanbul ignore next */
function validator(name) {
  return (arg) => {
    if (arg) return true
    return `${name} is a required parameter`
  }
}

