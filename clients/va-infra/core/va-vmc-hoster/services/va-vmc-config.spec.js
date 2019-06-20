describe('[va-vmc-hoster] va-vmc-config service',function()
{
    beforeEach(function()
    {
        module('va-vmc-hoster');

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
