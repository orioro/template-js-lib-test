import { templateJsLibTest } from './index'

describe('tests', () => {
  test('test', () => {
    expect(templateJsLibTest('parameter')).toEqual('output "parameter"')
  })
})
