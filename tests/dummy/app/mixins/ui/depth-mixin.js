import Mixin from '@ember/object/mixin';

import propertyClassNameBinding from 'dummy/utils/property-class-name-binding';

export default Mixin.create({

  classNameBindings: ['_depth'],

  depth: false,
  _depth: propertyClassNameBinding('depth')

});
