import request from 'superagent'

export const callbackHeadRequest = (url, callback) => {
  request
    .head(url)
    .end((err, res) => {
      if (err) {
        return callback(err)
      }
      return callback(null, res)
    })
}

export const promiseHeadRequest = (url) => {
  return new Promise((resolve, reject) => {
    request
      .head(url)
      .end((err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
  })
}
