'use strict'

const YAML = require("yamljs")

if(process.argv.length != 3) return ""

const decoded = decode(process.argv[2])
const obj = YAML.parse(decoded)
const encoded = encode(JSON.stringify(obj))

process.stdout.write(encoded)

function decode(data) {
    const buff = Buffer.from(data, "base64")
    return buff.toString("ascii")
}

function encode(data) {
    const buff = Buffer.from(data, "ascii")
    return buff.toString("base64")
}
