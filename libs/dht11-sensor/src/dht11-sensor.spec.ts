import { dht11Sensor } from './dht11-sensor';

describe('dht11Sensor', () => {
  it('should work', () => {
    expect(dht11Sensor()).toEqual('dht11-sensor');
  });
});
