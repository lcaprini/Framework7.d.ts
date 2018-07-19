/// <reference path="dom7.d.ts" />
/// <reference path="template7.d.ts" />

declare class Framework7 {
    /** App ID passed in parameters. */
    id: string;
    /** App name passed in parameters. */
    name: string;
    /** App version. */
    version: string;
    /** App routes. */
    routes: Framework7.Route[];
    /** App language. */
    language: string;
    /** Dom7 instance with app root element. */
    root: Dom7.Dom7;
    /** Boolean property indicating app is in RTL layout or not. */
    rtl: boolean;
    /** Current app theme. Can be `md` or `ios`. */
    theme: string;
    /** Object with app root data passed on intialization. */
    data: any;
    /** Object with app root methods. */
    methods: any;
    /** App width in px. */
    width: number;
    /** App height in px. */
    height: number;
    /** App left offset in px. */
    left: number;
    /** App top offset in px. */
    top: number;
    /**	Boolean property indicating app is initialized or not */
    initialized: boolean;
    /** Dom7 alias */
    $: Dom7.Dom7Static;
    /** Template7 alias */
    t7: Template7.Template7;
    /** App parameters */
    params: Framework7.Parameter;
    /** Object with properties about supported features. */
    support: Framework7.F7Support;
    /** Object with properties about device. */
    device: Framework7.F7Device;
    /** Object with some useful utilities. */
    utils: Framework7.F7Utils;
    /** Contains methods to work with XHR requests. */
    request: Framework7.F7Request;

    //
    // ─── MODULES ─────────────────────────────────────────────────────
    //

    /** Accordion module. */
    accordion: {
        /**
         * Event will be triggered when accordion content starts its opening animation.
         * @param item HTMLElement or string (with CSS Selector) of accordion-item element (<div class="accordion-item">).
         */
        open(item: HTMLElement | string): void;

        /**
         * close specified accordion item.
         * @param item HTMLElement or string (with CSS Selector) of accordion-item element (<div class="accordion-item">).
         */
        close(item: HTMLElement | string): void;

        /**
         * toggle specified accordion item.
         * @param item HTMLElement or string (with CSS Selector) of accordion-item element (<div class="accordion-item">).
         */
        toggle(item: HTMLElement | string): void;
    };
    /** ActionSheet module. */
    actions: {
        /**
         * Create an action sheet instance.
         * @param params parameter for the action sheet.
         */
        create(params: Framework7.ActionSheet.Parameter): Framework7.ActionSheet;

        /**
         * Destroy Action Sheet instance
         * @param el HTMLElement or string (with CSS Selector) or object. Action element instance to destroy.
         */
        destroy(el: HTMLElement | string | object);

        /**
         * Get Action Sheet instance by HTML element
         * @param el HTMLElement or string (with CSS Selector). Action Sheet element.
         */
        get(el: HTMLElement | string): Framework7.ActionSheet;

        /**
         * Opens Action Sheet.
         * @param el HTMLElement or string (with CSS Selector). Action Sheet element to open.
         * @param animate boolean. Open Actions Sheet with animation.
         */
        open(el: HTMLElement | string, animate: boolean): Framework7.ActionSheet;

        /**
         * Closes Action Sheet.
         * @param el HTMLElement or string (with CSS Selector). Action Sheet element to close.
         * @param animate boolean. Close Actions Sheet with animation.
         */
        close(el: HTMLElement | string, animate: boolean): Framework7.ActionSheet;
    };
    /** Autocomplete modeul. */
    autocomplete: {
        /**
         * Create Autocomplete instance.
         * @param params object. Object with autocomplete parameters.
         */
        create(params: Framework7.Autocomplete.Parameter): Framework7.Autocomplete;

        /**
         * Destroy Autocomplete instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Autocomplete instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Autocomplete instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Autocomplete element.
         */
        get(el: HTMLElement | string): Framework7.Autocomplete;

        /**
         * Open Autocomplete.
         * @param el HTMLElement or string (with CSS Selector). Autocomplete element to open.
         */
        open(el: HTMLElement | string): Framework7.Autocomplete;

        /**
         * Closes Autocomplete.
         * @param el HTMLElement or string (with CSS Selector). Autocomplete element to close.
         */
        close(el: HTMLElement | string): Framework7.Autocomplete;
    };
    /** Calendar module. */
    calendar: {
        /**
         * Create Calendar instance.
         * @param params object. Object with Calendar parameters.
         */
        create(params: Framework7.Calendar.Parameter): Framework7.Calendar;

        /**
         * Destroy Calendar instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Calendar instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Calendar instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Calendar element.
         */
        get(el: HTMLElement | string): Framework7.Calendar;

        /**
         * Close Calendar.
         * @param el HTMLElement or string (with CSS Selector). Calendar element to close.
         */
        close(el: HTMLElement | string): Framework7.Calendar;
    };
    /** DataTable module. */
    dataTable: {
        /**
         * Create Data Table instance.
         * @param params object. Object with data table parameters.
         */
        create(params: Framework7.Dialog.Parameter): Framework7.DataTable;

        /**
         * Destroy Data Table instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Data table instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Data Table instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). data table element.
         */
        get(el: HTMLElement | string): Framework7.DataTable;
    };
    /** Dialog module. */
    dialog: {
        /**
         * Create Dialog instance.
         * @param params object. Object with Dialog parameters.
         */
        create(params: Framework7.Dialog.Parameter): Framework7.Dialog;

        /**
         * Destroy Dialog instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Dialog instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Dialog instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Dialog element.
         */
        get(el: HTMLElement | string): Framework7.Dialog;

        /**
         * Open Dialog.
         * @param el HTMLElement or string (with CSS Selector). Dialog element to open.
         * @param animate boolean. Open Dialog with animation.
         */
        open(el: HTMLElement | string, animate?: boolean): Framework7.Dialog;

        /**
         * Close Dialog.
         * @param el HTMLElement or string (with CSS Selector). Dialog element to close.
         * @param animate boolean. Close Dialog with animation.
         */
        open(el: HTMLElement | string, animate?: boolean): Framework7.Dialog;

        /**
         * Create Alert Dialog and open it.
         * @param text string. Alert dialog text.
         * @param title string. Alert dialog title.
         * @param callback function. Optional. Callback that will be executed after user clicks on Alert button.
         */
        alert(text: string, title: string, callback?: () => void): Framework7.Dialog;

        /**
         * Create Alert Dialog with default title and open it.
         * @param text string. Alert dialog text.
         * @param callback function. Optional. Callback function that will be executed after user clicks on Alert button.
         */
        alert(text: string, callback?: () => void): Framework7.Dialog;

        /**
         * Create Confirm Dialog and open it.
         * @param text string. Confirm dialog text.
         * @param title string. Confirm dialog title.
         * @param callbackOk function. Optional. Callback function that will be executed when user click "Ok" button on Confirm dialog (when user confirms action).
         * @param callbackCancel function. Optional. Callback function that will be executed when user click "Cancel" button on Confirm dialog (when user dismisses action).
         */
        confirm(text: string, title: string, callbackOk?: () => void, callbackCancel?: () => void): Framework7.Dialog;

        /**
         * Create Confirm Dialog with default title and open it.
         * @param text string. Confirm dialog text.
         * @param callbackOk function. Optional. Callback function that will be executed when user click "Ok" button on Confirm dialog (when user confirms action).
         * @param callbackCancel function. Optional. Callback function that will be executed when user click "Cancel" button on Confirm dialog (when user dismisses action).
         */
        confirm(text: string, title: string, callbackOk?: () => void, callbackCancel?: () => void): Framework7.Dialog;

        /**
         * Create Prompt Dialog and open it.
         * @param text string. Prompt dialog text.
         * @param title string. Prompt dialog title.
         * @param callbackOk function(value). Optional. Callback function that will be executed when user click "Ok" button on Prompt dialog. As an argument function receives value of text input.
         * @param callbackCancel function(value). Optional. Callback function that will be executed when user click "Cancel" button on Prompt dialog. As an argument function receives value of text input.
         */
        prompt(text: string, title: string, callbackOk?: (value: string) => void, callbackCancel?: (value: string) => void): Framework7.Dialog;

        /**
         * Create Prompt Dialog with default title and open it.
         * @param text string. Prompt dialog text.
         * @param callbackOk function(value). Optional. Callback function that will be executed when user click "Ok" button on Prompt dialog. As an argument function receives value of text input.
         * @param callbackCancel function(value). Optional. Callback function that will be executed when user click "Cancel" button on Prompt dialog. As an argument function receives value of text input.
         */
        prompt(text: string, callbackOk?: (value: string) => void, callbackCancel?: (value: string) => void): Framework7.Dialog;

        /**
         * Create Login Dialog and open it.
         * @param text string. Login dialog text.
         * @param title string. Login dialog title.
         * @param callbackOk function(username, password). Optional. Callback function that will be executed when user click "Ok" button on Login dialog. As an argument function receives username and password values.
         * @param callbackCancel function(username, password). Optional. Callback function that will be executed when user click "Cancel" button on Login dialog. As an argument function receives username and password values.
         */
        login(text: string, title: string, callbackOk?: (username: string, password: string) => void, callbackCancel?: (username: string, password: string) => void): Framework7.Dialog;

        /**
         * Create Login Dialog with default title and open it.
         * @param text string. Login dialog text.
         * @param callbackOk function(username, password). Optional. Callback function that will be executed when user click "Ok" button on Login dialog. As an argument function receives username and password values.
         * @param callbackCancel function(username, password). Optional. Callback function that will be executed when user click "Cancel" button on Login dialog. As an argument function receives username and password values.
         */
        login(text: string, callbackOk?: (username: string, password: string) => void, callbackCancel?: (username: string, password: string) => void): Framework7.Dialog;

        /**
         * Create Password Dialog and open it.
         * @param text string. Password dialog text.
         * @param title string. Password dialog title.
         * @param callbackOk function(password). Optional. Callback function that will be executed when user click "Ok" button on Password dialog. As an argument function receives password value.
         * @param callbackCancel function(password). Optional. Callback function that will be executed when user click "Cancel" button on Password dialog. As an argument function receives password value.
         */
        password(text: string, title: string, callbackOk?: (password: string) => void, callbackCancel?: (password: string) => void): Framework7.Dialog;

        /**
         * Create Password Dialog with default title and open it.
         * @param text string. Password dialog text.
         * @param callbackOk function(password). Optional. Callback function that will be executed when user click "Ok" button on Password dialog. As an argument function receives password value.
         * @param callbackCancel function(password). Optional. Callback function that will be executed when user click "Cancel" button on Password dialog. As an argument function receives password value.
         */
        password(text: string, title: string, callbackOk?: (password: string) => void, callbackCancel?: (password: string) => void): Framework7.Dialog;

        /**
         * Create Preloader Dialog and open it.
         * @param title string. Optional. Preloader dialog title.
         */
        preloader(title: string): Framework7.Dialog;

        /**
         * Create Preloader Dialog with default title and open it.
         */
        preloader(): Framework7.Dialog;

        /**
         * Create Progress Dialog and open it.
         * @param title string. Progress dialog title.
         * @param progress number. Optional. Progressbar progress (from 0 to 100). If no number passed then it will have infinite progressbar.
         * @param color string. Optional. Progressbar color. One of default colors.
         */
        progress(title: string, progress?: number, color?: string): Framework7.Dialog;

        /**
         * Create Progress Dialog with default values and open it.
         */
        progress(): Framework7.Dialog;
    };
    /** FAB module. */
    fab: {
        /**
         * Open FAB speed dial actions/buttons, or morph it to specified target
         * @param fabEl HTMLElement or string (with CSS Selector) of required FAB.
         * @param targetEl HTMLElement or string (with CSS Selector) of required FAB. Optional
         */
        open(fabEl: string | HTMLElement, targetEl?: string | HTMLElement): void;

        /**
         * Close FAB speed dial actions/buttons, or morph it back from specified target.
         * @param fabEl HTMLElement or string (with CSS Selector) of required FAB.
         */
        close(fabEl: HTMLElement | string): void;

        /**
         * Toggle FAB speed dial actions/buttons.
         * @param fabEl HTMLElement or string (with CSS Selector) of required FAB.
         */
        toggle(fabEl: HTMLElement | string): void;
    };
    /** Framework7 comes with some very useful methods, this makes working with forms as simple as possible. */
    form: {
        /**
         * Convert form fields values to data object.
         * @param form HTMLElement or string (with CSS Selector) of form that should be converted to data object. Required.
         */
        convertToData(form: HTMLElement | string): Framework7.FormData.FormDataObject;

        /**
         * Fill up form according to data object.
         * @param form HTMLElement or string (with CSS Selector) of form that should be converted to data object. Required.
         * @param data object with from data. Required.
         */
        fillFromData(form: HTMLElement | string, formData: Framework7.FormData.FormDataObject): void;

        /**
         * Get form data for the form with specified id attribute.
         * @param formId string - "id" attribute of required form. Required.
         */
        getFormData(formId: string): Framework7.FormData.FormDataObject;

        /**
         * Store form data for the form with specified id attribute.
         * @param formId string - "id" attribute of required form. Required.
         * @param formJSON object - JSON data to store.
         */
        storeFormData(formId: string, formJSON: object): void;

        /**
         * Remove form data for the form with specified id attribute.
         * @param formId string - "id" attribute of required form. Required.
         */
        removeFormData(formId: string): void;
    };
    /** Infinite Scroll allows to load additional content or do any other required action when page scroll is near to the bottom. */
    infiniteScroll: {
        /**
         * Add infinite scroll event listener to the specified HTML element
         * `Use this methods only in case you have added infinite scroll content after page init or if you want to enable it later. Otherwise if there is "infinite-scroll-content" element on page init it will be created automatically`
         * @param el HTMLElement or string (with CSS selector) - infinite scroll container. Required.
         */
        create(el: HTMLElement | string): void;

        /**
         * Remove infinite scroll event listener from the specified HTML container.
         * @param el HTMLElement or string (with CSS selector) - infinite scroll container. Required.
         */
        destroy(el: HTMLElement | string): void;
    };
    /** input module. */
    input: {
        /**
         * Scroll input into view.
         * @param inputEl HTMLElement or string (with CSS Selector) of required input element to get into view. Required.
         * @param duration number - scrolling duration in ms.
         * @param centered boolean - defines whether it must be scrolled into the center of view or not.
         */
        scrollIntoView(inputEl: string | HTMLElement, duration: number, centered: boolean): void;

        /**
         * Will add additional required styles and classes on input like when it is focused.
         * @param inputEl HTMLElement or string (with CSS Selector) of required input element. Required.
         */
        focus(inputEl: string | HTMLElement): void;

        /**
         * Will remove additional required styles and classes on input like when it loses focus.
         * @param inputEl HTMLElement or string (with CSS Selector) of required input element. Required.
         */
        blur(inputEl: string | HTMLElement): void;

        /**
         * Force resizable textarea to resize depending on its content.
         * @param textareaEl HTMLElement or string (with CSS Selector) of required textarea element. Required.
         */
        resizeTextarea(textareaEl: string | HTMLElement): void;

        /**
         * Recalculate required additional styles and classes on input element based on whether it has value or not.
         * @param inputEl HTMLElement or string (with CSS Selector) of required textarea element. Required.
         */
        checkEmptyState(inputEl: string | HTMLElement): void;

        /**
         * Validate input.
         * @param inputEl HTMLElement or string (with CSS Selector) of required textarea element. Required.
         */
        validate(inputEl: string | HTMLElement): void;

        /**
         * Validate all inputs in passed container.
         * @param containerEl HTMLElement or string (with CSS Selector) of required element with inputs inside to validate. Required.
         */
        validateInputs(containerEl: string | HTMLElement): void;
    };
    /** lazy load module */
    lazy: {
        /**
         * Initialize lazy loading on page.
         * @param pageEl HTMLElement or string (with CSS Selector) of page which contains lazy load images. Required.
         */
        create(pageEl: HTMLElement | string): void;

        /**
         * Destroy/disable lazy loading on page.
         * @param pageEl HTMLElement or string (with CSS Selector) of page which contains lazy load images. Required.
         */
        destroy(pageEl: HTMLElement | string): void;

        /**
         * Force to load lazy image.
         * @param imageEl HTMLElement or string (with CSS Selector) of lazy image or element (element with lazy class). Required.
         * @param callback function - callback function that will be executed when image file loaded or in case of error loading this file.
         */
        loadImage(imageEl: HTMLElement | string, callback: Function): void;
    };
    loginScreen: {
        /**
         * Create Login Screen instance.
         * @param params object. Object with login screen parameters.
         */
        create(params: Framework7.LoginScreen.Parameter): Framework7.LoginScreen;

        /**
         * Destroy Login Screen instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Login Screen element or Login Screen instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Login Screen instance by HTML element.
         * @param el  HTMLElement or string (with CSS Selector). Login Screen element.
         */
        get(el: HTMLElement | string): Framework7.LoginScreen;

        /**
         * Open Login Screen.
         * @param el HTMLElement or string (with CSS Selector). Login Screen element to open.
         * @param animate boolean. Open Login Screen with animation.
         */
        open(el: HTMLElement | string, animate?: boolean): Framework7.LoginScreen;

        /**
         * Close Login Screen.
         * @param el HTMLElement or string (with CSS Selector). Login Screen element to close.
         * @param animate boolean. Close Login Screen with animation.
         */
        close(el: HTMLElement | string, animate?: boolean): Framework7.LoginScreen;
    };
    /** Messagebar module. */
    messagebar: {
        /**
         * Initialize Messagebar with parameters.
         * @param params object with Messagebar parameters.
         */
        create(params: Framework7.Messagebar.Parameter): Framework7.Messagebar;

        /**
         * Destroy Messagebar instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Messagebar element or Messagebar instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Messagebar instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Messagebar element.
         */
        get(el: HTMLElement | string): Framework7.Messagebar;
    };
    /** Messages module.  */
    messages: {
        /**
         * Initialize Messages with parameters.
         * @param params object with Messages parameters.
         */
        create(params: Framework7.Messages.Parameter): Framework7.Messages;

        /**
         * Destroy Messages instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Messages element or Messages instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Messages instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Messages element.
         */
        get(el: HTMLElement | string): Framework7.Messages;
    };
    /** Navbar module. */
    navbar: {
        /**
         * Hide navbar.
         * @param navbarEl HTMLElement or string (with CSS Selector) of required navbar. Required.
         * @param animate Boolean - wheter it should be hidden with animation or not. By default is true.
         */
        hide(navbarEl: HTMLElement | string, animate?: boolean): void;

        /**
         * Show navbar.
         * @param navbarEl HTMLElement or string (with CSS Selector) of required navbar. Required.
         * @param isAnimated Boolean - wheter it should be shown with animation or not. By default is true.
         */
        show(navbarEl: HTMLElement | string, isAnimated?: boolean): void;

        /**
         * Recalculate positional styles for Navbar elements. It could be useful after you change some of Navbar elements dynamically. `This will have effect only in iOS theme`.
         * @param navbarEl HTMLElement or string (with CSS Selector) of required navbar. Required.
         */
        size(navbarEl: HTMLElement | string): any;

        /**
         * Get navbar HTML element by specified page element. Useful only when dynamic navbar is enabled. In this case it is out of the page container. `This will have effect only in iOS theme`.
         * @param pageEl HTMLElement or string (with CSS Selector) of page where to look for navbar. Required.
         */
        getElByPage(pageEl: HTMLElement | string): HTMLElement;
    };
    /** Notification module. */
    notification: {
        /**
         * Create Notification instance.
         * @param params Object with notification parameters.
         */
        create(params: Framework7.Notification.Parameter): Framework7.Notification;

        /**
         * Destroy Notification instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Notification element or Notification instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Messages instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Messages element.
         */
        get(el: HTMLElement | string): Framework7.Notification;

        /**
         * Open Notification.
         * @param el HTMLElement or string (with CSS Selector). Notification element to open.
         * @param animate boolean. Open Notification with animation.
         */
        open(el: HTMLElement | string, animate?: boolean): Framework7.Notification;

        /**
         * Close Notification.
         * @param el HTMLElement or string (with CSS Selector). Notification element to close.
         * @param animate boolean. Close Notification with animation.
         */
        close(el: HTMLElement | string, animate?: boolean): Framework7.Notification;
    };
    /** Panel module. */
    panel: {
        /**
         * Open Panel.
         * @param side Panel to open: "left" or "right". Required in case you have two panels.
         * @param animate boolean. Should it be opened with animation or not. Optional, by default is true.
         */
        open(side: string, animate?: boolean): Framework7.Panel;

        /**
         * Close Panel.
         * @param side Panel to close. Optional, by default will close any opened panel.
         * @param animate  Should it be opened with animation or not. Optional, by default is true.
         */
        close(side?: string, animate?: boolean): Framework7.Panel;

        /**
         * Create new panel instance.
         * `Use this method only in case you have added panel to DOM after app initialization. Otherwise it will be created automatically`
         * @param params Object with panel parameters.
         */
        create(params: Framework7.Panel.Parameter): Framework7.Panel;

        /**
         * Get Panel instance by specified side.
         * @param side Panel to get.
         */
        get(side: string): Framework7.Panel;

        /**
         * Enable swipes for panel (swipe-to-close and swipe-to-open).
         * @param side Panel to enable swipe actions on.
         */
        enableSwipe(side: string): void;

        /**
         * Disable swipes for panel (swipe-to-close and swipe-to-open)
         * @param side Panel to disable swipe actions on.
         */
        disableSwipe(side: string): void;

        /** Left panel instance. */
        left: Framework7.Panel;

        /** Right panel instance. */
        right: Framework7.Panel;
    };
    /** PhotoBrowser module. */
    photoBrowser: {
        /**
         * Create Photo Browser instance.
         * @param params Object with Photo Browser parameters.
         */
        create(params: Framework7.PhotoBrowser.Parameter): Framework7.PhotoBrowser;

        /**
         * Destroy Photo Browser instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Photo Browser element or Photo Browser instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Photo Browser instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Photo Browser element.
         */
        get(el: HTMLElement | string): Framework7.PhotoBrowser;
    };
    /** picker module. */
    Picker: {
        /**
         * Create Picker instance.
         * @param params Object with Picker parameters.
         */
        create(params: Framework7.Picker.Parameter): Framework7.Picker;

        /**
         * Destroy Picker instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Picker element or Picker instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Picker instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Picker element.
         */
        get(el: HTMLElement | string): Framework7.Picker;

        /**
         * Get Picker instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Picker element.
         */
        close(el: HTMLElement | string): Framework7.Picker;
    };
    /** Popover module. */
    popover: {
        /**
         * Create Popover instance.
         * @param params Object with Popover parameters.
         */
        create(params: Framework7.Popover.Parameter): Framework7.Popover;

        /**
         * Destroy Popover instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Popover element or Popover instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Popover instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Popover element.
         */
        get(el: HTMLElement | string): Framework7.Popover;

        /**
         * opens Popover.
         * @param el HTMLElement or string (with CSS Selector). Popover element to open.
         * @param targetEl HTMLElement or string (with CSS Selector). Target element to set popover position around this element.
         * @param animate  boolean. Open Popover with animation.
         */
        open(el: HTMLElement | string, targetEl: HTMLElement | string, animate?: boolean): Framework7.Popover;

        /**
         * Closes Popover.
         * @param el HTMLElement or string (with CSS Selector). Popover element to open.
         * @param animate boolean. Close Popover with animation.
         */
        close(el: HTMLElement | string, animate?: boolean): Framework7.Popover;
    };
    /** Popup module. */
    popup: {
        /**
         * Create Popup instance.
         * @param params Object with Popup parameters.
         */
        create(params: Framework7.Popup.Parameter): Framework7.Popup;

        /**
         * Destroy Popup instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Popup element or Popup instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Popup instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Popup element.
         */
        get(el: HTMLElement | string): Framework7.Popup;

        /**
         * Opens Popup.
         * @param el HTMLElement or string (with CSS Selector). Popup element to open.
         * @param animate  boolean. Open Popup with animation.
         */
        open(el: HTMLElement | string, animate?: boolean): Framework7.Popup;

        /**
         * Closes Popup.
         * @param el HTMLElement or string (with CSS Selector). Popup element to open.
         * @param animate boolean. Close Popup with animation.
         */
        close(el: HTMLElement | string, animate?: boolean): Framework7.Popup;
    };
    /** Preloader module. */
    preloader: {
        /** Show Preloader overlay */
        show(color?: string): void;

        /** Hide Preloader overlay */
        hide(): void;
    };
    /** Progressbar module. */
    progressbar: {
        /**
         * Set progress for Determinate Progressbar.
         * @param el string or HTMLElement. Progressbar element or element containing progressbar element. If string - CSS selector of such element.
         * @param progress number. Progress in percents (from 0 to 100).
         * @param duration number. Transition duration of progress change animation (in ms).
         */
        set(el: HTMLElement | string, progress: number, duration: number): HTMLElement;

        /**
         * Set progress for Determinate Progressbar which is under the app root element.
         * @param progressnumber. Progress in percents (from 0 to 100).
         * @param duration number. Transition duration of progress change animation (in ms).
         */
        set(progress: number, duration: number): HTMLElement;

        /**
         * Create and show or just show (if already presented) progressbar.
         * @param el string or HTMLElement. Progressbar element container or element containing progressbar element. If string - CSS selector of such element.
         * @param progress number. Progress in percents (from 0 to 100). Optional.
         * @param color string. Color of progressbar, for example "white", "red", etc. from available color themes. Optional.
         */
        show(el: HTMLElement | string, progress?: number, color?: string): HTMLElement;

        /**
         * Create and show or just show (if already presented) progressbar. argument, it will look for (or create) progressbar element under app root.
         * @param progress number. Progress in percents (from 0 to 100). Optional.
         * @param color string. Color of progressbar, for example "white", "red", etc. from available color themes. Optional.
         */
        show(progress?: number, color?: string): HTMLElement;

        /**
         * Create and show or just show (if already presented) progressbar. argument, it will look for (or create) progressbar element under app root.
         * @param color string. Color of progressbar, for example "white", "red", etc. from available color themes.
         */
        show(color: string): HTMLElement;

        /**
         * Hide Progressbar.
         * @param el string or HTMLElement. Progressbar element container or element containing progressbar element. If string - CSS selector of such element. If not specified then it will look for such element under the app root element.
         */
        hide(el?: HTMLElement | string): void;
    }
    /** Pull To Refresh module. */
    ptr: {
        /**
         * Initialise PTR on specified HTML element container.
         * `Use this method only in case you have added ptr content after page init or if you want to enable it later. Otherwise if there is "ptr-content" element on page init it will be created automatically.`
         * @param el  HTMLElement or string (with CSS selector) - PTR element (`ptr-content`). Required.
         */
        create(el: HTMLElement | string): Framework7.PullToRefresh;

        /**
         * Remove PTR event listeners from the specified HTML element.
         * @param el HTMLElement or string (with CSS selector) - PTR element (`ptr-content`). Required.
         */
        destroy(el: HTMLElement | string): void;

        /**
         * Get PTR instance by HTML element
         * @param el HTMLElement or string (with CSS Selector). PTR element (`ptr-content`).
         */
        get(el: HTMLElement | string): Framework7.PullToRefresh;

        /**
         * Reset PTR state on specified PTR content element.
         * @param el HTMLElement or string (with CSS Selector). PTR element (ptr-content). Required.
         */
        done(el?: HTMLElement | string): void;

        /**
         * Trigger PTR on specified PTR content element.
         * @param el HTMLElement or string (with CSS Selector). PTR element (ptr-content). Required.
         */
        refresh(el: HTMLElement | string): void;
    };
    /** Range Slider module. */
    range: {
        /**
         * Create Range Slider instance.
         * @param params Object with Range Slider parameters.
         */
        create(params: Framework7.RangeSlider.Parameter): Framework7.RangeSlider;

        /**
         * Destroy Range Slider instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Range Slider element or Range Slider instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Range Slider instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Range Slider element.
         */
        get(el: HTMLElement | string): Framework7.RangeSlider;

        /**
         * Get Range Slider value.
         * @param el HTMLElement or string (with CSS Selector). Range Slider element.
         */
        getValue(el: HTMLElement | string): number | number[];

        /**
         * Set new Range Slider value.
         * @param el HTMLElement or string (with CSS Selector). Range Slider element.
         * @param value number (in case of single range) or array of values (in case of dual range)
         */
        setValue(el: HTMLElement | string, value: number | number[]): Framework7.RangeSlider;
    };
    /** Searchbar module. */
    searchbar: {
        /**
         * Create Searchbar instance.
         * @param params Object with Searchbar parameters.
         */
        create(params: Framework7.Searchbar.Parameter): Framework7.Searchbar;

        /**
         * Destroy Searchbar instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Searchbar element or Searchbar instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Searchbar instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Searchbar element.
         */
        get(el: HTMLElement | string): Framework7.Searchbar;

        /**
         * Clear Searchbar text input.
         * @param el HTMLElement or string (with CSS Selector). Searchbar element.
         */
        clear(el: HTMLElement | string): Framework7.Searchbar;

        /**
         * Enable Searchbar.
         * @param el HTMLElement or string (with CSS Selector). Searchbar element.
         */
        enable(el: HTMLElement | string): Framework7.Searchbar;

        /**
         * Disable Searchbar.
         * @param el HTMLElement or string (with CSS Selector). Searchbar element.
         */
        disable(el: HTMLElement | string): Framework7.Searchbar;

        /**
         * Toggle Searchbar: enable if it was disabled, or disable if it was enabled.
         * @param el HTMLElement or string (with CSS Selector). Searchbar element.
         */
        toggle(el: HTMLElement | string): Framework7.Searchbar;

        /**
         * Search with query.
         * @param el HTMLElement or string (with CSS Selector). Searchbar element.
         */
        search(el: HTMLElement | string, query: string): Framework7.Searchbar;
    };
    /** Sheet Modal module. */
    sheet: {
        /**
         * Create SheetModal instance.
         * @param params Object with SheetModal parameters.
         */
        create(params: Framework7.ActionSheet.Parameter): Framework7.SheetModal;

        /**
         * Destroy SheetModal instance.
         * @param el HTMLElement or string (with CSS Selector) or object. SheetModal element or SheetModal instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get SheetModal instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). SheetModal element.
         */
        get(el: HTMLElement | string): Framework7.SheetModal;

        /**
         * Opens Sheet.
         * @param el HTMLElement or string (with CSS Selector). Sheet element to open.
         * @param animate boolean. Open Sheet with animation.
         */
        open(el: HTMLElement | string, animate?: boolean): Framework7.SheetModal;

        /**
         * Closes Sheet
         * @param el HTMLElement or string (with CSS Selector). Sheet element to close.
         * @param animate boolean. Close Sheet with animation.
         */
        close(el: HTMLElement | string, animate?: boolean): Framework7.SheetModal;
    };
    /** Smart Select module. */
    smartSelect: {
        /**
         * Create SmartSelect instance.
         * @param params Object with SmartSelect parameters.
         */
        create(params: Framework7.SmartSelect.Parameter): Framework7.SmartSelect;

        /**
         * Destroy SmartSelect instance.
         * @param el HTMLElement or string (with CSS Selector) or object. SmartSelect element or SmartSelect instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get SmartSelect instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). SmartSelect element.
         */
        get(el: HTMLElement | string): Framework7.SmartSelect;

        /**
         * Opens Smart Select.
         * @param el HTMLElement or string (with CSS Selector). Smart Select element to open.
         */
        open(el: HTMLElement | string): Framework7.SmartSelect;

        /**
         * Closes Smart Select.
         * @param el HTMLElement or string (with CSS Selector). Smart Select element to close.
         */
        close(el: HTMLElement | string): Framework7.SmartSelect;
    };
    /** Sortable List module. */
    sortable: {
        /**
         * Enable sorting mode on sortable list.
         * @param params HTMLElement or string (with CSS Selector). Sortable list block element.
         */
        enable(el: HTMLElement | string): void;

        /**
         * Disable sorting mode on sortable list.
         * @param el HTMLElement or string (with CSS Selector). Sortable list block element.
         */
        disable(el: HTMLElement | string): void;

        /**
         * Toggle sorting mode on sortable list.
         * @param el HTMLElement or string (with CSS Selector). Sortable list block element.
         */
        toggle(el: HTMLElement | string): void;
    };
    /** Stepper module. */
    stepper: {
        /**
         * create Stepper instance.
         * @param params object. Object with Stepper parameters.
         */
        create(params: Framework7.Stepper.Parameter): Framework7.Stepper;

        /**
         * Destroy Stepper instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Stepper instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Stepper instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Stepper element.
         */
        get(el: HTMLElement | string): Framework7.Stepper;

        /**
         * get Stepper value.
         * @param el HTMLElement or string (with CSS Selector). Stepper element.
         */
        getValue(el: HTMLElement | string): number;

        /**
         * get Stepper value.
         * @param el HTMLElement or string (with CSS Selector). Stepper element.
         * @param value number. the value will be set into stepper.
         */
        setValue(el: HTMLElement | string, value: number): Framework7.Stepper;
    };

