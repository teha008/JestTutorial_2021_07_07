const mockFn = jest.fn()

mockFn(10, 20)
mockFn()
mockFn(30, 40)

test('한번 이상 호출?', () => {
  expect(mockFn).toBeCalled()
})

test('정확히 세번 호출?', () => {
  expect(mockFn).toBeCalledTimes(3)
})

test('10이랑 20 전달받은 함수가 있는가', () => {
  expect(mockFn).toBeCalledWith(30, 40)
})

test('마지막 함수는 30이랑 40 받았음?', () => {
  expect(mockFn).lastCalledWith(30, 40)
})
