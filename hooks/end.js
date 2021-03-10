'use strict'

const {promisify} = require('util')
const promisify(spawn) = require('child_process').spawn
const deps = require('../dependencies')

module.exports = onEnd

function onEnd({cwd}, debug) {
  debug('installing package dependencies')
  return spawn('npm', [
    'install'
  , '--save-dev'
  , ...deps
  ], {
    cwd: cwd
  , stdio: 'inherit'
  })
}