    statusbar: {
        /**
         * Hide statusbar. In webapp it just hides statusbar overlay, but in cordova app it will hide statusbar at all.
         * `Hiding device statusbar is available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar`
         */
        hide(): void;

        /** Show statusbar. */
        show(): void;

        /**
         * Makes the statusbar overlay or not overlay the WebView.
         * `This functionality is only available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar`
         * @param overlays boolean - does it overlay or not
         */
        iosOverlaysWebView(overlays?: boolean): void;

        /**
         * `iOS-only feature` Set/change statusbar text color.
         * `This functionality is only available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar`
         * @param color
         */
        setIosTextColor(color: string): void;

        /**
         * Set/change statusbar background color.
         * @param hex string - Hex string (`#RRGGBB`) with background color
         */
        setBackgroundColor(hex: string): void;

        /**
         * Returns `true` if system statusbar is visible and `false` when it is not visible
         * `This functionality is only available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar`
         */
        isVisible(): boolean;
    };
    /** swiper module. */
    swiper: {
        /** Unset grab cursor. */
        unsetGrabCursor(): void;

        /** Set grab cursor. */
        setGrabCursor(): void;

        /**
         * Initialize slider with options
         * @param el HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
         * @param params Object with Swiper parameters. Optional.
         */
        create(el: HTMLElement | string, params?: Framework7.Swiper.Parameter): Framework7.Swiper;

        /**
         * Destroy Swiper instance.
         * @param el HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
         */
        destroy(el: HTMLElement | string): void;

        /**
         * Get Swiper instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.
         */
        get(el: HTMLElement | string): Framework7.Swiper;
    };
    /** Tabs module. */
    tabs: {
        /**
         * Show tab content.
         * @param tabEl HTMLElement or string (with CSS Selector) of Tab to show. Requred.
         * @param animate boolean - Should it become visible with animation or not (in case of animated or swipeable tabs). Optional.
         */
        show(tabEl: HTMLElement | string, animate?: boolean): { newTabEl: HTMLElement, oldTabEl: HTMLElement };

        /**
         * Show tab content.
         * @param tabEl HTMLElement or string (with CSS Selector) of Tab to show. Requred.
         * @param tabLinkEl HTMLElement or string (with CSS Selector) of Tab link/button to be activated with this tab. Useful to pass in case you have a complex layout to tell Framework7 which tab link/button must be activated.
         * @param animate boolean - Should it become visible with animation or not (in case of animated or swipeable tabs). Optional.
         */
        show(tabEl: HTMLElement | string, tabLinkEl: HTMLElement | string, animate?: boolean): { newTabEl: HTMLElement, oldTabEl: HTMLElement };
    };
    /** Toast module. */
    toast: {
        /**
         * Create Toast instance.
         * @param params Object with Toast parameters.
         */
        create(params: Framework7.Toast.Parameter): Framework7.Toast;

        /**
         * Destroy Toast instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Toast element or Toast instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Toast instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Toast element.
         */
        get(el: HTMLElement | string): Framework7.Toast;

        /**
         * Opens Toast.
         * @param el HTMLElement or string (with CSS Selector). Toast element to open.
         * @param animate boolean. Open Toast with animation.
         */
        open(el: HTMLElement | string, animate: boolean): Framework7.Toast;

        /**
         * Closes Toast.
         * @param el  HTMLElement or string (with CSS Selector). Toast element to close.
         * @param animate boolean. Close Toast with animation.
         */
        close(el: HTMLElement | string, animate: boolean): Framework7.Toast;

        /**
         * Create Toast instance and show immediately.
         * @param params Object with Toast parameters.
         */
        show(params: Framework7.Toast.Parameter): Framework7.Toast;
    };
    /** Toggle module. */
    toggle: {
        /**
         * Create Toggle instance.
         * @param params Object with Toggle parameters.
         */
        create(params: Framework7.Toggle.Parameter): Framework7.Toggle;

        /**
         * Destroy Toggle instance.
         * @param el HTMLElement or string (with CSS Selector) or object. Toggle element or Toggle instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get Toggle instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). Toggle element.
         */
        get(el: HTMLElement | string): Framework7.Toggle;
    };
    /** Toolbar module. */
    toolbar: {
        /**
         *
         * @param toolbarEl HTMLElement or string (with CSS Selector) of required tabbar. Required.
         * @param animate Boolean - whether it should be hidden with animation or not. By default is true
         */
        hide(toolbarEl: HTMLElement | string, animate?: boolean): void;

        /**
         *
         * @param toolbarEl HTMLElement or string (with CSS Selector) of required tabbar. Required.
         * @param animate Boolean - whether it should be shown with animation or not. By default is true
         */
        show(toolbarEl: HTMLElement | string, animate?: boolean): void;

        /**
         *
         * @param toolbarEl HTMLElement or string (with CSS Selector) of required tabbar. Required.
         */
        setHighlight(toolbarEl: HTMLElement | string): void;
    };

    virtual: {
        /**
         * Create VirtualList instance.
         * @param params Object with VirtualList parameters.
         */
        create(params: Framework7.VirtualList.Parameter): Framework7.VirtualList;

        /**
         * Destroy VirtualList instance.
         * @param el HTMLElement or string (with CSS Selector) or object. VirtualList element or VirtualList instance to destroy.
         */
        destroy(el: HTMLElement | string | object): void;

        /**
         * Get VirtualList instance by HTML element.
         * @param el HTMLElement or string (with CSS Selector). VirtualList element.
         */
        get(el: HTMLElement | string): Framework7.VirtualList;
    }

    /** Router of app */
    router: Framework7.Router;

    /** views of app */
    views: {
        [key: number]: Framework7.View;

        /** number of views */
        length: number;

        /**
         * Initialize View.
         * @param params Object with View parameters.
         */
        create(el: string | HTMLElement, params?: Framework7.View.Parameter): Framework7.View;

        /**
         * Get get View instance by HTML element.
         * @param el If string - CSS selector of View element.
         */
        get(el: HTMLElement | string): Framework7.View;

        /**
         * Get currently active/visible View instance.
         */
        current: Framework7.View;

        /** Main view of app. */
        main: Framework7.View;
    }

    //
    // ─── METHODS ─────────────────────────────────────────────────────
    //

    /**
     * The Framework7 contructor.
     * @param params paramaters that will be password the contructor
     */
    constructor(params: Framework7.Parameter);

    /**
     * Add event handler.
     * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
     * @param handler the handle function that will be added for the event
     */
    on(event: string, handler: (event : Event) => void): void;

    /**
     * Add event handler that will be removed after it was fired.
     * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
     * @param handler the handle function that will be fired once for the event
     */
    once(event: string, handler: (event : Event) => void): void;

    /**
     * Remove event handler.
     * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
     * @param handler the handle function that will be removed for the event
     */
    off(event: string, handler: (event : Event) => void): void;

    /**
     * Remove all handlers for specified event.
     * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
     */
    off(event: string): void;

    /**
     * Fire event on instance.
     * @param event event name.
     * @param args argument that will be passed into the event handler.
     */
    emit(event: string, ...args: any[]): void;

    /** Initialize app. In case you disabled auto initialization with init: false parameter. */
    init(): void;
}

declare namespace Framework7 {
    /** Dom 7 */
    function $(selector: any, context: any): any;

    /** Use modules */
    function use(args: any[]): any;

    // reference: <href>https://framework7.io/docs/app.html#app-methods-properties</href>
    interface Parameter {
        /** App bundle id. `Default: io.framework7.testapp`*/
        id?: string;
        /** App name. Can be used by other components, e.g. as the default title for Dialog component. `Default: Framework7` */
        name?: string;
        /** App version. Can be used by other components. `Default: 1.0.0`*/
        version?: string;
        /** App theme. Can be `ios`, `md` or `auto`. In case of `auto` it will use iOS theme for iOS devices and MD theme for all other devices. `Default: auto` */
        theme?: string;
        /** App language. Can be used by other components. By default equal to the current browser/webview language (i.e. navigator.language). */
        language?: string;
        /** Array with default routes to all views. `Default: []` */
        routes?: Route[];
        /** App root element. `Default: body`*/
        root?: string;
        /** App root data. Must be a function that returns an object with root data. */
        data?: () => object;
        /** App root methods. Object with methods. `Default: {}`*/
        methods?: { [key: string]: () => void };
        /** Object with events handlers. `Default: {}`*/
        on?: { [key: string]: Function };
        /** By default Framework7 will be initialized automatically when you call new Framework7(). If you want to prevent this behavior you can disable it with this option and then initialize it manually with app.init() when you need it. `Default: true`*/
        init?: boolean;
        /** If automatic initialization is enabled with init: true parameter and app is running under cordova environment then it will be initialized on deviceready event. `Default: true`*/
        initOnDeviceReady?: boolean;

        //
        // ─── CLICK MODULES PARAMTERS ─────────────────────────────────────
        //

        /** Object with clicks-module related parameters */
        clicks?: {
            /** CSS selector for links that should be treated as external and shouldn't be handled by Framework7. For example such '.external' value will match to links like <a href="somepage.html" class="external"> (with class "external"). `Default: .external` */
            externalLinks?: string
        };

        //
        // ─── TOUCH MODULE PARAMTERS ──────────────────────────────────────
        //

        /** Object with touch-module related parameters */
        touch?: {
            /** Fast clicks is a built-in library that removes 300ms delay from links and form elements in mobile browser while you click them. You can disable this built-in library if you want to use other third party fast clicks script. `Default: true` */
            fastClicks?: boolean,
            /** Distance threshold (in px) to prevent short taps. So if tap/move distance is larger than this value then "click" will not be triggered. `Default: 10` */
            fastClicksDistanceThreshold?: number,
            /** Minimal allowed delay (in ms) between multiple clicks. `Default: 50` */
            fastClicksDelayBetweenClicks?: number,
            /** This parameter allows to specify elements not handled by fast clicks by passing CSS selector of such elements. */
            fastClicksExclude?: string,
            /** A boolean flat that disables the context menu. `Default: true` */
            disableContextMenu?: boolean,
            /** Enables tap hold. `Default: false`*/
            tapHold?: boolean,
            /** Determines how long (in ms) the user must hold their tap before the taphold event is fired on the target element. `Default: 750` */
            tapHoldDelay?: number,
            /** When enabled (by default), then click event will not be fired after tap hold event. `Default: true` */
            tapHoldPreventClicks?: boolean
            /** When enabled, app will add "active-state" class to currently touched (:active) element. `Default: true`*/
            activeState?: boolean,
            /** CSS selector of elements where enabled activeState will add appropriate active class. `Default: a, button, label, span, .actions-button` */
            activeStateElements?: string,
            /** Enables Material theme specific touch ripple effect. `Default: true` */
            materialRipple?: boolean,
            /** CSS selector of elements to apply touch ripple effect on click.
             * `Default: .ripple, .link, .item-link, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell, .notification-close-button`
             */
            materialRippleElements?: string
        };

        //
        // ─── VIEW MODULE PARAMETERS ──────────────────────────────────────
        //

        view?: View.Parameter;
        actions?: ActionSheet.Parameter;
        calendar?: Calendar.Parameter;
        dataTable?: DataTable.Parameter;
        dialog?: Dialog.AppParameter;
        input?: Input.AppParameter;
        lazy?: LazyLoad.AppParameter;
        panel?: Panel.AppParameter;
        photoBrowser?: PhotoBrowser.Parameter;
        popover?: Popover.Parameter;
        popup?: Popup.Parameter;
        sheet?: SheetModal.Parameter;
        smartSelect?: SmartSelect.Parameter;
        sortable?: SortableList.Parameter;
        stepper?: Stepper.Parameter;
        statusbar?: Statusbar.Parameter;
        swipeout?: Swipeout.Parameter;
        toast?: Toast.Parameter;
        navbar?: Navbar.AppParameter;
        toolbar?: Toolbar.Parameter;
        notification?: Notification.Parameter;
    }

    //
    // ─── ACCORDION MODULE ───────────────────────────────────────────────────────────
    //

    /**
     * Accordion / Collapsible
     * <ref>https://framework7.io/docs/accordion.html#accordion-app-methods</ref>
     */
    class Accordion {

    }

    //
    // ─── ACTION SHEET MODULE ────────────────────────────────────────────────────────
    //

    /** Action Sheet / Actions <ref>https://framework7.io/docs/action-sheet.html</ref> */
    class ActionSheet {
        /** Link to global app instance. */
        app: Framework7;
        /** Action sheet HTML element. */
        el: HTMLElement;
        /** Dom7 instance with action sheet HTML element. */
        $el: Dom7.Dom7;
        /** Backdrop HTML element. */
        backdropEl: HTMLElement;
        /** Dom7 instance with backdrop HTML element. */
        $backdropEl: Dom7.Dom7;
        /** Action sheet instance parameters. */
        params: ActionSheet.Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Open action sheet.
         * @param animate boolean (by default true) - defines whether it should be opened with animation.
         */
        open(animate?: boolean): void;

