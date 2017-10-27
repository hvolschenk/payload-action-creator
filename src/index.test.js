import payloadActionCreator from './index';

test('Payload action creator', () => {
  const type = 'type';
  const payload = 'payload';
  const expected = { payload, type };

  const actual = payloadActionCreator(type)(payload);

  expect(actual).toEqual(expected);
});
