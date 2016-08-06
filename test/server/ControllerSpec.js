var expect = require('chai').expect;
var sinon = require('sinon');
require('sinon-as-promised');
var bcrypt = require('bcrypt');
var helper = require('../../server/helper/helpers.js');
var item = require('../../server/controller/items.js');
var Item = require('../../server/models/items.js');
var user = require('../../server/controller/users.js');
var User = require('../../server/models/users.js');