        /**
         * Close action sheet.
         * @param animate boolean (by default true) - defines whether it should be closed with animation
         */
        close(animate?: boolean): void;

        /** Destroy action sheet. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `actionsOpen` | `opened` | `actionsOpened` | `close` | `actionsClose` | `closed` | `actionsClosed` | `beforeDestroy` | `actionsBeforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `actionsOpen` | `opened` | `actionsOpened` | `close` | `actionsClose` | `closed` | `actionsClosed` | `beforeDestroy` | `actionsBeforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `actionsOpen` | `opened` | `actionsOpened` | `close` | `actionsClose` | `closed` | `actionsClosed` | `beforeDestroy` | `actionsBeforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `actionsOpen` | `opened` | `actionsOpened` | `close` | `actionsClose` | `closed` | `actionsClosed` | `beforeDestroy` | `actionsBeforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;

    }

    namespace ActionSheet {
        /** Button in action sheet */
        interface ActionSheetButton {
            /** String with Button's text (could be HTML string). */
            text: string;
            /** HTML string of icon. */
            icon?: string;
            /** Enables bold button text. `Default: false` */
            bold?: boolean;
            /** Button color, one of default colors. */
            color?: string;
            /** Button background color, one of default colors. */
            bg?: string;
            /** If enabled then it will be rendered as label instead of button. `Default: false` */
            label?: boolean;
            /** Defines whether the button is disabled or not. `Default: false` */
            disabled?: boolean;
            /** If enabled then button click will close Action Sheet `Default: true` */
            close?: boolean;
            /**
             * Callback function that will be executed after click on this button
             * @param actions Action sheet instance
             * @param event Event for the click action
             */
            onClick?: (actions: ActionSheet, event: Event) => void;
        }

        /** Action sheet initialize parameters */
        interface Parameter {
            /** Action Sheet element. Can be useful if you already have Action Sheet element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Full Action Sheet HTML content string. Can be useful if you want to create Action Sheet element with custom HTML */
            content?: string;
            /** Enables Action Sheet backdrop (dark semi transparent layer behind). */
            backdrop?: boolean;
            /** When enabled, action sheet will be closed on backdrop click. */
            closeByBackdropClick?: boolean;
            /** Whether the Action Sheet should be opened/closed with animation or not. Can be overwritten in .open() and .close() methods. */
            animate?: boolean;
            /** Action sheet groups/buttons. In this case Actions layout will be generated dynamically based on passed groups and buttons. In case of groups it should array where each item represent array with buttons for group. */
            buttons?: ActionSheetButton[];
            /** Enables grid buttons layout. */
            grid?: boolean;
            /** When enabled, action sheet will be converted to Popover on large screens. */
            convertToPopover?: boolean;
            /** When enabled, action sheel will be always converted to Popover. */
            forceToPopover?: boolean;
            /** HTML element or string CSS selector of target element. Required when converstion to popover is in use. */
            targetEl?: HTMLElement | string;
            /** irtual target element horizontal offset from left side of the screen. Required when converstion to popover is in use without using real target element (targetEl). */
            targetX?: number;
            /** Virtual target element vertical offset from top of the screen. Required when converstion to popover is in use without using real target element (targetEl). */
            targetY?: number;
            /** Virtual target element width (in px). Required when converstion to popover is in use without using real target element (targetEl). */
            targetWidth?: number;
            /** Virtual target element height (in px). Required when converstion to popover is in use without using real target element (targetEl). */
            targetHeight?: number;
            /** Callback function that will be executed after click on the Action Sheet button. */
            onClick?: (actions: ActionSheet, event: Event) => void;
            /** Custom function to render Action Sheet. Must return Action Sheet html. */
            render?: () => string;
            /** Custom function to render Popover when conversition to popover is in use. Must return Popover html */
            renderPopover?: () => string;
            /** Object with events handlers. */
            on?: { [key:string]: Function };
        }
    }

    //
    // ─── AUTOCOMPLETE MODULE ────────────────────────────────────────────────────────
    //

    /** Autocomplete <ref>https://framework7.io/docs/autocomplete.html#autocomplete-app-methods</ref> */
    class Autocomplete {
        /** Object with passed initialization parameters. */
        params: Autocomplete.Parameter;
        /** Array with selected items. */
        value: string[];
        /** true if Autocomplete is currently opened. */
        opened: boolean;
        /** HTML element of Autcomplete opener element (if passed on init). */
        openerEl: HTMLElement;
        /** Dom7 instance of of Autcomplete opener element (if passed on init). */
        $openerEl: Dom7.Dom7;
        /** HTML element of Autcomplete input (if passed on init). */
        inputEl: HTMLInputElement;
        /** Dom7 instance of of Autcomplete input (if passed on init). */
        $inputEl: Dom7.Dom7;
        /** Dom7 instance of Autcomplete dropdown. */
        $dropdownEl: Dom7.Dom7;
        /** Autcomplete URL (that was passed in url parameter). */
        url: string;
        /** Autcomplete View (that was passed in view parameter) or found parent view */
        view: View;
        /** HTML element of Autcomplete container: dropdown element, or popup element, or page element. Available when Autocomplete opened. */
        el: HTMLElement;
        /** Dom7 instance of Autcomplete container: dropdown element, or popup element, or page element. Available when Autocomplete opened. */
        $el: Dom7.Dom7;
        /** Autcomplete page Searchbar instance */
        searchbar: any;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /** Open Autocomplete (Dropdown, Page or Popup). */
        open(): void;

        /** Close Autcomplete. */
        close(): void;

        /** Show autocomplete preloader. */
        preloaderShow(): void;

        /** Hide autocomplete preloader. */
        preloaderHide(): void;

        /** Destroy Autocomplete instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `change` | `autocompleteChange` | `open` | `autocompleteOpen` | `opened` | `autocompleteOpened` | `close` | `autocompleteClose` | `closed` | `autocompleteClosed` | `beforeDestroy` | `autocompleteBeforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `change` | `autocompleteChange` | `open` | `autocompleteOpen` | `opened` | `autocompleteOpened` | `close` | `autocompleteClose` | `closed` | `autocompleteClosed` | `beforeDestroy` | `autocompleteBeforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `change` | `autocompleteChange` | `open` | `autocompleteOpen` | `opened` | `autocompleteOpened` | `close` | `autocompleteClose` | `closed` | `autocompleteClosed` | `beforeDestroy` | `autocompleteBeforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `change` | `autocompleteChange` | `open` | `autocompleteOpen` | `opened` | `autocompleteOpened` | `close` | `autocompleteClose` | `closed` | `autocompleteClosed` | `beforeDestroy` | `autocompleteBeforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }

    namespace Autocomplete {
        /** Action sheet initialize parameters */
        interface Parameter {
            /** Defines how to open Autocomplete, can be page or popup (for Standalone) or dropdown. `Default: page` */
            openIn?: string;
            /** Function which accepts search query and render function where you need to pass array with matched items. */
            source?: (query: string, render: (items: string[]) => void) => void;
            /** Limit number of maximum displayed items in autocomplete per query. */
            limit?: number;
            /** Set to true to include Preloader to autocomplete layout. `Default: false` */
            preloader?: boolean;
            /** Preloader color, one of the default colors: `red` | `green` | `blue` | `pink` | `yellow` | `orange` | `gray` | `white` | `black` */
            preloaderColor?: string;
            /** Array with default selected values. */
            value?: string[];
            /** Name of matched item object's key that represents item value.  `Default: id` */
            valueProperty?: string;
            /** Name of matched item object's key that represents item display value which is used as title of displayed options.  `Default: text` */
            textProperty?: string;

            // Standalone Autocomplete Parameters

            /** If enabled, then it will request passed to source function on autocomplete open. `Default: false` */
            requestSourceOnOpen?: boolean;
            /** String with CSS selector or HTMLElement of link which will open standalone autocomplete page or popup on click. */
            openerEl?: string | HTMLElement;
            /** Default text for "Close" button when opened as Popup.  `Default: Close` */
            popupCloseLinkText?: string;
            /** Default text for "Back" link when opened as Page.  `Default: Back` */
            pageBackLinkText?: string;
            /** Autocomplete page title. If nothing is specified and passed openerEl is an item of List View, then text value of item-title element will be used. */
            pageTitle?: string;
            /** Searchbar placeholder text. `Default: Search...` */
            searchbarPlaceholder?: string;
            /**Searchbar "Cancel" button text. `Default: Cancel`*/
            searchbarDisableText?: string;
            /** Text which is displayed when no matches found. `Default: Nothing found` */
            notFoundText?: string;
            /** Set to true to allow multiple selections. `Default: false` */
            multiple?: boolean;
            /** Set to true and autocomplete will be closed when user picks value. Not available if multiple is enabled. `Default: false` */
            closeOnSelect?: boolean;
            /** Set to true to auto focus search field on autocomplete open. `Default: false` */
            autoFocus?: boolean;
            /** Set to false to open standalone autocomplete without animation.. `Default: true` */
            animate?: boolean;
            /** Navbar color theme. One of the default color themes. */
            navbarColorTheme?: string;
            /** Form (checkboxes or radios) color theme. One of the default color themes. */
            formColorTheme?: string;
            /** Will add opened autocomplete modal (when openIn: 'popup') to router history which gives ability to close autocomplete by going back in router history and set current route to the autocomplete modal. `Default: true` */
            routableModals?: boolean;
            /** Standalone autocomplete URL that will be set as a current route. `Default: select/` */
            url?: string;
            /** Link to initialized View instance if you want use standalone Autcomplete. By default, if not specified, it will be opened in Main View. */
            view?: View;

            // Dropdown Autocomplete Parameters

            /** String with CSS selector or HTMLElement of related text input. */
            inputEl?: string | HTMLElement;
            /** Allows to configure input events used to handle Autcomplete actions and source request. Can be changed for example to `change keyup compositionend` if you use keyboard with composition of Chinese characters. `Default: input` */
            inputEvents?: string;
            /** Highlight matches in autcomplete results. */
            highlightMatches?: boolean;
            /** Enables type ahead, will prefill input value with first item in match. */
            typeahead?: boolean;
            /** Specify dropdown placeholder text. */
            dropdownPlaceholderText?: string;
            /** If true then value of related input will be update as well */
            updateInputValueOnSelect?: boolean;
            /** If true then input which is used as item-input in List View will be expanded to full screen wide during dropdown visible. */
            expandInput?: boolean;

            // Render functions

            /** Function to render autocomplete dropdown, must return dropdown HTML string. */
            renderDropdown?: (items: string[]) => string;
            /** Function to render autocomplete page, must return page HTML string. */
            renderPage?: (items: string[]) => string;
            /** Function to render autocomplete popup, must return popup HTML string. */
            renderPopup?: (items: string[]) => string;
            /** Function to render single autocomplete, must return item HTML string. */
            renderItem?: (item: string, index: number) => string;
            /** Function to render searchbar, must return searchbar HTML string. */
            renderSearchbar?: () => string;
            /** Function to render navbar, must return navbar HTML string. */
            renderNavbar?: () => string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── CALENDAR AND DATEPICKER MODULE ─────────────────────────────────────────────
    //

    /** Calendar / Datepicker <ref>https://framework7.io/docs/calendar.html</ref> */
    class Calendar {
        /** Link to global app instance. */
        app: Framework7;
        /** Calendar wrapping container HTML element (when inline calendar is in use). */
        containerEl: HTMLElement;
        /** Dom7 instance with calendar wrapping container HTML element (when inline calendar is in use). */
        $containerEl: Dom7.Dom7;
        /** Calendar HTML element. */
        el: HTMLElement;
        /** Dom7 instance with calendar HTML element. */
        $el: Dom7.Dom7;
        /** Calendar input HTML element (passed in inputEl parameter). */
        inputEl: HTMLElement;
        /** Dom7 instance with calendar input HTML element (passed in inputEl parameter). */
        $inputEl: Dom7.Dom7;
        /** Array where each item represents selected date. */
        value: Date[];
        /** true if Calendar is currently opened. */
        opened: boolean;
        /** true when inline calendar is in use. */
        inline: boolean;
        /** Array with specified Calendar columns. Each column also has its own methods and properties (look below). */
        cols: any[];
        /** Calendar URL (that was passed in url parameter). */
        url: string;
        /** Calendar View (that was passed in view parameter) or found parent view. */
        view: View;
        /** Object with passed initialization parameters. */
        params: Calendar.Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Set new selected dates. values is array where each item represents selected date.
         * @param values set the dates value into calendar
         */
        setValue(values: Date[]): void;

        /** Returns current calendar value. */
        getValue(): Date;

        /**
         * Adds value to the values array. Useful in case if multiple selection is enabled (with multiple: true parameter).
         * @param value: a new date that will be added into values array
         */
        addValue(value: Date): void;

        /** Rerenders calendar. Useful in case you added/changed values dynamically and need to update calendar layout. */
        update(): void;

        /** Calendar transition to next month for specified duration in ms. */
        nextMonth(duration: number): void;

        /** Calendar transition to previous month for specified duration in ms. */
        prevMonth(duration: number): void;

        /** Calendar transition to next year. */
        nextYear(): void;

        /** Calendar transition to previous year. */
        prevYear(): void;

        /**
         * Calendar transition to specified year, month for specified duration in ms.
         * @param year The year that will display
         * @param month The month that will display
         * @param duration The duration of transition animation
         */
        setYearMonth(year: number, month: number, duration: number): void;

        /** Open Calendar. */
        open(): void;

        /** Close Calendar. */
        close(): void;

        /** Destroy Calendar instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `dayClick` | `calendarDayClick` | `change` | `calendarChange` | `monthAdd` | `calendarMonthAdd` | `monthYearChangeStart` | `calendarMonthYearChangeStart` | `monthYearChangeEnd` | `calendarMonthYearChangeEnd` | `init` | `calendarInit` | `open` | `calendarOpen` | `opened` | `calendarOpened` | `close` | `calendarClose` | `closed` | `calendarClosed` | `beforeDestroy` | `calendarBeforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `dayClick` | `calendarDayClick` | `change` | `calendarChange` | `monthAdd` | `calendarMonthAdd` | `monthYearChangeStart` | `calendarMonthYearChangeStart` | `monthYearChangeEnd` | `calendarMonthYearChangeEnd` | `init` | `calendarInit` | `open` | `calendarOpen` | `opened` | `calendarOpened` | `close` | `calendarClose` | `closed` | `calendarClosed` | `beforeDestroy` | `calendarBeforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `dayClick` | `calendarDayClick` | `change` | `calendarChange` | `monthAdd` | `calendarMonthAdd` | `monthYearChangeStart` | `calendarMonthYearChangeStart` | `monthYearChangeEnd` | `calendarMonthYearChangeEnd` | `init` | `calendarInit` | `open` | `calendarOpen` | `opened` | `calendarOpened` | `close` | `calendarClose` | `closed` | `calendarClosed` | `beforeDestroy` | `calendarBeforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `dayClick` | `calendarDayClick` | `change` | `calendarChange` | `monthAdd` | `calendarMonthAdd` | `monthYearChangeStart` | `calendarMonthYearChangeStart` | `monthYearChangeEnd` | `calendarMonthYearChangeEnd` | `init` | `calendarInit` | `open` | `calendarOpen` | `opened` | `calendarOpened` | `close` | `calendarClose` | `closed` | `calendarClosed` | `beforeDestroy` | `calendarBeforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Calendar {

        type DateRangeFn = (d: Date) => boolean;
        type DateRange = Date | Date[] | { from: Date; to?: Date; } | DateRangeFn;

        /** Objects with Date Range and class names for a range. */
        interface RangesClass {
            cssClass: string;
            range: DateRange;
        }

        /** Calendar initialize parameters */
        interface Parameter {
            /** Array with initial selected dates. Each array item represents selected date. */
            value?: Date[];
            /** Additonal disabled dates. Parameter accepts so called Date Range. */
            disabled?: DateRange;
            /** Dates with events. Will be marked with additonal "dot" on calendar day. Parameter accepts so called Date Ranges. */
            events?: DateRange[];
            /** Date ranges you want to add custom CSS class for additional styling. Look below for accepted format. */
            rangesClasses?: DateRange[];
            /** Function to format input value, should return new/formatted string value. values is array where each item represents selected date. */
            formatValue?: (values: Date[]) => string;
            /** Array with full month names. `[ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]` */
            monthNames?: string[];
            /** Array with short month names. `[ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]` */
            monthNamesShort?: string[];
            /** Array with week day names. `[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]` */
            dayNames?: string[];
            /** Array with week day short names. `[ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]` */
            dayNamesShort?: boolean;
            /** First day of the week. By default 1 - Monday. `Default: 1` */
            firstDay?: number;
            /** Array with index numeber of weekend days, by default it is Saturday and Sunday. `Default: [0, 6]` */
            weekendDays?: number[];
            /** Default date format. `Default: yyyy-mm-dd` */
            dateFormat?: string;
            /** Enable to allows select multiple dates/values. `Default: false` */
            multiple?: boolean;
            /** Enable to enable range picker. Not compatible with multiple. `Default: false` */
            rangePicker?: boolean;
            /** Months layout direction, could be `horizontal` or `vertical`. `Default: horizontal` */
            direction?: string;
            /** Minimum allowed date. `Default: null` */
            minDate?: Date;
            /** Maximum allowed date. `Default: null` */
            maxDate?: Date;
            /** If enabled then calendar months slides follow finger during touch move. `Default: true` */
            touchMove?: boolean;
            /** Enables transition between months. `Default: true` */
            animate?: boolean;
            /** Enable and calendar will be closed when user pick a date. `Default: false` */
            closeOnSelect?: boolean;
            /** Enable week header with short name week days. `Default: true` */
            weekHeader?: boolean;
            /** Enable month selector in toolbar. `Default: true` */
            monthSelector?: boolean;
            /** Enable year picker in toolbar. `Default: true` */
            yearSelector?: boolean;

            // Container/opener-specific parameters

            /** String with CSS selector or HTMLElement where to place generated Calendar HTML. Use only for inline calendar. */
            containerEl?: string | HTMLElement;
            /** Can be auto, popover (to open calendar in popover), sheet (to open in sheet modal) or customModal (to open in custom Calendar modal overlay). In case of auto will open in sheet modal on small screens and in popover on large screens. `Default: auto` */
            openIn?: string;
            /** String with CSS selector or HTMLElement with related input element. */
            inputEl?: string | HTMLElement;
            /** Scroll viewport (page-content) to input when calendar opened. `Default: true` */
            scrollToInput?: boolean;
            /** Sets "readonly" attribute on specified input. `Default: true` */
            inputReadOnly?: boolean;
            /** Additional CSS class name to be set on calendar element. */
            cssClass?: string;
            /** If enabled, picker will be closed by clicking outside of picker or related input element. `Default: true` */
            closeByOutsideClick?: boolean;
            /** Enables calendar toolbar. `Default: true` */
            toolbar?: boolean;
            /** Text for Done/Close toolbar button. `Default: Done` */
            toolbarCloseText?: string;
            /** Enables calendar header. `Default: false` */
            header?: boolean;
            /** Default calendar header placeholder text. `Default: Select date` */
            headerPlaceholder?: string;
            /** Will add opened calendar to router history which gives ability to close calendar by going back in router history and set current route to the calendar modal. `Default: true` */
            routableModals?: boolean;
            /** Calendar modal URL that will be set as a current route. `Default: date/` */
            url?: string;
            /** View where to set routing when routableModals enabled. Defaults to parent view of inputEl or main view if not found parent view. */
            view?: View;

            // render functions

            /** Function to render week header. Must return week header HTML string. */
            renderWeekHeader?: () => string;
            /** Function to render months wrapper. Must return months container full HTML string. */
            renderMonths?: (date: Date) => string;
            /** Function to render single month. Must return single month HTML string. */
            renderMonth?: (date: Date, offset: any) => string;
            /** Function to render month selector. Must return month selector HTML string. */
            renderMonthSelector?: () => string;
            /** Function to render year selector. Must return year selector HTML string. */
            renderYearSelector?: () => string;
            /** Function to render calendar header. Must return calendar header HTML string. */
            renderHeader?: () => string;
            /** Function to render toolbar. Must return toolbar HTML string. */
            renderToolbar?: () => string;
            /** Function to render whole calendar. Must return calendar full HTML string. */
            render?: () => string;

            // events

            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── DATATABLE MODULE ───────────────────────────────────────────────────────────
    //

    /** Data tables display sets of raw data. They usually appear in desktop enterprise products */
    class DataTable {
    }
    namespace DataTable {

        interface Parameter {
            /** Data Table element. Can be useful if you already have Data Table element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
        }
    }

    //
    // ─── DIALOG MODULE ──────────────────────────────────────────────────────────────
    //

    /** Data tables display sets of raw data. They usually appear in desktop enterprise products */
    class Dialog {
        /** Link to global app instance. */
        app: Framework7;
        /** Dialog HTML element. */
        el: HTMLElement;
        /** Dom7 instance with dialog HTML element. */
        $el: Dom7.Dom7;
        /** Backdrop HTML element. */
        backdropEl: HTMLElement;
        /** Dom7 instance with backdrop HTML element. */
        $backdropEl: Dom7.Dom7;
        /** Dialog parameters. */
        params: Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Open dialog.
         * @param animate boolean (by default true) - defines whether it should be opened with animation.
         */
        open(animate?: boolean): void;

        /**
         * Close dialog.
         * @param animate boolean (by default true) - defines whether it should be closed with animation.
         */
        close(animate?: boolean): void;

        /**
         * Set dialog progress when Dialog Progress shortcut in use.
         * @param progress number - progressbar progress (from 0 to 100).
         * @param duration number (in ms) - progressbar progress change duration.
         */
        setProgress(progress: number, duration: number): void;

        /**
         * Sets dialog's title.
         * @param title string - new dialog title.
         */
        setTitle(title: string): void;

        /**
         * Sets dialog's text.
         * @param text string - new dialog text.
         */
        setText(text: string): void;

        /** Destroy dialog. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Dialog {
        interface Parameter {
            /** Dialog element. Can be useful if you already have Dialog element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Enables Dialog backdrop (dark semi transparent layer behind). `Default: true` */
            backdrop?: boolean;
            /** When enabled, dialog will be closed on backdrop click. `Default: true` */
            closeByBackdropClick?: boolean;
            /** Whether the Dialog should be opened/closed with animation or not. Can be overwritten in .open() and .close() methods. `Default: true` */
            animate?: boolean;
            /** Dialog title */
            title?: string;
            /** Dialog inner text */
            text?: string;
            /** Custom Dialog content that follows dialog text */
            content?: string;
            /** Array with dialog buttons. `Default: []`  */
            buttons?: Button[];
            /** Enables vertical buttons layout. `Default: false` */
            verticalButtons?: boolean;
            /** When enabled will automatically destroy Dialog on close. `Default: false` */
            destroyOnClose?: boolean;
            /**
             * Callback function that will be executed after click on the Dialog button. As an arguments it received dialog instance and clicked button index number.
             * @param dialog Dialog instance.
             * @param index clicked button index number in the dialog.
             */
            onClick?: (dialog: Dialog, index: number) => void;
            /** Additional css class to add */
            cssClass?: string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }

