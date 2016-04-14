import Ember from 'ember';

let ComputedObject = Ember.Object.extend({
    val:"value",
    computedValue: Ember.computed(function(){
        return "Computed " + this.get('val');
    })
});

let obj = ComputedObject.create({val:"the Value!"});
console.log(obj.get('computedValue'));
