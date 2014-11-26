describe('myService Unit Testing', function (){
    
    var myService, mockBackend;

    beforeEach(angular.mock.module('myApp', function($provide) {
        mockBackend = jasmine.createSpyObj('backendService', ['echo']);
        $provide.value('backendService', mockBackend);
    }));
    
    beforeEach(angular.mock.inject(function(_myService_) {
        myService = _myService_;
    }));

    it('should call backendService.echo on myService.test', function () {
        mockBackend.echo.and.callFake(function(msg) {
            return 'echo[' + msg + ']';
        });
        
        // make the call.
        result = myService.test('Hello');

        // check our spy to see if echo was called properly.
        expect(mockBackend.echo).toHaveBeenCalledWith('Hello');

        expect(result).toEqual("Returned message:echo[Hello]");
    });
});