        interface AppParameter {
            /** Default dialogs shortcuts title. If not specified, will be equal to app.name. */
            title?: string;
            /** Default "OK" button text. */
            buttonOk?: string;
            /** Default "Cancel" button text. */
            buttonCancel?: string;
            /** Default username field placeholder in Login dialog. `Default: Username` */
            usernamePlaceholder?: string;
            /** Default password field placeholder in Login & Password dialogs. `Default: Password` */
            passwordPlaceholder?: string;
            /** Default title for Preloader dialog. `Default: Loading...` */
            preloaderTitle?: string;
            /** Default title for Progress dialog. `Default: Loading...` */
            progressTitle?: string;
            /** Will automatically destroy all predefined dialogs (Alert, Confirm, Prompt, etc.) on close. `Default: true` */
            destroyPredefinedDialogs?: boolean;
            /** Enables keyboard shortcuts (Enter and Esc) keys for predefined dialogs (Alert, Confirm, Prompt, Login, Password) "Ok" and "Cancel" buttons. `Default: true` */
            keyboardActions?: boolean;
        }

        interface Button {
            /** String with Button's text (could be HTML string). */
            text: string;
            /** Enables bold button text. `Default: false`. */
            bold?: boolean;
            /** Button color, one of default colors. */
            color?: string;
            /** If enabled then button click will close Dialog. `Default: true` */
            close?: boolean;
            /** Additional button CSS class. */
            cssClass?: string;
            /** Callback function that will be executed after click on this button. */
            onClick?: (dialog: Dialog, event: Event) => void;
        }
    }

    //
    // ─── FAB MODULE ─────────────────────────────────────────────────────────────────
    //

    /** Floating action button (FAB) is used for a promoted action. They are distinguished by a circled icon floating above the UI and have motion behaviors that include morphing, launching, and a transferring anchor point. */
    class FAB {

    }

    //
    // ─── FORM DATA MODULE ───────────────────────────────────────────────────────────
    //

    /**
     * Framework7 comes with some very useful methods, this makes working with forms as simple as possible.
     * <ref>https://framework7.io/docs/form.html#form-data</ref>
     */
    namespace FormData {

        /** Form data object stores in form */
        type FormDataObject = { [key: string]: string | string[] }
    }

    //
    // ─── INPUT AND FORM INPUTS ──────────────────────────────────────────────────────
    //

    namespace Input {
        /** It is possible to control some default input behavior using global app parameters where we can pass input-related parameters under `input` property. */
        interface AppParameter {
            /** When enabled will scroll input into view on input focus. By default it is enabled for android devices only, as it helps to solve issue when on-screen keyboard may overlap the input. */
            scrollIntoViewOnFocus?: boolean;
            /** Tweaks behavior of previous parameter to scroll input into the center of view on input focus. */
            scrollIntoViewCentered?: boolean;
        }
    }

    //
    // ─── LAZY LOAD MODULE ───────────────────────────────────────────────────────────
    //

    namespace LazyLoad {

        /** It is possible to control some default lazy loading behavior using global app parameters by passing lazy loading related parameters under `lazy` parameter. */
        interface AppParameter {
            /** Lazy load image placeholder source to show while image is not yet loaded. By default it is 1x1 px image. */
            placeholder?: string;
            /** By default images are loaded when they appear on the screen. Use this parameter if you want to load images earlier. Setting it to 50 will load image when it 50 pixels before it appears on viewport. */
            threshold?: number;
            /** If enabled, then lazy images will be loaded one by one when they appear in viewport. */
            sequential?: boolean;
        }
    }

    //
    // ─── LOGIN SCREEN MODULE ────────────────────────────────────────────────────────
    //

    /** Framework7 comes with ready to use Login Screen layout. It could be used inside of page or login screen (embedded) or as a standalone modal. */
    class LoginScreen {
        /** Link to global app instance. */
        app: Framework7;
        /** Login Screen HTML element. */
        el: HTMLElement;
        /** Dom7 instance with login screen HTML element. */
        $el: Dom7.Dom7;
        /** Login Screen parameters. */
        params: Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Open login screen.
         * @param animate boolean (by default true) - defines whether it should be opened with animation.
         */
        open(animate?: boolean): void;

        /**
         * Close login screen.
         * @param animate boolean (by default true) - defines whether it should be closed with animation.
         */
        close(animate?: boolean): void;

        /** Destroy login screen. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `dialogOpen` | `opened` | `dialogOpened` | `close` | `dialogClose` | `closed` | `dialogClosed` | `beforeDestroy` | `dialogBeforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace LoginScreen {

        /** Login screen initialize parameters */
        interface Parameter {
            /** Login Screen element. Can be useful if you already have Login Screen element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Full Login Screen HTML layout string. Can be useful if you want to create Login Screen element dynamically. */
            content?: string;
            /** Whether the Login Screen should be opened/closed with animation or not. Can be overwritten in .open() and .close() methods. */
            animate?: boolean;
            /** Object with events handlers. */
            on?: { [key: string]: Function }
        }
    }

    //
    // ─── MESSAGEBAR MODULE ──────────────────────────────────────────────────────────
    //

    /**
     * Framework7 comes with special resizealbe toolbar for usage with Messages.
     * <ref>https://framework7.io/docs/messagebar.html#messagebar-parameters</ref>
     */
    class Messagebar {
        /** Messagebar HTML element. */
        el: HTMLElement;
        /** Dom7 element with messagebar HTML element. */
        $el: Dom7.Dom7;
        /** Messagebar textarea HTML element. */
        textareaEl: HTMLElement;
        /** Dom7 element with messagebar textarea HTML element. */
        $textareaEl: Dom7.Dom7;
        /** Object with passed initialization parameters. */
        params: Messagebar.Parameter;
        /** Array with messagebar attachments */
        attachments: string[];

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /** Get messagebar textarea value. */
        getValue(): string;

        /**
         * Set messagebar textarea value/text.
         * @param value textarea value/text
         */
        setValue(value: string): void;

        /** Clear textarea and update/reset its size. */
        clear(): void;

        /** Focus messagebar textarea. */
        focus(): void;

        /** Remove focus from messagebar textarea. */
        blur(): void;

        /**
         * Set/change messagebar placeholder text.
         * @param placeholder placeholder text
         */
        setPlaceholder(placeholder: string): void;

        /** Force Messagebar to resize messages page depending on messagebar height/size. */
        resizePage(): void;

        /** Dynamically create attachments block HTML element. */
        attachmentsCreate(): void;

        /** Show attachments block. */
        attachmentsShow(): void;

        /** Hide attachments block. */
        attachmentsHide(): void;

        /** Toggle attachments block. */
        attachmentsToggle(): void;

        /** Render attachments block based on attachments data. */
        renderAttachments(): void;

        /** Dynamically create messagebar sheet block HTML element. */
        sheetCreate(): void;

        /** Show messagebar sheet. */
        sheetShow(): void;

        /** Hide messagebar sheet. */
        sheetHide(): void;

        /** Toggle messagebar sheet. */
        sheetToggle(): void;

        /** Destroy messagebar instance. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `change` | `focus` | `blur` | `resizePage` | `attachmentDelete` | `attachmentClick` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `change` | `focus` | `blur` | `resizePage` | `attachmentDelete` | `attachmentClick` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `change` | `focus` | `blur` | `resizePage` | `attachmentDelete` | `attachmentClick` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `change` | `focus` | `blur` | `resizePage` | `attachmentDelete` | `attachmentClick` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;

    }
    namespace Messagebar {

        /** Messagebar initialize parameters */
        interface Parameter {
            /** CSS selector or HTML element of messagebar element (div class="messagebar"). */
            el?: HTMLElement | string;
            /** CSS selector or HTML element of messagebar textarea element. By default (if not passed) will try to look for textarea inside of messagebar. */
            textareaEl?: HTMLElement | string;
            /** Max height of textarea when it resized depending on amount of its text. */
            maxHeight?: number;
            /** Array with attachments. For example ['path/to/image1.png', 'path/to/image2.png']. */
            attachments?: string[];
            /** Disable if you don't want to resize messages page when messagebar textarea size changed. */
            resizePage?: boolean;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
            /** Function to render attachments block. Must return full attachments HTML string. */
            renderAttachments?: (attachments: string[]) => string;
            /** Function to render single attachment. Must return full attachment HTML string. */
            renderAttachment?: (attachment: string[]) => string;
        }
    }

    //
    // ─── MESSAGES MODULE ────────────────────────────────────────────────────────────
    //

    /**
     * Messages component will help you with visualisation of comments and messaging system in your app.
     * <ref>https://framework7.io/docs/messages.html#messages-app-methods</ref>
     */
    class Messages {
        /** Messages container HTML element (<div class="messages">). */
        el: HTMLElement;
        /** Dom7 element with messagebar HTML element. */
        $el: Dom7.Dom7;
        /** Object with passed initialization parameters. */
        params: Messages.Parameter;
        /** Array with messages. */
        messages: Messages.Message[];

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Show typing message indicator.
         * @param message parameters of message to add
         */
        showTyping(message: Messages.Message): void;

        /** Hide typing message indicator. */
        hideTyping(): void;

        /**
         * Add new message to the end or to the beginning depending on method parameter.
         * @param message parameters of message to add. Required.
         * @param method (`append` or `prepend`) dictates to add new message in the end or in the beginning of messages container. Optional, if not specified, then it will add message depending on `newMessagesFirst` parameter.
         * @param animate (by default `true`) You may pass here false and message will be added immediately without any transiton and scrolling animation. Optional. Method returns Messages instance.
         */
        addMessage(message: Messages.Message, method?: string, animate?: boolean): Messages;

        /**
         * Add multiple messages per once.
         * @param messages array with messages to add. Each message in array should be presented as an object with message parameters Required.
         * @param method (`append` or `prepend`) dictates to add new message in the end or in the beginning of messages container. Optional, if not specified, then it will add message depending on `newMessagesFirst` parameter.
         * @param animate (by default `true`) You may pass here false and message will be added immediately without any transiton and scrolling animation. Optional. Method returns Messages instance.
         */
        addMessages(messages: Messages.Message[], method?: string, animate?: boolean): Messages;

        /**
         * Remove message.
         * @param message HTMLElement or string (with CSS Selector) or number (with index number of message from messages array) of message to remove Method returns Messages instance.
         */
        removeMessage(message: HTMLElement | string | number): Messages;

        /**
         * Remove multiple messages.
         * @param messages Array with messages to remove.
         */
        removeMessages(messages: Messages.Message[]): Messages;

        /**
         * Scroll messages to top/bottom depending on newMessagesFirst parameter.
         * @param duration Scroll duration in ms.
         * @param position Scroll position in px
         */
        scroll(duration: number, position: number): void;

        /** Render messages HTML depending on `messages` array */
        renderMessages(): void;

        /** Force messages auto layout. */
        layout(): void;

        /** clear/remove all the messages. */
        clear(): void;

        /** Destroy messages instance. */
        destroy(): void;
    }
    namespace Messages {

        type MessageRule = (message: Message, previousMessage: Message, nextMessage: Message) => boolean;

        /** Messagebar initialize parameters */
        interface Parameter {
            /** Enable Auto Layout to add all required additional classes automatically based on passed conditions. */
            autoLayout?: boolean;
            /** nable if you want to use new messages on top, instead of having them on bottom. */
            newMessagesFirst?: boolean;
            /** Enable/disable messages autoscrolling when adding new message. */
            scrollMessages?: boolean;
            /** If enabled then messages autoscrolling will happen only when user is on top/bottom of the messages view. */
            scrollMessagesOnEdge?: boolean;
            /** Array with initial messages. Each message in array should be presented as an object with single message parameters. */
            messages?: Message[];
            /** Object with events handlers. */
            on?: { [key: string]: Function };
            /** Function to render single message. Must return full message HTML string. */
            renderMessage?: (message: Message) => string;

            // Autolayout Conditions

            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-first` class will be added to message. */
            firstMessageRule?: MessageRule;
            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-last` class will be added to message. */
            lastMessageRule?: MessageRule;
            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-tail` class will be added to message. */
            tailMessageRule?: MessageRule;
            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-same-name` class will be added to message. */
            sameNameMessageRule?: MessageRule;
            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-same-header` class will be added to message. */
            sameHeaderMessageRule?: MessageRule;
            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-same-footer` class will be added to message. */
            sameFooterMessageRule?: MessageRule;
            /** Function that must return boolean `true` or `false` based on required condition depending on previous and next messages. In case of match then `message-same-avatar` class will be added to message. */
            sameAvatarMessageRule?: MessageRule;
            /** Function that must return additional message classes as string, based on required condition depending on previous and next messages. */
            customClassMessageRule?: MessageRule;
        }

        /** Single message parameters that we should use when we pass messages array. */
        interface Message {
            /** Message text. */
            text?: string;
            /** Single message header. */
            header?: string;
            /** Single message footer. */
            footer?: string;
            /** Sender name. */
            name?: string;
            /** Sender avatar URL string. */
            avatar?: string;
            /** Message type - `sent` or `received`. `Default: sent` */
            type?: string;
            /** Message text header */
            textHeader?: string;
            /** Message text footer. */
            textFooter?: string;
            /** Message image HTML string, e.g. <img src="path/to/image">. Can be used instead of `imageSrc` paramet. */
            image?: string;
            /** Message image URL string. Can be used instead of `image` parameter. */
            imageSrc?: string;
            /** Defines whether it should be rendered as a message or as a messages title. */
            isTitle?: boolean;
        }
    }

    //
    // ─── NAVBAR MODULE ──────────────────────────────────────────────────────────────
    //

    namespace Navbar {

        /** It is possible to control some default navbar behavior using global app parameters by passing navbar related parameters under `navbar` parameter. */
        interface AppParameter {
            /** Will hide Navbars on page scroll. `Default: false` */
            hideOnPageScroll?: boolean;
            /** Set to `true` to show hidden Navbar when scrolling reaches end of the page. `Default: true` */
            showOnPageScrollEnd?: boolean;
            /** Set to `false` and hidden Navbar will not become visible when you scroll page to top everytime. They will become visible only at the most top scroll position, in the beginning of the page. `Default: true` */
            showOnPageScrollTop?: boolean;
            /** When enabled then every click on navbar's title element will scroll related page to the top. `Default: true` */
            scrollTopOnTitleClick?: boolean;
            /** When enabled then it will try to position title at the center in iOS theme. Sometime (with some custom design) it may not needed. `This will have effect only in iOS theme`, `Default: true` */
            iosCenterTitle?: boolean;
        }
    }

    //
    // ─── NOTIFICATION MODULE ────────────────────────────────────────────────────────
    //

    class Notification {
        /** Link to global app instance. */
        app: Framework7;
        /** Notification HTML element. */
        el: HTMLElement;
        /** Dom7 instance with notification HTML element. */
        $el: Dom7.Dom7;
        /** Notification parameters. */
        params: Notification.Parameter;

        /** Open notification. */
        open(): void;

        /** Close notification. */
        close(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `click` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `click` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `click` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `click` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Notification {

        /** It is possible to control some default navbar behavior using global app parameters by passing navbar related parameters under `navbar` parameter. */
        interface Parameter {
            /** Notification element. Can be useful if you already have Notification element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Notification icon HTML layout, e.g. <i class="f7-icons">home</i> or image <img src="path/to/icon.png">. */
            icon?: string;
            /** Notification title. */
            title?: string;
            /** Additional text on the right side of title. */
            titleRightText?: string;
            /** Notification subtitle. */
            subtitle?: string;
            /** Notification inner text. */
            text?: string;
            /** Adds notification close button. `Default: false` */
            closeButton?: boolean;
            /** Timeout delay (in ms) to close notification automatically. */
            closeTimeout?: number;
            /** If enabled, notification will be closed on notification click. `Default: false` */
            closeOnClick?: boolean;
            /** If enabled, notification can be closed by swipe gesture. `Default: true` */
            swipeToClose?: boolean;
            /** Additional css class to add. */
            cssClass?: string;
            /** Custom function to render Notification. Must return notification html. */
            render?: () => string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }


    //
    // ─── PAGEDATA ───────────────────────────────────────────────────────────────────
    //

    interface PageData {
        app: Framework7;
        view: View;
        router: Router;
        name: string;
        el: HTMLElement;
        $el: Dom7.Dom7;
        navbarEl: HTMLElement;
        $navbarEl: Dom7.Dom7;
        from: string;
        to: string;
        position: string;
        direction: string;
        route: Route;
        pageFrom: PageData;
        context: Template7.Template7;
        fromPage: PageData;
    }

    //
    // ─── PANEL AND SIDE PANELS ──────────────────────────────────────────────────────
    //

    class Panel {
        /** Link to global app instance. */
        app: Framework7;
        /** String with panel side: `left` or `right`. */
        side: string;
        /** String with panel effect: `cover` or `reveal` */
        effect: string;
        /** Boolean property indicating whether it is opened or not */
        opened: boolean;
        /** Panel HTML element */
        el: HTMLElement;
        /** Dom7 instance with panel HTML element. */
        $el: Dom7.Dom7;
        /** Backdrop HTML element. */
        backdropEl: HTMLElement;
        /** Dom7 instance with backdrop HTML element. */
        $backdropEl: Dom7.Dom7;
        /** Panel parameters. */
        params: Panel.Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Open panel.
         * @param animate boolean (by default true) - defines whether it should be opened with animation or not.
         */
        open(animate?: boolean): void;

        /**
         * Close panel.
         * @param animate boolean (by default true) - defines whether it should be closed with animation or not.
         */
        close(animate?: boolean): void;

        /** Destroy panel instance. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `backdropClick` | `swipeOpen` | `swipe` | `breakpoint` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `backdropClick` | `swipeOpen` | `swipe` | `breakpoint` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `backdropClick` | `swipeOpen` | `swipe` | `breakpoint` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `backdropClick` | `swipeOpen` | `swipe` | `breakpoint` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Panel {

        interface Parameter {
            /** Panel element. */
            el?: HTMLElement;
            /** Can be `left` or `right`. If not passed then will be determined based on `panel-left` or `panel-right` element classes. */
            side?: string;
            /** Can be `cover` or `reveal`. If not passed then will be determined based on `panel-cover` or `panel-reveal` element classes. */
            effect: string;
        }

        /** It is possible to control some default panels behavior using global app parameters by passing panels related parameters under `panel` parameter. */
        interface AppParameter {
            /** Minimal app width (in px) when left panel becomes always visible. */
            leftBreakpoint?: number;
            /** Minimal app width (in px) when right panel becomes always visible. */
            rightBreakpoint?: number;
            /** Disabled by default. If you want to enable ability to open/close side panels with swipe you can pass here left (for `left` panel) or right (for `right` panel) or `both` (for both panels). */
            swipe?: string;
            /** Width (in px) of invisible edge from the screen that triggers swipe panel. `Default: 0` */
            swipeActiveArea?: number;
            /** This parameter gives ability to close opposite panel by swipe. For example, if your swipePanel is "left", then you could close "right" panel also with swipe. `Default: true` */
            swipeCloseOpposite?: boolean;
            /** This parameter allows to close (but not open) panels with swipes. `Default: false` */
            swipeOnlyClose?: boolean;
            /** Fallback option for potentially better performance on old/slow devices. If you enable it, then side panel will not follow your finger during touch, it will be automatically opened/closed on swipe left/right. `Default: false` */
            swipeNoFollow?: boolean;
            /** Panel will not move with swipe if "touch distance" will be less than this value (in px). `Default: 0` */
            swipeThreshold?: number;
            /** Enable/disable ability to close panel by clicking outside of panel (on panel's backdrop). `Default: true` */
            closeByBackdropClick?: boolean;
        }
    }

    //
    // ─── PHOTO BROWSER MODULE ───────────────────────────────────────────────────────
    //

    class PhotoBrowser {
        /** Link to global app instance. */
        app: Framework7;
        /** Photo Browser HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Photo Browser HTML element. */
        $el: Dom7.Dom7;
        /** Index number of currently active photo slide. */
        activeIndex: number;
        /** `true` if Photo Browser in exposition mode. */
        exposed: boolean;
        /** `true` if Photo Browser is currently opened */
        opened: boolean;
        /** Photo Browser URL (that was passed in `url` parameter) */
        url: string;
        /** Photo Browser View (that was passed in `view` parameter) or found parent view */
        view: View;
        /** Contains initialized Swiper instance with all available Swiper methods and properties. */
        swiper: Swiper;
        /** Object with initialization parameters. */
        params: PhotoBrowser.Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Open Photo Browser on photo with index number equal to "index" parameter. If "index" parameter is not specified, it will be opened on last closed photo.
         * @param index photo index
         */
        open(index: number): void;

        /** Close Photo Browser. */
        close(): void;

        /** Toggle exposition mode. */
        expositionToggle(): void;

        /** Enable exposition mode. */
        expositionEnable(): void;

        /** Disable exposition mode. */
        expositionDisable(): void;

        /** Destroy photo prowser instance. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `swipeToClose` | `tap` | `click` | `doubleTap` | `slideChange` | `transitionStart` | `transitionEnd` | `slideChangeTransitionStart` | `slideChangeTransitionEnd` | `lazyImageLoad` | `lazyImageReady` | `touchStart` | `touchMoveOpposite` | `touchEnd` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `swipeToClose` | `tap` | `click` | `doubleTap` | `slideChange` | `transitionStart` | `transitionEnd` | `slideChangeTransitionStart` | `slideChangeTransitionEnd` | `lazyImageLoad` | `lazyImageReady` | `touchStart` | `touchMoveOpposite` | `touchEnd` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `swipeToClose` | `tap` | `click` | `doubleTap` | `slideChange` | `transitionStart` | `transitionEnd` | `slideChangeTransitionStart` | `slideChangeTransitionEnd` | `lazyImageLoad` | `lazyImageReady` | `touchStart` | `touchMoveOpposite` | `touchEnd` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `swipeToClose` | `tap` | `click` | `doubleTap` | `slideChange` | `transitionStart` | `transitionEnd` | `slideChangeTransitionStart` | `slideChangeTransitionEnd` | `lazyImageLoad` | `lazyImageReady` | `touchStart` | `touchMoveOpposite` | `touchEnd` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace PhotoBrowser {

        interface Parameter {
            /** Array with URLs of photos or array of objects with "url" (or "html") and "caption" properties. `Default: []` */
            photos?: Photo[];
            /** Enable disable exposition mode when clicking on Photo Browser. `Default: true` */
            exposition?: boolean;
            /** Set to true if you also want to hide captions in exposition mode. `Default: false` */
            expositionHideCaptions?: boolean;
            /** You can close Photo Browser with swipe up/down when this parameter is enabled. `Default: true` */
            swipeToClose?: boolean;
            /** Will add opened photo browser to router history which gives ability to close photo browser by going back in router history and set current route to the photo browser modal. `Default: true` */
            routableModals?: boolean;
            /** Photo browser modal URL that will be set as a current route. `Default: photos` */
            url?: string;
            /** Link to initialized View instance if you want use "page" Photo Browser type or where to set routing when routableModals enabled. By default, if not specified, it will be opened in Main View. */
            view?: View;
            /** Define how Photo Browser should be opened. Could be standalone (will be opened as an overlay with custom transition effect), popup (will be opened as popup), page (will be injected to View and loaded as a new page). `Default: standalone` */
            type?: string;
            /** Photo Browser color theme, could be `light` or `dark`. `Default: light` */
            theme?: string;
            /** Captions color theme, could be also `light` or `dark`. By default, equal to theme parameter. */
            captionsTheme?: string;
            /** Set to false to remove Photo Browser's Navbar. `Default: true` */
            navbar?: boolean;
            /** Set to false to remove Photo Browser's Toolbar. `Default: true` */
            toolbar?: boolean;
            /** Text on back link in Photo Browser's navbar. `Default: Close` */
            backLinkText?: string;
            /** Text of "of" in photos counter: "3 of 5". `Default: of` */
            navbarOfText?: string;
            /** One of the default colors. */
            iconsColor?: string;
            /** Swiper parameters. */
            swiper?: Swiper.Parameter;

            // render functions

            /** Function to render navbar, must return navbar HTML string. */
            renderNavbar?: () => string;
            /** Function to render toolbar, must return toolbar HTML string. */
            renderToolbar?: () => string;
            /** Function to render single caption, must return caption HTML string. */
            renderCaption?: (caption: string, index: number) => string;
            /** Function to render photo object, must return photo object HTML string. */
            renderObject?: (photo: Photo, index: number) => string;
            /** Function to render lazy loaded photo slide, must return slide HTML string. */
            renderLazyPhoto?: (photo: Photo, index: number) => string;
            /** Function to render photo as a swiper slide, must return slide HTML string. */
            renderPhoto?: (photo: Photo, index: number) => string;
            /** Function to render photobrowser page, must return full page HTML layout string. */
            renderPage?: () => string;
            /** Function to render photobrowser popup, must return full popup HTML layout string. */
            renderPopup?: () => string;
            /** Function to render photobrowser standalone modal, must return full modal HTML layout string. */
            renderStandalone?: () => string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }

        /**  */
        type Photo = string | {
            /** Photo url. */
            url: string,
            /** video src html or iframe. e.g. `<video src="video1.mp4"></video>` */
            html?: string,
            /** Caption of photo. */
            caption?: string;
        }

    }


