var c = require('./colors')

exports.PultError = class PultError extends Error {}

exports.ModuleError = class ModuleError extends exports.PultError {}

exports.MissingDependency = class MissingDependency extends exports.PultError {
  constructor(dep) {
    super(`Missing dependency ${ c.subject(dep) }. Try adding it first:\n\n    $ pult add ${dep}`)
    this.dependency = dep
  }
}
