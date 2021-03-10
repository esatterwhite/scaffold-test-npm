'use strict'

const path = require('path')
const {promisify} = require('util')
const exec = promisify(require('child_process').exec)
const cwd = path.join(__dirname, '..')

module.exports = async function(options, debug) {
  debug('installing scaffold dependencies')
  exec('npm install', {
    cwd: cwd
  })
}