    //
    // ─── PICKER MODULE ──────────────────────────────────────────────────────────────
    //

    class Picker {
        /** Link to global app instance. */
        app: Framework7;
        /** Picker wrapping container HTML element (when inline picker is in use). */
        containerEl: HTMLElement;
        /** Dom7 instance with picker wrapping container HTML element (when inline picker is in use). */
        $containerEl: Dom7.Dom7;
        /** Picker HTML element. */
        el: HTMLElement;
        /** Dom7 instance with picker HTML element. */
        $el: Dom7.Dom7;
        /** Picker input HTML element (passed in `inputEl` parameter). */
        inputEl: HTMLElement;
        /** Dom7 instance with picker input HTML element (passed in `inputEl` parameter). */
        $inputEl: Dom7.Dom7;
        /** Array where each item represents current selected value for each column. */
        value: string[];
        /** Array with specified Picker columns. Each column also has its own methods and properties (look below). */
        cols: Picker.PickerColumn[];
        /** `true` if Picker is currently opened. */
        opened: boolean;
        /** `true` when inline picker is in use. */
        inline: boolean;
        /** Picker URL (that was passed in `url` parameter). */
        url: string;
        /** Picker View (that was passed in `view` parameter) or found parent view. */
        view: View;
        /** Object with initialization parameters. */
        params: Picker.Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────
        //

        /**
         * Set new picker value. `values` is array where each item represents value for each column. duration - transition `duration` in ms.
         * @param values any values.
         * @param duration transition duration.
         */
        setValue(values: string[], duration: number): void;

        /** Returns current picker value. */
        getValue(): string;

        /** Adds value to the values array. Useful in case if multiple selection is enabled (with `multiple: true` parameter). */
        addValue(): void;

        /** Open Picker. */
        open(): void;

        /** Close Picker. */
        close(): void;

        /** Destroy Picker instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `change` | `init` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `change` | `init` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `change` | `init` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `change` | `init` | `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Picker {

        interface Parameter {
            /** Enables 3D rotate effect. */
            rotateEffect?: boolean;
            /** Larger values produces more momentum when you release picker after fast touch and move. */
            momentumRatio?: number;
            /** Updates picker and input values during momentum. */
            updateValuesOnMomentum?: boolean;
            /** Updates picker and input values during touch move. */
            updateValuesOnTouchmove?: boolean;
            /** Disables snapping on values. */
            freeMode?: boolean;
            /** Array with initial values. Each array item represents value of related column. */
            value?: string[];
            /** Function to format input value, should return new/formatted string value. `values` and `displayValues` are arrays where each item represents value/display value of related column. */
            formatValue?: (values: string[], displayValues?: string[]) => string;
            /** Array with columns. Each array item represents object with column parameters. */
            cols?: PickerColumnParameter[];

            // Container/opener-specific parameters

            /** String with CSS selector or HTMLElement where to place generated Picker HTML. `Use only for inline picker`. */
            containerEl?: HTMLElement | string;
            /** Can be `auto`, `popover` (to open picker in popover), `sheet` (to open in sheet modal). In case of `auto` will open in sheet modal on small screens and in popover on large screens. */
            openIn?: string;
            /** String with CSS selector or HTMLElement with related input element. */
            inputEl?: HTMLElement | string;
            /** Scroll viewport (page-content) to input when picker opened. */
            scrollToInput?: boolean;
            /** Sets "readonly" attribute on specified input. */
            inputReadOnly?: boolean;
            /** Additional CSS class name to be set on picker element. */
            cssClass?: string;
            /** If enabled, picker will be closed by clicking outside of picker or related input element. */
            closeByOutsideClick?: boolean;
            /** Enables picker toolbar. */
            toolbar?: boolean;
            /** Text for Done/Close toolbar button. */
            toolbarCloseText?: string;
            /** Will add opened picker to router history which gives ability to close picker by going back in router history and set current route to the picker modal. */
            routableModals?: boolean;
            /** Picker modal URL that will be set as a current route. */
            url?: string;
            /** View where to set routing when `routableModals` enabled. Defaults to parent view of `inputEl` or main view if not found parent view */
            view?: View;

            // Render Functions

            /** Function to render toolbar. Must return toolbar HTML string. */
            renderToolbar?: () => string;
            /** Function to render whole picker. Must return picker full HTML string. */
            render?: () => string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }

        interface PickerColumnParameter {
            /** Array with string columns values */
            values?: string[];
            /** Array with string columns values that will be displayed in Picker. If not specified, it will display values from `values` parameter */
            displayValues?: string[];
            /** Additional CSS class name to be set on column HTML container. */
            cssClass?: string;
            /** Text alignment of column values, could be "`left`", "`center`" or "`right`" */
            textAlign?: string;
            /** Column width in px. Useful if you need to fix column widths in picker with dependent columns. By default, calculated automatically. */
            width?: number;
            /** Defines column that should be used as a visual divider, that doesn't have any values. `Default: false`*/
            divider?: boolean;
            /** Should be specified for divider-column (`divider:true`) with content of the column. */
            content?: string;
            /** Callback function that will be executed when picker value changed. */
            onChange?: (picker: Picker, value: string, displayValue: string) => void;
        }

        class PickerColumn {
            /**  */
            el: HTMLElement;
            /**  */
            $el: Dom7.Dom7;
            /**  */
            items: Dom7.Dom7[];
            /**  */
            value: string;
            /**  */
            displayValue: string;
            /**  */
            activeIndex: number;
            /**  */
            setValue(value: string, duration: number): void;
            /**  */
            replaceValues(values: string[], displayValues: string[]): void;
        }
    }

    //
    // ─── POPOVER MODULE ─────────────────────────────────────────────────────────────
    //

    /**
     * Popover module
     * <ref>https://framework7.io/docs/popover.html#popover-app-methods</ref>
     */
    class Popover {
        /** Link to global app instance. */
        app: Framework7;
        /** Popover HTML element. */
        containerEl: HTMLElement;
        /** Dom7 instance with popover HTML element. */
        $containerEl: Dom7.Dom7;
        /** Popover HTML element. */
        el: HTMLElement;
        /** Dom7 instance with popover HTML element. */
        $el: Dom7.Dom7;
        /** Backdrop HTML element. */
        backdropEl: HTMLElement;
        /** Dom7 instance with backdrop HTML element. */
        $backdropEl: Dom7.Dom7;
        /** Popover target HTML element. */
        targetEl: HTMLElement;
        /** Dom7 instance with popover target HTML element. */
        $targetEl: Dom7.Dom7;
        /** Object with initialization parameters. */
        params: Popover.Parameter;

        //
        // ─── METHODS ─────────────────────────────────────────────────────

        /**
         * Open popover around target element. Where
         * @param targetEl target element to set popover position around this element.
         * @param animate boolean (by default true) - defines whether it should be opened with animation.
         */
        open(targetEl: HTMLElement | string, animate?: boolean): void;

        /** Open Popover. */
        open(animate?: boolean): void;

        /** Close Popover. */
        close(animate?: boolean): void;

        /** Destroy Popover instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Popover {

        /** Popover parameters */
        interface Parameter {
            /** Popover element. Can be useful if you already have Popover element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Full Popover HTML layout string. Can be useful if you want to create Popover element dynamically. */
            content?: string;
            /** Enables Popover backdrop (dark semi transparent layer behind). `Default: true` */
            backdrop?: boolean;
            /** When enabled, popover will be closed on backdrop click. `Default: true` */
            closeByBackdropClick?: boolean;
            /** When enabled, popover will be closed on when click outside of it. `Default: true` */
            closeByOutsideClick?: boolean;
            /** Whether the Popover should be opened/closed with animation or not. Can be overwritten in `.open()` and `.close()` methods. `Default: true` */
            animate?: boolean;
            /** HTML element or string CSS selector of target element. */
            targetEl?: string | HTMLElement;
            /** Virtual target element horizontal offset from left side of the screen. Required without using real target element (`targetEl`). */
            targetX?: number;
            /** Virtual target element vertical offset from top of the screen. Required without using real target element (targetEl). */
            targetY?: number;
            /** Virtual target element width (in px). Required without using real target element (targetEl). `Default: 0` */
            targetWidth?: number;
            /** Virtual target element height (in px). Required without using real target element (targetEl). `Default: 0` */
            targetHeight?: number;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── POPUP MODULE ───────────────────────────────────────────────────────────────
    //

    class Popup {
        /** Link to global app instance. */
        app: Framework7;
        /** Popup HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Popup HTML element. */
        $el: Dom7.Dom7;

        /**
         * Open popup. Where
         * @param animate boolean (by default true) - defines whether it should be opened with animation.
         */

        open(animate?: boolean): void;

        /**
         * Close popup.
         * @param animate boolean (by default true) - defines whether it should be closed with animation.
         */
        close(animate?: boolean): void;


        /** Destroy Popup instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Popup {

        interface Parameter {
            /** Popup element. Can be useful if you already have Popup element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Full Popup HTML layout string. Can be useful if you want to create Popup element dynamically.*/
            content?: string;
            /** Enables Popup backdrop (dark semi transparent layer behind). `Default: true` */
            backdrop?: boolean;
            /** When enabled, popup will be closed on backdrop click. `Default: true` */
            closeByBackdropClick?: boolean;
            /** Whether the Popup should be opened/closed with animation or not. Can be overwritten in `.open()` and `.close()` methods. `Default: true` */
            animate?: boolean;
            /** Object with events handlers.  */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── PULL TO REFRESH ────────────────────────────────────────────────────────────
    //

    class PullToRefresh {
        /** Link to global app instance. */
        app: Framework7;
        /** PTR HTML element (`ptr-content`). */
        el: HTMLElement;
        /** Dom7 instance with PTR HTML element (`ptr-content`). */
        $el: Dom7.Dom7;

        /** Reset PTR state. */
        done(): void;
        /** Trigger PTR. */
        refresh(): void;
        /** Destroy PTR instance and remove PTR event listeners from the specified HTML element. */
        destroy(): void;
    }

    //
    // ─── RANGE SLIDER MODULE ────────────────────────────────────────────────────────
    //

    class RangeSlider {
        /** Link to global app instance. */
        app: Framework7;
        /** Range Slider HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Range Slider HTML element. */
        $el: Dom7.Dom7;
        /** Range Slider input HTML element. */
        inputEl: HTMLElement;
        /** Dom7 instance with range slider input HTML element. */
        $inputEl: Dom7.Dom7;
        /** Range slider width (in px). */
        rangeWidth: number;
        /** Boolean proprty indication whether it is dual or not. */
        dual: boolean;
        /** Range min value. */
        min: number;
        /** Range max value. */
        max: number;
        /** Range value. */
        value: number | number[];
        /** Array where each element represents HTMLElement of created range knob (2 knobs in case of dual slider). */
        knobs: string[];
        /** Array where each element represent HTMLElement of created range knob label (2 labels in case of dual slider). */
        labels: string[];
        /** 	Range Slider parameters. */
        params: RangeSlider.Parameter;

        /** Returns range slider value. */
        getValue(): void;

        /**
         * Set new range slider value.
         * @param value range value
         */
        setValue(value: number | number[]): void;

        /**
         * Add event handler.
         * @param event the name of the event: `change` | `rangeChange` | `rangeDestroy` | `rangeBeforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `change` | `rangeChange` | `rangeDestroy` | `rangeBeforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `change` | `rangeChange` | `rangeDestroy` | `rangeBeforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `change` | `rangeChange` | `rangeDestroy` | `rangeBeforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace RangeSlider {

        interface Parameter {
            /** Range Slider element. HTMLElement or string with CSS selector of range slider element. */
            el?: HTMLElement | string;
            /** Range Slider input element or CSS selector of input element. If not specified, will try to look for `input type="range"` inside of range slider element. */
            inputEl?: HTMLElement | string;
            /** Enable dual range slider. */
            dual?: boolean;
            /** When enabled it is also possible to interact with range slider (change value) on range bar click and swipe. `Default: true` */
            draggableBar?: boolean;
            /** Minimal step between values. */
            step?: number;
            /** Enables additional label around range slider knob. */
            label?: boolean;
            /** Minimum value. */
            min?: number;
            /** Maximum value. */
            max?: number;
            /** Initial value. Number in case of single range, and array of values in case of dual range. */
            value?: number | number[];
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── SEARCHBAR MODULE ───────────────────────────────────────────────────────────
    //

    class Searchbar {
        /** Link to global app instance. */
        app: Framework7;
        /**  */
        query: string;
        /**  */
        previousQuery: string;
        /**  */
        searchContainer: HTMLElement;
        /**  */
        $searchContainer: Dom7.Dom7;
        /** Searchbar HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Searchbar HTML element. */
        $el: Dom7.Dom7;
        /** Searchbar HTML element. */
        inputEl: HTMLElement;
        /** Dom7 instance with Searchbar HTML element. */
        $inputEl: Dom7.Dom7;
        /** Boolean value that represents is searchbar enabled or disabled. */
        enabled: boolean;
        /** Boolean value that represents is searchbar expandable or not. */
        expandable: boolean;

        /** Force searchbar to search passed query. */
        search(query: string): void;
        /** Enable/activate searchbar. */
        enable(): void;
        /** Disable/deactivate searchbar. */
        disable(): void;
        /** Toggle searchbar. */
        toggle(): void;
        /** Clear search query and update results. */
        clear(): void;
        /** Destroy Searchbar instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `search` | `clear` | `enable` | `disable` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `search` | `clear` | `enable` | `disable` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `search` | `clear` | `enable` | `disable` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `search` | `clear` | `enable` | `disable` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;

    }
    namespace Searchbar {

        interface Parameter {
            /** CSS selector or HTML element of searchbar element (form class="searchbar"). */
            el?: HTMLElement | string;
            /** CSS selector or HTML element of searchbar input element. By default (if not passed) will try to look for `input type="search"` inside of searchbar. */
            inputEl?: HTMLElement | string;
            /** Enables disable button. `Default: true`  */
            disableButton?: boolean;
            /** CSS selector or HTML element of searchbar disable button. By default (if not passed) will try to look for element with `search-disable-button` class inside of searchbar. */
            disableButtonEl?: HTMLElement | string;
            /** CSS selector or HTML element of list block to search in. */
            searchContainer?: HTMLElement | string;
            /** CSS selector of List View element's field where we need to search. Usually we search through element titles, in this case we need to pass `.item-title`. It is also possible to pass few elements for search like `.item-title`, `.item-text`. */
            searchIn?: string;
            /** CSS selector of single search item. If we do a search in List View, then it must be a single list element `li`. `Default: li` */
            searchItem?: string;
            /** CSS selector or HTMLElement of searchbar "found" element to make it hidden when there is no search results. `Default: .searchbar-found` */
            foundEl?: HTMLElement | string;
            /** CSS selector or HTMLElement of searchbar "not-found" element to make it visible when there is no search results. `Default: .searchbar-not-found` */
            notFoudEl?: HTMLElement | string;
            /** CSS selector or HTMLElement of elements to be hidden when searchbar enabled. `Default: .searchbar-hide-on-enable` */
            hideOnEnableEl?: HTMLElement | string;
            /** CSS selector or HTMLElement of elements to be hidden on searchbar search. `Default: .searchbar-hide-on-search` */
            hideOnSearchEl?: HTMLElement | string;
            /** Enables searchbar backdrop element. `Default: true` */
            backdrop?: boolean;
            /** CSS selector or HTMLElement of searchbar backdrop element. If not passed and `backdrop` parameter is `true` then it will look for `.searchbar-backdrop` element. In case none found it will create one automatically. */
            backdropEl?: HTMLElement | string;
            /** CSS selector for items to be ignored by searchbar and always present in search results. `Default: .searchbar-ignore` */
            ignore?: string;
            /** When enabled searchbar will not search through any of list blocks specified by `searchContainer` and you will be able to use custom search functionality, for example, for calling external APIs with search results and for displaying them manually. `Default: false` */
            customSearch?: boolean;
            /** Enable to remove/replace diacritics (á, í, ó, etc.) during search. `Default: false` */
            removeDiacritics?: boolean;
            /** If enabled, then search will consider item dividers and group titles and hide them if there are no found items right after them. `Default: true` */
            hideDividers?: boolean;
            /** If enabled, then search will consider list view groups hide them if there are no found items inside of these groups. `Default: true` */
            hideGroups?: boolean;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── SHEET MODAL MODULE ─────────────────────────────────────────────────────────
    //

    /**
     * Sheel Modal
     * <ref>https://framework7.io/docs/sheet-modal.html#sheet-parameters</ref>
     */
    class SheetModal {
        /** Link to global app instance. */
        app: Framework7;
        /** SheetModal HTML element. */
        el: HTMLElement;
        /** Dom7 instance with SheetModal HTML element. */
        $el: Dom7.Dom7;
        /** SheetModal HTML element. */
        backdropEl: HTMLElement;
        /** Dom7 instance with SheetModal HTML element. */
        $backdropEl: Dom7.Dom7;
        /** Sheet parameters. */
        params: SheetModal.Parameter;

        /**
         * Open sheet. Where
         * @param animate boolean (by default true) - defines whether it should be opened with animation.
         */
        open(animate?: boolean): void;

        /**
         * Close sheet. Where
         * @param animate boolean (by default true) - defines whether it should be closed with animation.
         */
        close(animate?: boolean): void;

        /** Destroy SheetModal instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace SheetModal {

        /** Sheet Parameters */
        interface Parameter {
            /** Sheet element. Can be useful if you already have Sheet element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Full Sheet HTML layout string. Can be useful if you want to create Sheet element dynamically. */
            content?: string;
            /** Enables Sheet backdrop (dark semi transparent layer behind). By default it is `true` for MD theme and `false` for iOS theme. */
            backdrop?: boolean;
            /** HTML element or string (with CSS selector) of element. If specified, then sheet will try to scroll page content to this element on open. */
            scrollToEl?: string | HTMLElement;
            /** When enabled, sheet will be closed on backdrop click. `Default: true` */
            closeByBackdropClick?: boolean;
            /** When enabled, sheet will be closed on when click outside of it. `Default: false` */
            closeByOutsideClick?: boolean;
            /** Whether the Sheet should be opened/closed with animation or not. Can be overwritten in `.open()` and `.close()` methods. `Default: true`*/
            animate?: boolean;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }


    //
    // ─── SMART SELECT MODULE ────────────────────────────────────────────────────────
    //

    class SmartSelect {
        /** Link to global app instance. */
        app: Framework7;
        /** SmartSelect HTML element. */
        el: HTMLElement;
        /** Dom7 instance with SmartSelect HTML element. */
        $el: Dom7.Dom7;
        /** HTML element used to display value. */
        valueEl: HTMLElement;
        /** Dom7 instance with HTML element used to display value. */
        $valueEl: Dom7.Dom7;
        /** Child select element <select>. */
        selectEl: HTMLElement;
        /** Dom7 instance with child select element. */
        $selectEl: Dom7.Dom7;
        /**  */
        url: string;
        /**  */
        view: View;
        /**  */
        params: SmartSelect.Parameter;

        /** Open smart select. */
        open(): void;
        /** Close smart select. */
        close(): void;
        /** Destroy SmartSelect instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;

    }
    namespace SmartSelect {

        interface Parameter {
            /** Smart Select element. Can be useful if you already have Smart Select element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Link to initialized View instance which is required for Smart Select to work. By default, if not specified, it will be opened in parent View.. */
            view?: View;
            /** Visual element where to insert selected value. If not passed then it will look for `<div class="item-after">` element. */
            valueEl?: HTMLElement;
            /** Defines how to open Smart Select. Can be `page` or `popup` or `popover` or `sheet`. */
            openIn?: string;
            /** Smart select page title. If not passed then it will be the `<div class="item-title">` text. */
            pageTitle?: string;
            /** Smart select Page back link text. */
            pageBackLinkText?: string;
            /** Smart select Popup close link text. */
            popupCloseLinkText?: string;
            /** Smart select Sheet close link text. */
            sheetCloseLinkText?: string;
            /** Enables Searchbar on smart select page. */
            searchbar?: boolean;
            /** Searchbar placeholder text. */
            searchbarPlaceholder?: string;
            /** Searchbar "cancel" link text. Has effect only in iOS theme. */
            searchbarDisableText?: string;
            /** If enabled then smart select will be automatically closed after user selectes any option. */
            closeOnSelect?: boolean;
            /** Enable Virtual List for smart select if your select has a lot (hundreds, thousands) of options. */
            virtualList?: boolean;
            /** Virtual list item height. If `number` - list item height in px. If `function` then function should return item height. */
            virtualListHeight?: number | Function;
            /** Smart select page form color theme. One of the default colors. */
            formColorTheme?: string;
            /** Smart select navbar color theme. One of the default colors. */
            navbarColorTheme?: string;
            /** Will add opened smart select modal (when `openIn` is `popup`, `popover` or `sheet`) to router history which gives ability to close smart select by going back in router history and set current route to the smart select modal. */
            routableModals?: boolean;
            /** Smart select page/modal URL that will be set as a current route. */
            url?: string;

