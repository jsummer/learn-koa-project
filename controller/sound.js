const {busboys} = require('../utils/upload.js')
const fs = require('fs')
const path = require('path')
const upload = async (ctx, next) => {
  // console.log(ctx.request)
  ctx.response.type = "application/json"
  ctx.response.body = await busboys(ctx)
}

// const one = async (ctx, next) => {

//   fs.readFile('/public/upload', 'binary', function (err, data) {
//     console.log('')
//   })
// }

// const travel = async (dir) => {
//   fs.readdir(dir, function (err, files) {
//     let i = 0
//     if (i < files.length) {
//       let pathname = path.join(dir, files[i])
//       fs.stat(pathname, function (err, stats) {
//         if (stats.isDirectory()) {
//           travel(pathname)
//         }
//       })
//     }
//   })
// }

module.exports = {
  'POST /api/sound/upload': upload
}