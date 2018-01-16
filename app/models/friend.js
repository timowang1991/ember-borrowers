import Ember from 'ember';
import DS from 'ember-data';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  loans: DS.hasMany('loan'),
  fullName: Ember.computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }),
  capitalizedFirstName: changeGate('firstName', function (firstName) {
    return Ember.String.capitalize(firstName);
  })
});