            // Render functions

            /**  */
            renderSearchbar?: () => string;
            /**  */
            renderItem?: (item: any, index: number) => string;
            /**  */
            renderItems?: SmartSelectRender;
            /**  */
            renderPage?: SmartSelectRender;
            /**  */
            renderSmartSelect?: SmartSelectRender;
            /**  */
            renderSheet?: SmartSelectRender;
            /**  */
            renderPopover?: SmartSelectRender;

            // Events

            /**  */
            on?: boolean;
        }

        type SmartSelectRender = (items: any[]) => string;
    }

    //
    // ─── SORTABLE LIST MODULE ────────────────────────────────────────────────────────
    //

    class SortableList {

    }
    namespace SortableList {

        interface Parameter {
            /** When enabled then it will move (reorder) HTML elements according to new sortable order. It is useful to disable it if you use other library for DOM manipulation, like React or Vue. */
            moveElements?: boolean;
        }
    }

    //
    // ─── STATUSBAR MODULE ───────────────────────────────────────────────────────────
    //

    namespace Statusbar {
        interface Parameter {
            /** Enables statusbar handling by Framework7. Disable it if you don't want Framework7 to handle statusbar behavior. */
            enabled?: boolean;
            /** Can be t`rue, `false`, `auto`. Defines whether the statusbar overlay should be visible or not. In case of `auto` Framework7 will detect it automatically depending whether the app is in fullscreen mode or not. */
            overlay?: boolean | string;
            /** Hex string (`#RRGGBB`) with background color when iOS theme is active. If passed then it will override CSS value. */
            iosBackgroundColor?: boolean;
            /** Hex string (`#RRGGBB`) with background color when MD theme is active. If passed then it will override CSS value */
            materialBackgroundColor?: boolean;
            /** If enabled, then click on statusbar overlay will scroll top page content to the top. `This functionality is only available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar` */
            scrollTopOnClick?: boolean;
            /** `iOS-only feature`  Makes the statusbar overlay or not overlay the WebView. `This functionality is only available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar`. */
            iosOverlaysWebView?: boolean;
            /** `iOS-only feature` Statusbar text color. Can be `white` or `black`. `This functionality is only available when app is running under cordova/phonegap environment with installed cordova-plugin-statusbar` */
            iosTextColor?: boolean;
        }
    }

    //
    // ─── STEPPER ────────────────────────────────────────────────────────────────────
    //

    class Stepper {
        /** Link to global app instance. */
        app: Framework7;
        /** Stepper HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Stepper HTML element. */
        $el: Dom7.Dom7;
        /**  */
        min: number;
        /**  */
        max: number;
        /**  */
        value: number;
        /** Child select element <select>. */
        input: HTMLElement;
        /** Dom7 instance with child select element. */
        $inputEl: Dom7.Dom7;
        /** HTML element used to display value. */
        valueEl: HTMLElement;
        /** Dom7 instance with HTML element used to display value. */
        $valueEl: Dom7.Dom7;
        /**  */
        params: Stepper.Parameter;

        /** Returns stepper value. */
        getValue(): number;

        /** Set new stepper value. */
        setValue(value: number): void;

        /** Increment stepper value, similar to clicking on its "plus" button. */
        increment(): number;

        /** Decrement stepper value, similar to clicking on its "minus" button */
        decrement(): number;

        /** Alias for stepper.increment(). */
        plus(): number;

        /** Alias for stepper.decrement(). */
        minus(): number;

        /** Destroy Stepper instance and remove all events. */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `change` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `change` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `change` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `change` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }

    namespace Stepper {
        interface Parameter {
            /** Stepper element. HTMLElement or string with CSS selector of stepper element. */
            el?: HTMLElement | string;
            /** Stepper input element or CSS selector of input element. If not specified, will try to look for <input> inside of stepper element. */
            inputEl?: HTMLElement | string;
            /** Minimal step between values. `Default: 1` */
            step?: number;
            /** Minimum value. `Default: 0` */
            min?: number;
            /** Maximum value. `Default: 100` */
            max?: number;
            /** Initial value. `Default: 0` */
            value?: number;
            /** When enabled, incrementing beyond maximum value sets value to minimum value; likewise, decrementing below minimum value sets value to maximum value. `Default: false` */
            wraps?: number;
            /** When enabled it will repeatedly increase/decrease values while you tap and hold plus/minus buttons. `Default: false` */
            autorepeat?: number;
            /** When enabled it will increase autorepeat ratio based on how long you hold the button. `Default: false` */
            autorepeatDynamic?: number;
            /** Stepper value element or CSS selector of this element where Stepper will insert value. If not specified, and there is no `inputEl` passed will try to look for `<div class="stepper-value">` inside of stepper element. */
            valueEl?: number;
            /** Function to format value in required format. It accepts current value and must return new formatted value;. */
            formatValue?: number;
            /** Object with events handlers. */
            on?: { [key:string]: Function };


        }
    }

    //
    // ─── SWIPER MODULE ──────────────────────────────────────────────────────────────
    //

    class Swiper {
        /** Object with passed initialization parameters. */
        params: Swiper.Parameter;
        /** Html element for slider container. */
        el: HTMLElement;
        /** Dom7 element with slider container HTML element. To get vanilla HTMLElement use mySwiper.el. */
        $el: Dom7.Dom7;
        /** Html element for Wrapper. */
        wrapperEl: HTMLElement;
        /** Dom7 element with slider wrapper HTML element. To get vanilla HTMLElement use mySwiper.wrapperEl. */
        $wrapperEl: Dom7.Dom7;
        /** Dom7 array-like collection of slides HTML elements. To get specific slide HTMLElement use mySwiper.slides[1] */
        slides: HTMLElement[];
        /** Width of container. */
        width: number;
        /** Height of container. */
        height: number;
        /** Current value of wrapper translate. */
        translate: string;
        /** Current progress of wrapper translate (from 0 to 1). */
        progress: number;
        /** Index number of currently active slide. `Note, that in loop mode active index value will be always shifted on a number of looped/duplicated slides` */
        activeIndex: number;
        /** Index number of currently active slide considering duplicated slides in loop mode. */
        realIndex: number;
        /** Index number of previously active slide. */
        previousIndex: number;
        /** `true` if slider on most "left"/"top" position */
        isBeginning: boolean;
        /** `true` if slider on most "right"/"bottom" position */
        isEnd: boolean;
        /** `true` if swiper is in transition */
        animating: boolean;
        /** Object with the following touch event properties: `startX`, `startY`, `currentX`, `currentY` or `diff` */
        touches: {
            startX: number,
            startY: number,
            currentX: number,
            currentY: number,
            diff: number
        };
        /** Index number of last clicked slide */
        clickedIndex: number;
        /** Link to last clicked slide (HTMLElement) */
        clickedSlide: HTMLElement;
        /** Disable / enable ability to slide to the next slides by assigning `false`/`true` to this property */
        allowSlideNext: boolean;
        /** Disable / enable ability to slide to the previous slides by assigning `false`/`true` to this property */
        allowSlidePrev: boolean;
        /** Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning `false`/`true` to this property */
        allowTouchMove: boolean;

        // components

        /** Object with navigation parameters */
        navigation?: Swiper.Navigation;
        /** Object with pagination parameters */
        pagination?: Swiper.Pagination;
        /** Object with scrollbar parameters */
        scrollbar?: Swiper.Scrollbar;
        /** Object with autoplay parameters */
        autoplay?: Swiper.Autoplay;
        /** Object with lazy parameters */
        lazy?: Swiper.LazyLoading;
        /** Object with zoom parameters */
        zoom?: Swiper.Zoom;
        /** Object with virtual parameters */
        virtual?: Swiper.VirtualSides;

        /**
         * Run transition to next slide
         * @param speed number - transition duration (in ms). Optional
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional.
         */
        slideNext(speed?: number, runCallbacks?: boolean): void;

        /**
         * Run transition to previous slide.
         * @param speed number - transition duration (in ms). Optional.
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional.
         */
        slidePrev(speed: number, runCallbacks?: boolean): void;

        /**
         * Run transition to the slide with index number equal to 'index' parameter for the duration equal to 'speed' parameter.
         * @param index number - index number of slide
         * @param speed number - transition duration (in ms). Optional
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional
         */
        slideTo(index: number, speed?: number, runCallbacks?: boolean): void;

        /**
         * Does the same as .slideTo but for the case when used with enabled `loop`. So this method will slide to slides with `realIndex` matching to passed `index`.
         * @param index number - index number of original slide.
         * @param speed number - transition duration (in ms). Optional.
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional.
         */
        slideToLoop(index: number, speed?: number, runCallbacks?: boolean): void;

        /**
         * Reset swiper position to currently active slide for the duration equal to 'speed' parameter.
         * @param speed number - transition duration (in ms). Optional.
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional.
         */
        slideReset(speed?: number, runCallbacks?: boolean): void;

        /**
         * Reset swiper position to closest slide/snap point for the duration equal to 'speed' parameter.
         * @param speed number - transition duration (in ms). Optional.
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional.
         */
        slideToClosest(speed?: number, runCallbacks?: boolean): void;

        /**
         * Force swiper to update its height (when autoHeight enabled) for the duration eqaul to 'speed' parameter
         * @param speed number - transition duration (in ms). Optional.
         * @param runCallbacks boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional.
         */
        updateAutoHeight(speed?: number, runCallbacks?: boolean): void;

        /** You should call it after you add/remove slides manually, or after you hide/show it, or do any custom DOM modifications with Swiper. */
        update(): void;

        /** Detach all events listeners. */
        detachEvents(): void;

        /** Atach all events listeners again. */
        attachEvents(): void;

        /**
         * Destroy slider instance and detach all events listeners, where.
         * @param deleteInstance boolean - Set it to false (by default it is true) to not to delete Swiper instance.
         * @param cleanStyles boolean - Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container. Useful if you need to destroy Swiper and to init again with new options or in different direction.
         */
        destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;

        /**
         * Add new slides to the end. `slides` could be HTMLElement or HTML string with new slide or array with such slides.
         * @param slides HTMLElement or string with new slide or array with such slides.
         */
        appendSlide(slides: HTMLElement[] | string[] | HTMLElement | string): void;

        /**
         * Add new slides to the beginning. slides could be HTMLElement or HTML string with new slide or array with such slides.
         * @param slides HTMLElement or string with new slide or array with such slides.
         */
        prependSlide(slides: HTMLElement[] | string[] | HTMLElement | string): void;

        /**
         * Remove selected slides. slideIndex could be a number with slide index to remove or array with indexes.
         * @param slideIndex index of a slide or indexes of slides.
         */
        removeSlide(slideIndex: number | number[]): void;

        /** Remove all slides. */
        removeAllSlides(): void;

        /**
         * Set custom css3 transform's translate value for swiper wrapper.
         * @param translate css translate value in string
         */
        setTranslate(translate: string): void;

        /** Get current value of swiper wrapper css3 transform translate. */
        getTranslate(): string;


        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;
    }
    namespace Swiper {

        class Navigation {
            /** HTMLElement of "next" navigation button. */
            nextEl: HTMLElement;
            /** HTMLElement of "previous" navigation button. */
            prevEl: HTMLElement;
            /** Update navigation buttons state (enabled/disabled). */
            update(): void;
        }

        class Pagination {
            /** HTMLElement of pagination container element. */
            el: HTMLElement;
            /** Dom7 array-like collection of pagination bullets HTML elements. To get specific slide HTMLElement use mySwiper.pagination.bullets[1]. */
            bullets: HTMLElement[];
            /** Render pagination layout. */
            render(): void;
            /** Update pagination state (enabled/disabled/active). */
            update(): void;
        }

        class Scrollbar {
            /** HTMLElement of Scrollbar container element. */
            el: HTMLElement;
            /** HTMLElement of Scrollbar draggable handler element */
            dragEl: HTMLElement;
            /** Updates scrollbar track and handler sizes. */
            updateSize(): void;
        }

        class Autoplay {
            /** Whether autoplay enabled and running. */
            running: boolean;
            /** Start autoplay. */
            start(): void;
            /** Stop autoplay. */
            stop(): void;
        }

        class LazyLoading {
            /** Load/update lazy images based on current slider state (position). */
            load(): void;
            /**
             * Force to load lazy images in slide by specified index.
             * @param index  number - index number of slide to load lazy images in.
             */
            loadInSlide(index: number): void;
        }

        class Zoom {
            /** Whether the zoom module is enabled. */
            enabled: boolean;
            /** Current image scale ratio. */
            scale: number;

            /** Enable zoom module. */
            enable(): void;
            /** Disable zoom module. */
            disable(): void;
            /** Zoom in image of the currently active slide. */
            in(): void;
            /** Zoom out image of the currently active slide. */
            out(): void;
            /** Toggle image zoom of the currently active slide. */
            toggle(): void;
        }

        class VirtualSides {
            /** Object with cached slides HTML elements. */
            cache: any;
            /** Index of first rendered slide. */
            from: number;
            /** Index of last rendered slide. */
            to: number;
            /** Array with slide items passed by virtual.slides parameter */
            slides: string[];

            /**
             * Append slide
             * @param slide slide that will be appended.
             */
            appendSlide(slide: string): void;

            /**
             * Prepend slide.
             * @param slide slide that will be prepended.
             */
            prependSlide(slide: string): void;

            /** Update virutal slides state. */
            update():any;
        }

        interface Parameter {
            /** Whether Swiper should be initialised automatically when you create an instance. If disabled, then you need to init it manually by calling mySwiper.init(). */
            init?: boolean;
            /** Index number of initial slide. */
            initialSlide?: number;
            /** Could be 'horizontal' or 'vertical' (for vertical slider). */
            direction?: string;
            /** Duration of transition between slides (in ms). */
            speed?: number;
            /** Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides. Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well. */
            setWrapperSize?: boolean;
            /** Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set. Useful when you may need to create custom slide transition. */
            virtualTranslate?: boolean;
            /** Swiper width (in px). Parameter allows to force Swiper width. Useful `only` if you initialize Swiper when it is hidden. `Setting this parameter will make Swiper not responsive` */
            width?: number;
            /** Swiper height (in px). Parameter allows to force Swiper height. Useful `only` if you initialize Swiper when it is hidden. `Setting this parameter will make Swiper not responsive` */
            height?: number;
            /** Set to `true` and slider wrapper will adopt its height to the height of the currently active slide. */
            autoHeight?: boolean;
            /** Set to `true` to round values of slides width and height to prevent blurry texts on usual resolution screens (if you have such) */
            roundLengths?: boolean;
            /** Set to `true` on nested Swiper for correct touch events interception. Use only on nested swipers that use same direction as the parent one */
            nested?: boolean;
            /** If enabled (by default) and navigation elements' parameters passed as a string (like `".pagination"`) then Swiper will look for such elements through child elements first. Applies for pagination, prev/next buttons and scrollbar elements */
            uniqueNavElements?: boolean;
            /** Tranisition effect. Could be "`slide`", "`fade`", "`cube`", "`coverflow`" or "`flip`" */
            effect?: string;
            /** Fire [Transition/SlideChange][Start/End] events on swiper initialization. Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode. */
            runCallbacksOnInit?: boolean;
            /** When enabled Swiper will be disabled and hide navigation buttons on case there are not enough slides for sliding. */
            watchOverflow?: boolean;
            /** Register event handlers. */
            on?: { [key: string]: Function };

            // Slides grid

            /** Distance between slides in px. */
            spaceBetween?: number;
            /** Number of slides per view (slides visible at the same time on slider's container).
             *
             * `If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)`
             *
             * `slidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1`
             */
            slidesPerView?: number | string;
            /** Number of slides per column, for multirow layout. */
            slidesPerColumn?: number;
            /** Could be 'column' or 'row'. Defines how slides should fill rows, by column or by row. */
            slidesPerColumnFill?: string;
            /** Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1. */
            slidesPerGroup?: number;
            /** If true, then active slide will be centered, not always on the left side.. */
            centeredSlides?: boolean;
            /** Add (in px) additional slide offset in the beginning of the container (before all slides). */
            slidesOffsetBefore?: number;
            /** Add (in px) additional slide offset in the end of the container (after all slides). */
            slidesOffsetAfter?: number;
            /** Normalize slide index. */
            normalizeSlideIndex?: boolean;

            // Grad Cursor

            /** This option may a little improve desktop usability. If `true`, user will see the "grab" cursor when hover on Swiper. */
            grabCursor?: boolean;

            // Touches

            /** Target element to listen touch events on. Can be 'container' (to listen for touch events on swiper-container) or 'wrapper' (to listen for touch events on swiper-wrapper) */
            touchEventsTarget?: string;
            /** Touch ratio. */
            touchRatio?: number;
            /** Allowable angle (in degrees) to trigger touch move. */
            touchAngle?: number;
            /** If true, Swiper will accept mouse events like touch events (click and drag to change slides). */
            simulateTouch?: boolean;
            /** Set to `false` if you want to disable short swipes. */
            shortSwipes?: boolean;
            /** Set to `false` if you want to disable long swipes */
            longSwipes?: boolean;
            /** Ratio to trigger swipe to next/previous slide during long swipes. */
            longSwipesRatio?: number;
            /** Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes. */
            longSwipesMs?: number;
            /** If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it. */
            followFinger?: boolean;
            /** If false, then the only way to switch the slide is use of external API functions like `slidePrev` or `slideNext`. */
            allowTouchMove?: boolean;
            /** Threshold value in px. If "touch distance" will be lower than this value then swiper will not move. */
            threshold?: number;
            /** If enabled, then propagation of "touchmove" will be stopped. */
            touchMoveStopPropagation?: boolean;
            /** Enable to release Swiper events for swipe-to-go-back work in iOS UIWebView. */
            iOSEdgeSwipeDetection?: boolean;
            /** Area (in px) from left edge of the screen to release touch events for swipe-to-go-back in iOS UIWebView. */
            iOSEdgeSwipeThreshold?: number;
            /** Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling. */
            touchReleaseOnEdges?: boolean;
            /** Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices. But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter. */
            passiveListeners?: boolean;

            // touch resistance
            /** Set to false if you want to disable resistant bounds */
            resistance?: boolean;
            /** This option allows you to control resistance ratio */
            resistanceRatio?: number;

            // swiping / no swiping

            /** When enabled it won't allow to change slides by swiping or navigation/pagination buttons during transition. */
            preventIntercationOnTransition?: boolean;
            /** Set to `false` to disable swiping to previous slide direction (to left or top). */
            allowSlidePrev?: boolean;
            /** Set to `false` to disable swiping to next slide direction (to right or bottom). */
            allowSlideNext?: boolean;
            /** Enable/disable swiping on elements matched to class specified in `noSwipingClass`. */
            noSwiping?: boolean;
            /** Specify `noSwiping`'s' element css class. */
            noSwipingClass?: string;
            /** Can be used instead of `noSwipingClass` to specify elements to disable swiping on. For example '`input`' will disable swiping on all inputs. */
            noSwipingSelector?: string;
            /** String with CSS selector or HTML element of the container with pagination that will work as only available handler for swiping. */
            swipeHandler?: string | HTMLElement;

            // clicks

            /** Set to `true` to prevent accidental unwanted clicks on links during swiping. */
            preventClicks?: boolean;
            /** Set to `true` to stop clicks event propagation on links during swiping. */
            preventClicksPropagation?: boolean;
            /** Set to `true` and click on any slide will produce transition to this slide. */
            slideToClickedSlide?: boolean;

            // freemode

            /** If `true` then slides will not have fixed positions. */
            freeMode?: boolean;
            /** If `true`, then slide will keep moving for a while after you release it. */
            freeModeMomentum?: boolean;
            /** Higher value produces larger momentum distance after you release slider. */
            freeModeMomentumRatio?: number;
            /** Higher value produces larger momentum velocity after you release slider. */
            freeModeMomentumVelocityRatio?: number;
            /** Set to `false` if you want to disable momentum bounce in free mode. */
            freeModeMomentumBounce?: boolean;
            /** Higher value produces larger momentum bounce effect. */
            freeModeMomentumBounceRatio?: number;
            /** Minimum touchmove-velocity required to trigger free mode momentum. */
            freeModeMinimumVelocity?: number;
            /** Set to `true` to enable snap to slides positions in free mode. */
            freeModeSticky?: boolean;

            // progress

            /** Enable this feature to calculate each slides progress. */
            watchSlidesProgress?: boolean;
            /** `watchSlidesProgress` should be enabled. Enable this option and slides that are in viewport will have additional visible class */
            watchSlidesVisibility?: boolean;

            // images

            /** When enabled Swiper will force to load all images. */
            preloadImages?: boolean;
            /** When enabled Swiper will be reinitialized after all inner images (<img> tags) are loaded. Required `preloadImages: true` */
            updateOnImagesReady?: boolean;

            // loop

            /** Set to true to enable continuous loop mode. `If you use it along with slidesPerView: 'auto' then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)` */
            loop?: boolean;
            /** Addition number of slides that will be cloned after creating of loop. */
            loopAdditionalSlides?: number;
            /** If you use `slidesPerView:'auto'` with loop mode you should tell to Swiper how many slides it should loop (duplicate) using this parameter. */
            loopedSlides?: number;
            /** Enable and loop mode will fill groups with insufficient number of slides with blank slides. Good to be used with `slidesPerGroup` parameter */
            loopFillGroupWithBlank?: boolean;

            // breakpoint

            /** Allows to set different parameter for different responsive breakpoints (screen sizes). Not all parameters can be changed in breakpoints, only those which are not required different layout and logic, like `slidesPerView`, `slidesPerGroup`, `spaceBetween`. Such parameters like `slidesPerColumn`, `loop`, `direction`, `effect`. */
            breakpoints?: {
                [width: number]: {
                    slidesPerView: number,
                    spaceBetween: number
                }
            };

            // Observer

            /** Set to `true` to enable Mutation Observer on Swiper and its elements. In this case Swiper will be updated (reinitialized) each time if you change its style (like hide/show) or modify its child elements (like adding/removing slides). */
            observer?: boolean;
            /** Set to `true` if you also need to watch Mutations for Swiper parent elements. */
            observeParents?: boolean;

            // Namespace

            /** The beginning of the modifier CSS class that can be added to swiper container depending on different parameters. */
            containerModifierClass?: string;
            /** CSS class name of slide. */
            slideClass?: string;
            /** CSS class name of currently active slide. */
            slideActiveClass?: string;
            /** CSS class name of duplicated slide which represents the currently active slide. */
            slideDuplicatedActiveClass?: string;
            /** CSS class name of currently visible slide. */
            slideVisibleClass?: string;
            /** CSS class name of slide duplicated by loop mode. */
            slideDuplicateClass?: string;
            /** CSS class name of slide which is right after currently active slide. */
            slideNextClass?: string;
            /** CSS class name of duplicated slide which represents the slide next to active slide. */
            slideDuplicatedNextClass?: string;
            /** CSS class name of slide which is right before currently active slide. */
            slidePrevClass?: string;
            /** CSS class name of duplicated slide which represents the slide previous to active slide. */
            slideDuplicatedPrevClass?: string;
            /** CSS class name of slides' wrapper. */
            wrapperClass?: string;

