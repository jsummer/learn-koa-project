const homepage = async  (ctx, next) => {
  ctx.body = 'we are home!'
}
module.exports = {
  'GET /': homepage
}