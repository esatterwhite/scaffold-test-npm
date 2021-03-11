'use strict'

module.exports = onReading 

/**
 * This is an example of conditionally excluding files from being rendered
 * the reading step is executed after prompt data is collected
 * but before the file writing step
 * modifying the files list changes which files are written
 **/

async function onReading (opts, debug) {
  if (opts.dummy === true) return

  // exclude files in dummy dir
  opts.files = opts.files.filter((file) => {
    return !(/dummy/g).test(file)
  })

  debug(opts.files)
}
