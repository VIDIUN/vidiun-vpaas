describe('[ka-vmc-hoster] ka-vmc-config service',function()
{
    beforeEach(function()
    {
        module('ka-vmc-hoster');

        window.vmc = {
          vars :{
              vs : 'sss'
          }
        };
    });

    it('should read vs from parent vmc hoster',function()
    {
        inject(function(vaVMCConfig)
        {
            expect(vaVMCConfig.vs).toBeDefined();
        });

    });
});
