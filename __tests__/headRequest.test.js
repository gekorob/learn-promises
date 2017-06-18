import nock from 'nock'

import {callbackHeadRequest, promiseHeadRequest} from '../src/headRequest'

describe('test callback vs promise', () => {
  beforeEach(() => {
    nock('http://nowhere.com')
      .head('/')
      .reply(200, '', {'x-count': 40})
  })

  afterEach(() => {
    nock.cleanAll()
  })

  test('callback', done => {
    const handleHeadResp = (err, res) => {
      expect(res.status).toEqual(200)
      expect(res.header['x-count']).toEqual(40)
      done()
    }

    callbackHeadRequest('http://nowhere.com', handleHeadResp)
  })

  test('promise', () => {
    return promiseHeadRequest('http://nowhere.com').then(res => {
      expect(res.header['x-count']).toEqual(40)
    })
  })
})
