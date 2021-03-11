'use strict'

const {promisify} = require('util')
const spawn = promisify(require('child_process').spawn)
const deps = require('./dependencies')

module.exports = onEnd

/**
 * This is an example of executing a custom
 * install step when the generator is done
 * the end hook is the very last thing to run
 **/

function onEnd({cwd, install}, debug) {
  if (install === false) return
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
