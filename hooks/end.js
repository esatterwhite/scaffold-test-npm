'use strict'

const {promisify} = require('util')
const spawn = promisify(require('child_process').exec)
const deps = require('./dependencies')

module.exports = onEnd

/**
 * This is an example of executing a custom
 * install step when the generator is done
 * the end hook is the very last thing to run
 **/

async function onEnd({cwd, install, ui}, debug) {
  if (install === false) return
  ui.start('installing package dependencies')
  await spawn(`npm install --save-dev ${deps.join(' ')}`, {cwd})
  debug('install complete')
  return true
}
