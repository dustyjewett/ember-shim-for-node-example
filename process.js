import Ember from 'ember';
import FormatDate from 'ember-intl/formatters/format-date';

// A simple Ember Object with a computed property
let ComputedObject = Ember.Object.extend({
    val:"value",
    computedValue: Ember.computed(function(){
        return "Computed " + this.get('val');
    })
});

// Computed Properties Work!
let obj = ComputedObject.create({val:"the Value!"});
console.log(obj.get('computedValue'));

// Addons even work!
let formatter = FormatDate.create();
console.log(formatter.format(new Date(), null, {locale:"en-us"}));