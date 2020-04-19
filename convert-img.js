const fs = require("fs")
const path = require("path")
const dirIcons = path.join(__dirname ,'./src/assets/svg/icons')
const  { parse }  = require('svg-parser');

const template = props => {

const parsed = parse(props.content).children[0].properties;

console.log(parsed)

let str = props.content;
let regexpStart = /<svg (.*?)>/g;
let regexpEnd = /<\/svg>/g;

let startSvg = str.matchAll(regexpStart);
let endSvg = str.matchAll(regexpEnd);

const matchAllStart = Array.from(startSvg); // array now
const matchAllEnd = Array.from(endSvg); // array now

let firstMatch = matchAllStart[0];
let endMatch = matchAllEnd[0];

var res = props.content.substring(firstMatch[0].length, props.content.length - endMatch[0].length - 1);

    return (`
import * as React from "react";

const  ${props.name} = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "${parsed.width}"} height={props.height || "${parsed.height}"} fill={props.fill || "${parsed.fill}"} viewBox={props.viewBox || "${parsed.viewBox}"}>
        ${res}
    </svg>
  )

export default ${props.name}`)

}

function ConvertFiles(){
    var dir = null
    var ext = "jpg"
    var files = []
    var totalFiles = 0

    const setDir = _dir => {
        if (!_dir) {
            throw "Dir could not be null"
        }
        dir = _dir

        files.length = 0
        filesFromDir = fs.readdirSync(dir)
        files.length = 0
        filesFromDir.map((file, index) => {

            const isFile = !fs.lstatSync(`${dir}/${file}`).isDirectory()
            if (isFile && path.extname(file).split(".")[1] === 'svg') {
                files.push({
                    name: file.split('.')[0],
                    path: `${dir}`,
                    fullPath: `${dir}/${file}`,
                    newPath: `${dir}/${file.split('.')[0]}.${ext}`,
                    ext: path.extname(file).split(".")[1],
                    converted: false,
                })
            }
        })
        totalFiles = files.length
    }

    const run = () => {

        return new Promise((resolve, reject) => {
            files.map( file => {
                file.content = fs.readFileSync(file.fullPath, 'utf-8')
                // console.log(template(file))
                fs.unlinkSync(`${file.fullPath}`)
                fs.mkdirSync(`${file.fullPath}`)
                fs.writeFileSync(`${file.fullPath}/index.js`, template(file))

            })
            // console.log(files)
        })
    }

    const setExt = _ext => {
        if (!_ext) {
            throw `ext could not be null setting default to ${ext}`
        }

        ext = _ext
    }

    return {
        setDir,
        setExt,
        run
    }
}

const Obj = new ConvertFiles()
Obj.setDir(dirIcons)
// Obj.setDir(dirBackground)
// Obj.setDir(dirLogo)

Obj.run().then(response => {
    console.log(response)
}).catch(err => {
    console.log(err)
})