            // components

            /**  */
            navigation?: {
                /** String with CSS selector or HTML element of the element that will work like "next" button after click on it. */
                nextEl?: string | HTMLElement;
                /** String with CSS selector or HTML element of the element that will work like "prev" button after click on it. */
                prevEl?: string | HTMLElement;
                /** Toggle navigation buttons visibility after click on Slider's container. */
                hideOnClick?: boolean;
                /** CSS class name added to navigation button when it becomes disabled. */
                disabledClass?: string;
                /** CSS class name added to navigation button when it becomes hidden. */
                hiddenClass?: string;
            };

            /**  */
            pagination?: {
                /** String with CSS selector or HTML element of the container with pagination. */
                el?: string;
                /** String with type of pagination. Can be "`bullets`", "`fraction`", "`progressbar`" or "`custom`". */
                type?: string;
                /** Defines which HTML tag will be use to represent single pagination bullet. Only for `bullets` pagination type. */
                bulletElement?: string;
                /** Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.. */
                dynamicBullets?: boolean;
                /** The number of main bullets visible when dynamicBullets enabled. */
                dynamicMainBullets?: number;
                /** Toggle (hide/true) pagination container visibility after click on Slider's container. */
                hideOnClick?: boolean;
                /** If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type. */
                clickable?: boolean;
                /** Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper direction and horizontal progressbar for vertical swiper direction. `Default: false` */
                progressbarOpposite?: boolean;
                /** This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of pagination bullet and required element class name (className). Only for bullets pagination type. */
                renderBullet?: (index: number, className: string) => string;
                /** This parameter allows to customize "fraction" pagination html. Only for fraction pagination type. */
                renderFraction?: (currentClass: string, totalClass: string) => string;
                /** This parameter allows to customize "progress" pagination. Only for progress pagination type. */
                renderProgressbar?: (progressbarFillClass: string) => string;
                /** This parameter is required for custom pagination type where you have to specify how it should be rendered. */
                renderCustom?: (swiper: Swiper, current: number, total: number) => string;
                /** CSS class name of single pagination bullet. */
                bulletClass?: string;
                /** CSS class name of currently active pagination bullet. */
                bulletActiveClass?: string;
                /** The beginning of the modifier CSS class name that will be added to pagination depending on parameters. */
                modifierClass?: string;
                /** CSS class name of the element with currently active index in "`fraction`" pagination. */
                currentClass?: string;
                /** CSS class name of the element with total number of "snaps" in "`fraction`" pagination. */
                totalClass?: string;
                /** CSS class name of pagination when it becomes inactive. */
                hiddenClass?: string;
                /** CSS class name of pagination progressbar fill element. */
                progressbarFillClass?: string;
                /** CSS class name set to pagination when it is clickable. */
                clickableClass?: string;
            };

            scrollbar?: {
                /** String with CSS selector or HTML element of the container with scrollbar. */
                el?: string | HTMLElement;
                /** Hide scrollbar automatically after user interaction. */
                hide?: boolean;
                /** Set to `true` to enable make scrollbar draggable that allows you to control slider position. */
                draggable?: boolean;
                /** Set to `true` to snap slider position to slides when you release scrollbar */
                snapOnRelease?: boolean;
                /** Size of scrollbar draggable element in px. */
                dragSize?: string | number;
                /** Scrollbar element additional CSS class when it is disabled. */
                lockClass?: string;
                /** Scrollbar draggable element CSS class. */
                dragClass?: string;
            };

            auplay?: {
                /** Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled. */
                delay?: number;
                /** Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode). */
                stopOnLastSlide?: boolean;
                /** Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction. */
                disableOnInteraction?: boolean;
                /** Enables autoplay in reverse direction. */
                reverseDirection?: boolean;
                /** When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition. */
                waitForTransition?: boolean;
            };

            /** Enable, if you want to use "parallaxed" elements inside of slider */
            parallax?: boolean;

            /** Enables images lazy loading. Object with lazy loading parameters or boolean `true` to enable with default settings. */
            lazy?: {
                /** Set to "true" to enable lazy loading for the closest slides images (for previous and next slide images). */
                loadPrevNext?: boolean;
                /** Amount of next/prev slides to preload lazy images in. Can't be less than `slidesPerView`. */
                loadPrevNextAmount?: number;
                /** By default, Swiper will load lazy images after transition to this slide, so you may enable this parameter if you need it to start loading of new image in the beginning of transition. */
                loadOnTransitionStart?: boolean;
                /** CSS class name of lazy element. */
                elementClass?: string;
                /** CSS class name of lazy loading element. */
                loadingClass?: string;
                /** CSS class name of lazy loaded element. */
                loadedClass?: string;
                /** CSS class name of lazy preloader. */
                preloaderClass?: string;
            } | number;

            /** Object with Fade-effect parameters. */
            fadeEffect?: {
                /** Enables slides cross fade. */
                crossFade?: boolean;
            };

            /** Object with Coverflow-effect parameters. */
            coverflowEffect?: {
                /** Enables slides shadows. */
                slideShadows?: boolean;
                /** Slide rotate in degrees. */
                rotate?: number;
                /** Stretch space between slides (in px). */
                stretch?: number;
                /** Depth offset in px (slides translate in Z axis). */
                depth?: number;
                /** Effect multipler. */
                modifier?: number;
            };

            /** Object with Flip-effect parameters. */
            flipEffect?: {
                /** Enables slides shadows. */
                slideShadows?: boolean;
                /** Limit edge slides rotation. */
                limitRotation?: boolean;
            };

            /** Object with Cube-effect parameters. */
            cubeEffect?: {
                /** Enables slides shadows. */
                slideShadows?: boolean;
                /** Enables main slider shadow. */
                shadow?: boolean;
                /** Main shadow offset in px. */
                shadowOffset?: number;
                /** Main shadow scale ratio. */
                shadowScale?: number;
            };

            /** Enables zooming functionality. Object with zoom parameters or boolean `true` to enable with default settings. */
            zoom?: {
                /** Maximum image zoom multiplier. */
                maxRatio?: number;
                /** Minimal image zoom multiplier. */
                minRatio?: number;
                /** Enable/disable zoom-in by slide's double tap. */
                toggle?: boolean;
                /** CSS class name of zoom container. */
                containerClass?: string;
                /** CSS class name of zoomed in container. */
                zoomedSlideClass?: string;
            } | boolean;

            /** Enables virtual slides functionality. Object with virtual slides parameters or boolean `true` to enable with default settings. */
            virtual?: {
                /** Array with slides. */
                slides?: string[];
                /** Enables DOM cache of rendering slides html elements. Once they are rendered they will be saved to cache and resued from it. */
                cache?: boolean;
                /**  */
                renderSlide?: (slide: string, index: number) => string;
                /**  */
                renderExternal?: (data: { offset: number, from: number, to: number, slides: string[]}) => string;
            } | boolean;

            /** Object with controller parameters or boolean true to enable with default settings. */
            controller?: {
                /** Pass here another Swiper instance or array with Swiper instances that should be controlled by this Swiper. */
                control?: Swiper;
                /** Set to `true` and controlling will be in inverse direction. */
                inverse?: boolean;
                /** Can be '`slide`' or '`container`'. Defines a way how to control another slider: slide by slide (with respect to other slider's grid) or depending on all slides/container (depending on total slider percentage) */
                by?: string;
            } | boolean;

            /** Object with a11y parameters or boolean true to enable with default settings. */
            a11y?: {
                /** Message for screen readers for previous button. */
                prevSlideMessage?: string;
                /** Message for screen readers for next button */
                nextSlideMessage?: string;
                /** Message for screen readers for previous button when swiper is on first slide. */
                firstSlideMessage?: string;
                /** Message for screen readers for previous button when swiper is on last slide. */
                lastSlideMessage?: string;
                /** Message for screen readers for single pagination bullet. */
                paginationBulletMessage?: string;
                /** CSS class name of a11 notification. */
                notificationClass?: string;
            } | boolean;

        }
    }

    //
    // ─── SWIPEOUT MODULE ────────────────────────────────────────────────────────────
    //

    class Swipeout {
        /** property. Currently opened swipeout HTMLElement. Or undefined if there is no opened swipeout element. */
        el: HTMLElement;

        /**
         * Create Swipeout instance.
         * @param el HTMLElement or string (with CSS Selector) of list (<li>) element with "swipeout" class. Required.
         * @param side string (could be "`left`" or "`right`") swipeout actions to open. Should be specified if item has both left and right swipeout actions. Optional.
         * @param callback callback function will be executed after swipeout element completes its opening animation.
         */
        open(el: HTMLElement | string, side?: string, callback?: Function): void;

        /**
         * Close swipeout actions on specified element.
         * @param el HTMLElement or string (with CSS Selector) of list (<li>) element with "swipeout" class. Required.
         * @param callback callback function will be executed after swipeout element completes its closing animation.
         */
        close(el: HTMLElement | string, callback: Function): void;

        /**
         * `Problem`: delete function is not allow int javascript.
         * Delete specified swipeout element.
         * @param el HTMLElement or string (with CSS Selector) of list (<li>) element with "swipeout" class. Required.
         * @param callback function -  callback function will be executed after swipeout element completes its delete animation right before it will be removed from DOM.
         */
        destroy(el: HTMLElement | string, callback: Function): void;

    }
    namespace Swipeout {

        interface Parameter {
            /** Fallback option for potentially better performance on old/slow devices. If you enable it, then swipeout item will not follow your finger during touch, it will be automatically opened/closed on swipe left/right. */
            noFollow?: boolean;
            /** When disabled, then framework will not remove swipeout element from DOM on "swipeout-delete" click. Useful to enable if you use another library like Vue or React to manage (remove) swipeout items. */
            removeElements?: boolean;
            /** When enabled, then framework will remove swipeout element from DOM on "swipeout-delete" click after specified delay. */
            removeElementsWithTimeout?: boolean;
            /** Delay in ms to remove swipeout item if removeElementsWithTimeout is enabled. */
            removeElementsTimeout?: number;
        }
    }

    //
    // ─── TABS MODULE ────────────────────────────────────────────────────────────────
    //

    namespace Tabs {
        interface TabRoute {
            path: string,
            id: string,
            content: string
        }
    }

    //
    // ─── TOAST MODULE ───────────────────────────────────────────────────────────────
    //

    class Toast {
        /** Link to global app instance. */
        app: Framework7;
        /** Toast HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Toast HTML element. */
        $el: Dom7.Dom7;
        /** Toast parameters. */
        params: Toast.Parameter;

