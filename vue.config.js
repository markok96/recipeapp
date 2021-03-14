module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/recipeapp/'  // This is whatever your path from the root is
    : '/'
}