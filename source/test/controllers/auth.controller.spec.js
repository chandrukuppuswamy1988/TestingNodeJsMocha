var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var sinon = require('sinon');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function () {
    beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles(['user']);
    });

    describe('isAuthorized', function () {

        it('Should return false if not authorized', function () {
            //assert.equal(false, authController.isAuthorized('admin'));
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false

        })
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            //assert.equal(true, authController.isAuthorized('admin'));
            isAuth.should.be.true;
        })
        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    })
    describe('isAuthorizedAsync', function () {

        it('Should return false if not authorized', function (done) {
            authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });
        })        
    })
    describe('isAuthorizedPromise', function () {
        it('Should return false if not authorized', function () {
           return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        })        
    })
    describe('getIndex',function(){
        it('should render index',function(){
            var req = {};
            var res = {
                render: sinon.spy()
            };
            authController.getIndex(req,res);
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
        })
    })

});