declare namespace Template7 {

    interface Template7{
        global?: any
        templates?: any;
        compile? (htmlString: string): any;
        registerHelper? (name: string, helper: Function): any;
        unregisterHelper? (name: string):any;
        registerPartial? (name: string, template: string):any;
        unregisterPartial? (name: string):any;
    }
}

declare module "template7" {
    let Template7: Template7.Template7;
    export default Template7;
}