import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {<%= jsComponentName %>App} from '../app/<%= htmlComponentName %>';

beforeEachProviders(() => [<%= jsComponentName %>App]);

describe('App: <%= jsComponentName %>', () => {
  it('should have the `defaultMeaning` as 42', inject([<%= jsComponentName %>App], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([<%= jsComponentName %>App], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });

  it('should be almost passing', function() {
    expect(1 + 1).toBe(1);
  });
});