        /** Open toast. */
        open(): void;
        /** Close toast. */
        close(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `open` | `opened` | `close` | `closed` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Toast {

        interface Parameter {
            /** Toast element. Can be useful if you already have Toast element in your HTML and want to create new instance using this element. */
            el?: HTMLElement;
            /** Toast icon HTML layout, e.g. <i class="f7-icons">home</i> or image <img src="path/to/icon.png">. */
            icon?: string;
            /** Toast inner text. */
            text?: string;
            /** Toast position. Can be `bottom`, `center` or `top`. */
            position?: string;
            /** Adds toast close button. */
            closeButton?: boolean;
            /** One of the default color themes. */
            closeButtonColor?: string;
            /** Close button text. */
            closeButtonText?: string;
            /** Additional css class to add. */
            cssClass?: string;
            /** Destroys toast instance on close. `Default: false`  */
            destroyOnClose?: boolean;
            /** Custom function to render Toast. Must return toast html. */
            render?: () => string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── TOGGLE MODULE ──────────────────────────────────────────────────────────────
    //

    class Toggle {
        /** Link to global app instance. */
        app: Framework7;
        /** Toggle HTML element. */
        el: HTMLElement;
        /** Dom7 instance with Toggle HTML element. */
        $el: Dom7.Dom7;
        /** Toggle input HTML element. */
        inputEl: HTMLElement;
        /** Dom7 instance with toggle input HTML element. */
        $inputEl: Dom7.Dom7;
        /** Boolean property indicating whether it is input is checked or not */
        checked: boolean;
        /** Toggle parameters. */
        params: Toggle.Parameter;

        /** Toggle input state */
        toggle(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `change` | `beforeDestroy`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `change` | `beforeDestroy`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `change` | `beforeDestroy`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `change` | `beforeDestroy`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace Toggle {
        interface Parameter {
            /** Toggle element. HTMLElement or string with CSS selector of toggle element. */
            el?: HTMLElement | string;
            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }

    //
    // ─── TOOLBAR AND TABBAR MODUEL ──────────────────────────────────────────────────
    //

    namespace Toolbar {
        interface Parameter {
            /** Will hide Toolbars/Tabbars on page scroll. */
            hideOnPageScroll?: boolean;
            /** Set to `true` to show hidden Toolbar/Tabbar when scrolling reaches end of the page. */
            showOnPageScrollEnd?: boolean;
            /** Set to `false` and hidden Toolbar/Tabbar will not become visible when you scroll page to top everytime. They will become visible only at the most top scroll position, in the beginning of the page. */
            showOnPageScrollTop?: boolean;
        }
    }

    //
    // ─── VI MODULE ──────────────────────────────────────────────────────────────────
    //

    //
    // ─── VIRTUAL LIST MODUEL ────────────────────────────────────────────────────────
    //

    class VirtualList {
        /** Array with items. */
        items: VirtualList.Item[];
        /** Array with filtered items (after using ".filterItems" method). */
        filteredItems: VirtualList.Item[];
        /** Object with cached dom items. */
        domCache: any;
        /** Parameters passed on list initialization. */
        params: VirtualList.Parameter;
        /** Virtual list target list block element. */
        el: HTMLElement;
        /** Dom7 instance of target list block element. */
        $el: Dom7.Dom7;
        /** Parent "page-content" element. */
        pageContentEl: HTMLElement;
        /** 	Dom7 instance of parent "page-content" element. */
        $pageContentEl: Dom7.Dom7;
        /** Index number of currently first rendered item. */
        currentFromIndex: number;
        /** Index number of currently last rendered item. */
        currentToIndex: number;
        /** Boolean property. Equals `true` if the currently last rendered item is the last item of all specified items. */
        reachEnd: boolean;

        /**
         * Filter virtual list by passing array with indexes of items to show
         * @param indexes indexes of items to show
         */
        filterItems(indexes: number[]): void;
        /** Disable filter and display all items again. */
        resetFilter(): void;
        /**
         * Append item to virtual list.
         * @param item item will be appended.
         */
        appendItem(item: VirtualList.Item): void;
        /**
         * Append array with items to virtual list.
         * @param items items will be appended.
         */
        appendItems(items: VirtualList.Item[]): void;
        /**
         * Prepend item to virtual list.
         * @param item
         */
        prependItem(item: VirtualList.Item): void;
        /**
         * Prepend array with items to virtual list.
         * @param items
         */
        prependItems(items: VirtualList.Item[]): void;
        /**
         * Replace item at specified index with the new one.
         * @param index
         * @param items
         */
        replaceItem(index: number, items: VirtualList.Item[]): void;
        /**
         * Replace all items with arrays of new items.
         * @param item new items list
         */
        replaceAllItems(items: VirtualList.Item[]): void;
        /**
         * Move virtual item from oldIndex to newIndex
         * @param oldIndex previous index
         * @param newIndex new index
         */
        moveItem(oldIndex: number, newIndex: number): void;
        /**
         * Insert new item before item with specified index
         * @param index index number of item that inserts before it
         * @param item new item
         */
        insertItemBefore(index: number, item: VirtualList.Item): void;
        /**
         * Delete item at specified index
         * @param index delete item index
         */
        deleteItem(index: number): void;
        /**
         * Delete items at specified array of indexes.
         * @param indexes indexes of delte items
         */
        deleteItems(indexes: number[]): void;
        /** Delete all items. */
        deleteAllItems(): void;
        /** Clear virtual list cached DOM elements. */
        clearCache(): void;
        /** Destory initialized virtual list and detach all events. */
        destroy(): void;
        /** Update virtual list, including recalculation of list sizes and re-rendering of virtual list. */
        update(): void;
        /**
         * Scroll Virtual List to specified item by its index number.
         * @param index item index
         */
        scrollToItem(index: number): void;

        /**
         * Add event handler.
         * @param event the name of the event: `itemBeforeInsert` | `itemsBeforeInsert` | `beforeClear` | `itemsAfterInsert`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `itemBeforeInsert` | `itemsBeforeInsert` | `beforeClear` | `itemsAfterInsert`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `itemBeforeInsert` | `itemsBeforeInsert` | `beforeClear` | `itemsAfterInsert`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `itemBeforeInsert` | `itemsBeforeInsert` | `beforeClear` | `itemsAfterInsert`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void;
    }
    namespace VirtualList {

        interface Item {
            title: string;
            subtitle?: string;
        }

        interface Parameter {
            /** Target List Block element. In case of string - CSS selector of list block element */
            el?: string | HTMLElement;
            /** List element `<ul>` inside of List block. */
            ul?: string | HTMLElement;
            /** Will automatically create `<ul>` element inside of Virtual List block. If disabled, then virtual list can be used on any block element without `ul > li` structure */
            createUl?: boolean;
            /** Array with list items */
            items?: VirtualList.Item[];
            /** Amount of rows (items) to be rendered before current screen scroll position. By default it is equal to double amount of rows (items) that fit to screen. */
            rowsBefore?: number;
            /** Amount of rows (items) to be rendered after current screen scroll position. By default it is equal to the amount of rows (items) that fit to screen. */
            rowsAfter?: number;
            /** Number of items per row. Doesn't compatible when using Virtual List with dynamic height. */
            cols?: number;
            /** If number - list item height in px. If function then function should return item height. By default equals to 44 for iOS theme and 48 for MD theme. */
            height?: number | Function;
            /** Template7 string template or Template7 compiled template that used to render single item. Template should contain full HTML layout for single item, including wrapping <li></li> tags. */
            itemTemplate?: string | Function;
            /** This optional function allows to use custom function to render item HTML. It could be used instead of template parameter. */
            renderItem?: (item: VirtualList.Item) => string;
            /** This optional function allows to render DOM items using some custom method. Useful in case it is used (e.g.) with Vue/React plugin to pass DOM rendering and manipulation to Vue/React. renderParameters conaints object with the following properties: fromIndex, toIndex, listHeight, topPosition, items. */
            renderExternal?: (renderParams: { fromIndex: number, toIndex: number, listHeight: boolean, topPosition: number, items: VirtualList.Item[] }) => string;
            /** Defines list item template for the case if empty data passed. */
            emptyTemplate?: string;
            /** This parameter allows to control buffer size on Virtual Lists with dynamic height (when `height` parameter is function) as a buffer size multiplier */
            dynamicHeightBufferSize?: number;
            /** Disable or enable DOM cache for already rendered list items. In this case each item will be rendered only once and all futher manipulations will be with DOM element. It is useful if your list items have some user interaction elements (like form elements or swipe outs) or could be modified. */
            cache?: boolean;
            /** Is the current device updates and handles scroll events during scroll. By default (if not specified) it is "false" for all iOS devices with iOS version less than 8. */
            updatableScroll?: boolean;
            /** Will set height on list block if enabled. */
            setListHeight?: boolean;
            /** Option to show filtered items only set by `filter()` method. */
            showFilteredItemsOnly?: boolean;
            /** Search function that will be used by Searchbar, it receives search query, item index and item itself. If item matches to search query you need to return `true`, otherwise this function should return `false` */
            searchByItem?: (query: string, index: number, item: VirtualList.Item) => boolean;
            /** Search function that will be used by Searchbar, it receives search query and array with all items. You need to loop through items and return array with indexes of matched items */
            searchAll?: (query: string, items: VirtualList.Item[]) => number[];
        }
    }

    //
    // ─── VIEW AND ROUTER MODULE ─────────────────────────────────────────────────────
    //

    /** View's main purpose is a navigating/routing between pages. We can access its router instance by view.router. It has a lot of useful methods and properties to take control over routing and navigation. */
    export class View {
        /** Link to global app instance. */
        app: Framework7;
        /** View HTML element. */
        el: HTMLElement;
        /** Dom7 instance with view HTML element. */
        $el: Dom7.Dom7;
        /**	View name that was passed name parameter. */
        name: string;
        /** Boolean property indicating is it a main view or not. */
        main: boolean;
        /** Array with available router's routes. */
        routes: Route[];
        /** Array with view history. */
        history: any[];
        /** Object with view initialization parameters. */
        params: View.Parameter;
        /** View's initialized router instance. */
        router: Router;

        constructor(appInstance: Framework7, el: Element, viewParams: View.Parameter);

        /** Destroy view instance */
        destroy(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void
    }
    namespace View {
        /** View paramters, please reference for <href>https://framework7.io/docs/view.html#router-api-methods-properties</href>. */
        interface Parameter {
            /** View name. If view was created with name, then it may be accessed via app.views.[name]. */
            name?: string;
            /** Specify whether this is View is main or not. If not passed then will be determined based on whether its element has  view-main class or not. */
            main?: string;
            /** Set to false to disable view router. */
            router?: boolean;
            /** Default (initial) View's url. If not specified, then it is equal to document url. */
            url?: string;
            /** If enabled then all previous pages in navigation chain will not be removed from DOM when you navigate deeper and deeper. It could be useful, for example, if you have some Form from 5 steps (5 pages) and when you are on last 5th page you need access to form that was on 1st page. */
            stackPages?: boolean;
            /** CSS Selector of another view or object with initialized View instance. By defaul all links in initialized (only) view will load pages in this view. This tell links to load pages in other view. */
            linksView?: string | object;
            /** Set to true and App will keep View's navigation history unique, it will also remove duplicated pages. By default, equal to the same App's parameter. */
            uniqueHistory?: boolean;
            /** Use this parameter in addition to uniqueHistory. Set to true and App will ignore URL GET parameters when cheking its uniqueness. So the URLs like "page.html" and "page.html?id=3" will be treated as the same. By default, equal to the same App's parameter. */
            uniqueHistoryIgnoreGetParameters?: boolean;
            /** You may enable this parameter to allow loading of new pages that have same url as currently "active" page in View. */
            allowDuplicateUrls?: boolean;
            /** Enables transitions between pages */
            animate?: boolean;
            /** Enable/disable preloading of previous page when you go deep in navigation. Should be enabled for correct work of "swipe back page" feature. */
            preloadPreviousPage?: boolean;
            /** When enabled, View will always reload currently active page without loading new one */
            reloadPages?: boolean;
            /** When enabled it will restore page scroll top when you get back to this page */
            restoreScrollTopOnBack?: boolean;
            /** Unloads routable tab content (removes tab inner content) when tab becomes visible. Only for routable tabs */
            unloadTabContent?: boolean;
            /** Delay (in ms) after new page will be loaded and inserted to DOM and before it will be transitioned. Can be increased a bit to improve performance. Will have effect only under iOS theme */
            iosPageLoadDelay?: number;
            /** Delay (in ms) after new page will be loaded and inserted to DOM and before it will be transitioned. Can be increased a bit to improve performance. Will have effect only under MD theme */
            materialPageLoadDelay?: number;
            /**
             * When enabled then router will pass route url query to request url query (for url, templateUrl and componentUrl).
             * If you have the following route: { path: '/somepage/', url: 'http://myserver/page/' } and you will click link with /somepage/?foo=bar url then it will load page from http://myserver/page/?foo=bar url
             */
            passRouteQueryToRequest?: boolean;
            /**
             * When enabled then router will pass current route parameters to request url query (for url, templateUrl and componentUrl).
             * If you have the following route: { path: '/user/:userId/posts/:postId/', url: 'http://myserver/userpost/' }
             * and you will click link with /user/11/posts/12/ url then it will load page from http://myserver/userpost/?userId=11&postId=12 url.
             */
            passRouteParamsToRequest?: boolean;

            // Routes

            /** Array with current View routes. In case if specified then will overwrite global app routes and routes only specified here will be available for the current View. */
            routes?: Route[];
            /** Array with additional routes that will extend global app routes. This additional routes will only be available for the current View. */
            routesAdd?: Route[];

            // Elements Removal

            /** During page transitions Router may remove unused Page and Navbar elements from DOM. Useful to be disabled in case you want to handle elements removal manually or using other library, e.g. Vue or React */
            removeElements?: boolean;
            /** When enabled then Router will remove elements after timeout. */
            removeElementsWithTimeout?: boolean;
            /** Timeout to remove elements (in case of removeElementsWithTimeout: true). */
            removeElementsTimeout?: number;

            // XHR Cache

            /** As Router can use Ajax to load HTML content for pages it is good to use caching, especially if your content in those pages updates not very often. */
            xhrCache?: boolean;
            /** Array of URLs (string) that should not be cached. */
            xhrCacheIgnore?: string[];
            /** If "true" then URLs like "about.html?id=2" and "about.html?id=3" will be treated and cached like single "about.html" page. */
            xhrCacheIgnoreGetParameters?: boolean;
            /** Duration in ms (milliseconds) while app will use cache instead of loading page with another Ajax request. By default it takes 10 minutes. */
            xhrCacheDuration?: number;

            // iOS Dynamic Navbar

            /** Enables dynamic navbar for iOS theme. */
            iosDynamicNavbar?: boolean;
            /** When enabled will extract dynamic navbar HTML element from page element and put it as a child of Views element. It improves dynamic navbar transition appearance, but in case you need dynamic navbar to be always as a page's child, then disable this parameter. */
            iosSeparateDynamicNavbar?: boolean;
            /** This option (when enabled) gives more native look for dynamic navbar left back-link icon animation. Useful only when you use dynamic navbar with default back-link icon on left side set as "sliding". */
            iosAnimateNavbarBackIcon?: boolean;

            // Swipe back

            /** Enable/disable ability to swipe back from left edge of screen to get to the previous page. */
            iosSwipeBack?: boolean;
            /** Value in px. Swipe back action will start if "touch distance" will be more than this value. */
            iosSwipeBackThreshold?: number;
            /** Value in px. Width of invisible left edge of the screen that triggers swipe back action. */
            iosSwipeBackActiveArea?: number;
            /** Enable/disable box-shadow animation during swipe back action. You can disable it to improve performance. */
            iosSwipeBackAnimateShadow?: boolean;
            /** Enable/disable opacity animation during swipe back action. You can disable it to improve performance. */
            iosSwipeBackAnimateOpacity?: boolean;
            /** Enable/disable ability to swipe back from left edge of screen to get to the previous page. For MD theme. `Default: false` */
            mdSwipeBack?: boolean;
            /** Value in px. Swipe back action will start if "touch distance" will be more than this value. For MD theme. `Default: 0` */
            mdSwipeBackThreshold?: number;
            /** Value in px. Width of invisible left edge of the screen that triggers swipe back action. For MD theme. `Default: 30` */
            mdSwipeBackActiveArea?: number;
            /** Enable/disable box-shadow animation during swipe back action. You can disable it to improve performance. For MD theme. `Default: true` */
            mdSwipeBackAnimateShadow?: boolean;
            /** Enable/disable opacity animation during swipe back action. You can disable it to improve performance. For MD theme. `Default: false` */
            mdSwipeBackAnimateOpacity?: boolean;

            // Push State

            /** If you develop web app (not PhoneGap or Home Screen web app) it is useful to enable hash navigation (browser url will look like "http://my-webapp.com/#!/about.html"). User as well will be able to navigate through app's history by using browser's default back and forward buttons. */
            pushState?: boolean;
            /** Push state root URL separator, for example "http://my-app.com/". It is useful only in case when you use empty ("") pushStateSeparator. */
            pushStateRoot?: string;
            /** Enable/disable page transitions on push state change. */
            pushStateAnimate?: boolean;
            /** Enable/disable push state page transition on app load. */
            pushStateAnimateOnLoad?: boolean;
            /** Push state URL separator, can be changed for something like '#page/' and then your push state urls will look like "http://myapp.com/#page/about.html". */
            pushStateSeparator?: string;
            /** Disable to ignore parsing push state URL and loading page on app load. */
            pushStateOnLoad?: boolean;

            // Events Handlers

            /** Object with events handlers. */
            on?: { [key: string]: Function };
        }
    }


    type RouteAsync = (routeTo: RoutePath, routeFrom: RoutePath, resolve: (parameters: Route, options?: RouteOptions) => void, reject: () => void) => void;

    interface RouterComponent {
        /** Template7 template string. Will be compiled as Template7 template. */
        template?: string;
        /** Render function to render component. Must return full html string or HTMLElement. */
        render?: Function;
        /** Component data, function must return component context data. */
        data?: Function;
        /** Component CSS styles. Styles will be added to the document after component will be mounted (added to DOM), and removed after component will be destroyed (removed from the DOM). */
        style?: string;
        /** Unique style scope id in case you are using scoped styles. Will add data-scope="styleScopeId" to the component element. */
        styleScopeId?: string;
        /** Object with additional component methods which extend component context. */
        methods?: string;
        /** Object with page events handlers. */
        on?: { [key: string]: Function };
        /** Called synchronously immediately after the component has been initialized, before data and event/watcher setup. */
        beforeCreate?: () => void;
        /** Called synchronously after the component is created, context data and methods are available and component element $el is also created and available. */
        created?: () => void;
        /** Called right before component will be added to DOM. */
        beforeMount?: () => void;
        /** Called right after component was be added to DOM. */
        mounted?: () => void;
        /** Called right before component will be destoyed. */
        beforeDestroy?: () => void;
        /** Called when component destroyed. */
        destroyed?: () => void;
    }

    interface ComponentContext {
        /** Dom7 instance with component HTML element */
        $el: Dom7.Dom7;
        /** Dom7 library */
        $: Dom7.Dom7Static;
        /** Dom7 library */
        $$: Dom7.Dom7Static;
        /** Dom7 library */
        $dom7: Dom7.Dom7Static;
        /** Framework7 app instance */
        $app: Framework7;
        /** Root data and methods you have specified in `data` and `methods` properties on app init */
        $root: any;
        /** Current route. Contains object with route. */
        $route: Route;
        /** Related router instance. */
        $router: Router;
        /** Object with md and ios boolean properties which indicating current theme. */
        $theme: {
            /** andriod style is active or not */
            md: boolean,
            /** ios style is active or not */
            ios: boolean
        };
    }

    interface Routable {
        /** Creates dynamic page from specified content string */
        content?: string;
        /** Load page content from passed Template7 template string or function */
        template?: string | Function;
        /** Load page content from url via Ajax, and compile it using Template7 Also supports dynamic route params from route path using {{paramName}} expression */
        templateUrl?: string;
        /** Load page from passed Framework7 Router Component */
        component?: RouterComponent;
        /** load pages as a component via Ajax Also supports dynamic route params from route path using {{paramName}} expression */
        componentUrl?: string;
    }

    interface RouteOptions {
        /** Whether the page should be animated or not (overwrites default router settings). */
        animate?: boolean;
        /** Whether the page should be saved in router history. */
        history?: boolean;
        /** Whether the page should be saved in browser state. In case you are using pushState, then you can pass here false to prevent route getting in browser history. */
        pushState?: boolean;
        /** Replace the current page with the new one from route. */
        reloadCurrent?: boolean;
        /** Replace the previous page in history with the new one from route. */
        reloadPrevious?: boolean;
        /** Load new page and remove all previous pages from history and DOM. */
        reloadAll?: boolean;
        /** Custom/extended context for Template7/Component page (when route loaded from `template`, `templateUrl`, `component` or `componentUrl`) */
        context?: any;
    }

    interface RoutePath {
        /** hash for the path. */
        hash?: string;
        /** Alais name of the path. */
        name?: string;
        /** Parent of this route path. */
        parentPath?: string;
        /** route params. If we have matching route with /page/user/:userId/post/:postId/ path and url of the page is /page/user/55/post/12/ then it will be the following object {userId: '55', postId: '12'}. */
        params: any;
        /** Route path. */
        path: string;
        /** object with route query. If the url is /page/?id=5&foo=bar then it will contain the following object {id: '5', foo: 'bar'}. */
        query: any;
        /** Route URL. */
        url: string;
        /** object with matching route from available routes. */
        route: Route;
    }

    interface Route {
        /** Route name, e.g. `home`. */
        name?: string;
        /** Route path. Means this route will be loaded when we click link that match to this path, or can be loaded by this path using API. */
        path?: string;
        /** Object with additional route options (optional). */
        options?: RouteOptions;
        /** Array with nested routes. */
        routes?: Route[];
        /** Load page from DOM by passed HTMLElement. */
        el?: HTMLElement;
        /** Load page from DOM that has same data-name attribute. */
        pageName?: string;
        /** Creates dynamic page from specified content string */
        content?: string;
        /** Load page content via Ajax.
         * Also supports dynamic route params from route path using {{paramName}} expression,
         *
         * e.g. `"/users/:userId/posts/:postId"` or `"http://myapp.com/posts/{{userId}}/{{postId}}'"`
         */
        url?: string;
        /** Load page content from passed Template7 template string or function. */
        template?: string | Function;
        /** Load page content from url via Ajax, and compile it using Template7. */
        templateUrl?: string;
        /** Load page from passed Framework7 Router Component. */
        component?: any;
        /** load pages as a component via Ajax Also supports dynamic route params from route path using {{paramName}} expression */
        componentUrl?: string;
        /** Do required asynchronous manipulation and the return required route content and options. */
        async?: RouteAsync;
        /** Array with tab routes */
        tabs?: Tabs.TabRoute[];
        /** Action Sheet route */
        actions?: Routable;
        /** Popup route */
        popup?: Routable;
        /** Login screen route */
        loginScreen?: Routable;
        /** Popover route */
        popover?: Routable;
        /** Sheet route */
        sheet?: Routable;
        /** Object with event handlers */
        on?: { [key:string]: Function };
        /** Route alias, or array with route aliases. We need to specify here alias `path` */
        alias?: string | string[];
        /** Route redirect. We need to specify here redirect `url` (not path) */
        redirect?: string | { route: RoutePath, resolve: (url: string, options?: RouteOptions) => void, reject: () => void };
    }

    class Router {
        /** Link to global app instance. */
        app: Framework7;
        /** Link to related View instance. */
        view: View;
        /** Object with router initialization parameters. */
        params: object;
        /** Router's view HTML element. */
        el: HTMLElement;
        /** Dom7 instance with router's view HTML element. */
        $el: Dom7.Dom7;
        /** Array with available router's routes. */
        routes: Route[];
        /** Array with router's view history. */
        history: string[];
        /** Object with router/view cache data. */
        cache: {
            components: RouterComponent[],
            templates: Template7.Template7[],
            xhr: F7XMLHttpRequest[]
        };
        /** Object with current route data. */
        currentRoute: RoutePath;
        /** Object with previously active route data. */
        previousRoute: RoutePath;
        /** Boolean property indicating is it allowed to change page / navigate or not. */
        allowPageChange: boolean;

        constructor(app: Framework7, view: View);

        /**
         * Navigate to (load) new page.
         * @param url url to navigate to
         * @param options with additional navigation properties (optional):
         */
        navigate(url: string, options?: {
            /** replace the current page with the new one from route. */
            reloadCurrent?: boolean,
            /** replace the previous page in history with the new one from route. */
            reloadPrevious?: boolean,
            /** load new page and remove all previous pages from history and DOM. */
            reloadAll?: boolean,
            /** previous pages history will be cleared after reloading/navigate to the specified route. */
            clearPreviousHistory?: boolean,
            /** whether the page should be animated or not (overwrites default router settings). */
            animate?: boolean,
            /** whether the page should be saved in router history. */
            history?: boolean,
            /** whether the page should be saved in browser state. In case you are using pushState, then you can pass here false to prevent route getting in browser history. */
            pushState?: boolean,
            /** If set to true then it will ignore if such URL in cache and reload it using XHR again. */
            ignoreCache?: boolean,
            /** Additional Router component or Template7 page context. */
            context?: object | Template7.Template7
        }):void;

        /**
         * Go back to previous page, going back in View history.
         * @param url url to navigate to (optional). If not specified, then it will go back to the previous page in history.
         * @param options with additional navigation properties (optional):
         */
        back(url?: string, options?: {
            /** whether the page should be animated or not (overwrites default router settings). */
            animate?: boolean,
            /** whether the page should be saved in browser state. In case you are using pushState, then you can pass here false to prevent route getting in browser history. */
            pushState?: boolean,
            /** If set to true then it will ignore if such URL in cache and reload it using XHR again. */
            ignoreCache?: boolean,
            /** if set to true then it will ignore previous page in history and load specified one. */
            force?: boolean
        }): void;

        /** Refresh/reload current page. */
        refreshPage(): void;

        /** Clear router previous pages history and remove all previous pages from DOM. */
        clearPreviousHistory(): void;

        /**
         * Add event handler.
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         * @param handler the handle function that will be added for the event
         */
        on(event: string, handler: Function): void;

        /**
         * Add event handler that will be removed after it was fired
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         * @param handler the handle function that will be fired once for the event
         */
        once(event: string, handler: Function): void;

        /**
         * Remove event handler.
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         * @param handler the handle function that will be removed for the event
         */
        off(event: string, handler: Function): void;

        /**
         * Remove all handlers for specified event.
         * @param event the name of the event: `init` | `resize` | `orientationchange` | `click` | `touchstart:active` | `touchmove:active` | `touchend:active` | `touchstart:passive` | `touchmove:passive` | `touchend:passive`
         */
        off(event: string): void;

        /**
         * Fire event on instance.
         * @param event event name.
         * @param args argument that will be passed into the event handler.
         */
        emit(event: string, ...args: any[]): void
    }


    // reference: <href>https://framework7.io/docs/support.html</href>
    interface F7Support {
        /** CSS Flexbox model support. */
        flexbox: boolean;
        /** Gestures event support (gesturestart, gesturechange, gestureend) */
        gestures: boolean;
        /** Mutation Observers support */
        observer: boolean;
        /** Passive event listener support. */
        passiveListener: boolean;
        /** CSS position:sticky support. */
        positionSticky: boolean;
        /** Touch events support (touchstart, touchmove, touchend). */
        touch: boolean;
        /** CSS 3D Transforms support */
        transforms3d: boolean;
    }

    // reference: <href>https://framework7.io/docs/device.html</href>
    interface F7Device {
        /** `true` for Android device. */
        android: boolean;
        /** `true` when app running in cordova environment. */
        cordova: boolean;
        /** `true` for desktop browser. */
        desktop: boolean;
        /** `true` for iOS device */
        ios: boolean;
        /** `true` for iPad */
        ipad: boolean;
        /** `true` for iPhone */
        iphone: boolean;
        /** `true` for iPhoneX  */
        iphoneX: boolean;
        /** `true` for iPod */
        ipod: boolean;
        /** Contains OS can be `ios`, `android` or `windows` (for Windows Phone) */
        os: string;
        /** Contains OS version, e.g. `11.2.0` */
        osVersion: string;
        /** Alias for cordova prop */
        phonegap: any;
        /** Device pixel ratio */
        pixelRatio: number;
        /** true if app running in full-screen mode and requires Status Bar overlay */
        statusbar: boolean;
        /** true if app runs in web view - webapp installed to home screen */
        webView: boolean;
        /** true for Windows Phone device */
        windows: boolean;
        /** Returns true if app running in full-screen mode and requires Status Bar overlay */
        needsStatusbarOverlay(): boolean;
    }

    // reference: <href>https://framework7.io/docs/utils.html</href>
    interface F7Utils {
        /**
         * Extends target object with properties and methods from from objects
         * @param target target object to extend
         * @param from objects to copy properties and methods from
         */
        extend(target: object, ...from: any[]): any;

        /**
         * Executes code on next available animation frame.
         * @param callback function to call when it's time to update your animation for the next repaint.
         */
        nextFrame(callback: Function): void;

        /**
         * Executes code after required delay. Basically alias for setTimeout
         * @param callback function to call after specified delay
         * @param delay delay in ms. Optional, by deault is `0`
         */
        nextTick(callback: Function, delay?: number): number;

        /** returns current timestamp in ms */
        now(): number;

        /**
         * parse url query get parameters
         * @param url url with GET parameters. Required
         * */
        parseUrlQuery(url: string): any;

        /**
         * Replace diacritics in specified text string with standard latin characters
         * @param str Text string
         */
        removeDiacritics(str: string): string;

        /**
         * Cross-browser implementation on requestAnimationFrame
         * @param callback function to call when it's time to update your animation for the next repaint
         */
        requestAnimationFrame(callback: Function): number;

        /**
         * Cancels an animation frame request
         * @param id The ID value returned by the call to app.utils.requestAnimationFrame() that requested the callback
         */
        cancelAnimationFrame(id: number): void;

        /**
         * Create a serialized representation of a plain object suitable for use in a URL query string
         * @param obj Object to serialize
         */
        serializeObject(obj: object): string;
    }

    // reference: <href>https://framework7.io/docs/request.html</href>
    interface F7RequestParams {
        /** Request method (e.g. "POST", "GET", "PUT") */
        method?: string;
        /** If you need synchronous requests, set this option to `false` */
        async?: boolean;
        /** If set to false, it will force requested pages not to be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_nocache={timestamp}" to the GET parameters */
        cache?: boolean;
        /** Content type. Also could be 'multipart/form-data' and 'text/plain'. For cross-domain requests, setting the content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server */
        contentType?: string;
        /** If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. When true additional "X-Requested-With: XMLHttpRequest" header will be added to request */
        crossDomain?: boolean;
        /** Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. For POST requests could be `FormData` type */
        data?: string | object | any[];
        /** By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to `false` */
        processData?: boolean;
        /** The type of data that you're expecting back from the server. Could be 'text' or 'json' */
        dataType?: string;
        /** An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport */
        headers?: { [key: string]: any; };
        /** An object of fieldName-fieldValue pairs to set on the native XHR object */
        xhrFields?: { [key: string]: any; };
        /** A username to be used with XMLHttpRequest in response to an HTTP access authentication request */
        username?: string;
        /** A password to be used with XMLHttpRequest in response to an HTTP access authentication request */
        password?: string;
        /** Set a timeout (in milliseconds) for the request */
        timeout?: number;
        /** A pre-request callback function that can be used to modify passed parameters */
        beforeCreate?: (params: any) => void;
        /** A pre-request callback function that will be called before XHR opened. Can be used to modify XHR object */
        beforeOpen?: (xhr: F7XMLHttpRequest, params: any) => boolean;
        /** A pre-request callback function that will be called after XHR opened and before XHR send. Can be used to modify the XHR object before it is sent. Use this callback to set custom headers, etc */
        beforeSend?: (xhr: F7XMLHttpRequest) => boolean;
        /** A function to be called when the request finishes (after success and error callbacks are executed) */
        complete?: (xhr: F7XMLHttpRequest, status: any) => void;
        /** A function to be called if the request fails */
        error?: (xhr: F7XMLHttpRequest, status: any) => void;
        /** An object of numeric HTTP codes and functions to be called when the response has the corresponding code. */
        statusCode?: { [key: string]: (xhr: F7XMLHttpRequest) => void; };
        /** A function to be called if the request succeeds */
        success?: (data: any, status: any, xhr: F7XMLHttpRequest) => void;
    }

    interface F7XMLHttpRequest extends XMLHttpRequest {
        /** Object with passed XHR request parameters */
        requestParameters?: any;
        /** String with request URL */
        requestUrl?: string;
    }

    interface F7Request {
        /**
         * Load data from the server.
         * @param params Request parameters
         */
        (params: F7RequestParams): F7XMLHttpRequest;

        /**
         * Load data from the server using a HTTP GET request
         * @param url Request url
         * @param data A plain object or string that is sent to the server with the request. Optional
         * @param success A callback function that is executed if the request succeeds. Optional
         * @param error A callback function that is executed if the request fails. Optional
         * @param dataType The type of data that you're expecting back from the server. Could be text or json. Optional
         */
        get(url: string, data?: object | string, success?: (data: any, status: any, xhr: F7XMLHttpRequest) => void, error?: (xhr: F7XMLHttpRequest, status: any) => void, dataType?: string): F7XMLHttpRequest;

        /**
         * Load data from the server using a HTTP POST request
         * @param url Request url
         * @param data A plain object or FormData or string that is sent to the server with the request. Optional
         * @param success A callback function that is executed if the request succeeds. Optional
         * @param error A callback function that is executed if the request fails. Optional
         * @param dataType The type of data that you're expecting back from the server. Could be text or json. Optional
         */
        post(url: string, data?: object | FormData | string, success?: (data: any, status: any, xhr: F7XMLHttpRequest) => void, error?: (xhr: F7XMLHttpRequest, status: any) => void, dataType?: string): F7XMLHttpRequest;

        /**
         * Load JSON-encoded data from the server using a GET HTTP request
         * @param url Request url
         * @param data A plain object or string that is sent to the server with the request. Optional
         * @param success A callback function that is executed if the request succeeds. Optional
         * @param error A callback function that is executed if the request fails. Optional
         */
        json(url: string, data?: object | FormData | string, success?: (data: any, status: any, xhr: F7XMLHttpRequest) => void, error?: (xhr: F7XMLHttpRequest, status: any) => void): F7XMLHttpRequest;

        /**
         * Send JSON data using a HTTP POST request
         * @param url Request url
         * @param data A plain object
         * @param success A callback function that is executed if the request succeeds. Optional
         * @param error A callback function that is executed if the request fails. Optional
         * @param dataType The type of data that you're expecting back from the server. Could be text or json. Optional
         */
        postJson(url: string, data: object, success?: (data: any, status: any, xhr: F7XMLHttpRequest) => void, error?: (xhr: F7XMLHttpRequest, status: any) => void, dataType?: string): F7XMLHttpRequest;
    }
}

declare module "framework7" {
    export default Framework7;
}
