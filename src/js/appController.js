define(['ojs/ojcore',
        'knockout',
        'ojs/ojknockout',
        'ojs/ojlabel',
        'ojs/ojinputtext',
        'ojs/ojdatetimepicker',
        'common/composites/template-demo/loader'],
    function (oj, ko) {
        function ControllerViewModel() {
            var self = this;

            var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

            self.appName = ko.observable("JET Template Demo");
            self.userLogin = ko.observable("anirbmuk");

            self.searchGroupTemplate1 = {
                name: 'search-group-template',
                value: {
                    groups: [
                        {
                            component: 'ojInputDate',
                            id: 'oinput1',
                            label: 'Start Date',
                            inputValue: '',
                            isRequired: false,
                            visible: true
                        },
                        {
                            component: 'ojInputDate',
                            visible: true,
                            id: 'oinput1',
                            label: 'End Date',
                            inputValue: '',
                            isRequired: false
                        }
                    ]
                }
            };
            
            self.searchGroupTemplate2 = {
                name: 'search-group-template',
                value: {
                    groups: [
                        {
                            component: 'ojInputText',
                            id: 'oinput3',
                            label: 'First Name',
                            inputValue: '',
                            isRequired: false,
                            visible: true
                        },
                        {
                            component: 'ojInputText',
                            visible: true,
                            id: 'oinput4',
                            label: 'Last Name',
                            inputValue: '',
                            isRequired: false
                        },
                        {
                            component: 'ojInputText',
                            visible: true,
                            id: 'oinput5',
                            label: 'Email',
                            inputValue: '',
                            isRequired: false
                        }
                    ]
                }
            };
            
            self.searchGroupTemplate3 = {
                name: 'search-group-template',
                value: {
                    groups: [
                        {
                            component: 'ojInputText',
                            id: 'oinput6',
                            label: 'Global',
                            inputValue: '',
                            isRequired: true,
                            visible: true
                        }
                    ]
                }
            };

        }

        return new ControllerViewModel();
    }
);
