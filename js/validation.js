
// Constructor Đối tượng 'Validator'
function Validator(options) {

    function getParent(element, selector) {

        while (element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        // value: inputElement.value - gia tri nguoi dung nhap vao
        // test function: rule.test - kiểm tra nhận value người dùng nhập vào
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        // Lặp qua từng rule và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; i++) {
            switch (inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }

            if(errorMessage) break;
        }
        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
        
        return !errorMessage;
    }
    const selectorRules = {};
    // Lấy element của form cần validate
    var formElement = document.querySelector('#form-1');
    if (formElement) {
        var isFormValid = true;
        formElement.onsubmit = function (e) {
            e.preventDefault();

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid) {
                    isFormValid = false;
                }
            });
            
            
            
            if (isFormValid) {
                //Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]') 
                    var formValues = Array.from(enableInputs).reduce(function (values,input) {
                        switch (input.type) {
                            case  'checkbox' :
                                if (input.matches(':checked')) {
                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];
                                    }
                                    values[input.name].push(input.value);
                                } else if (!values[input.name]) {
                                    values[input.name] = '';
                                }
                                break;
                            case  'radio' :
                                if (input.matches(':checked')) {
                                    values[input.name] = input.value;
                                } else if (!values[input.name]) {
                                    values[input.name] = '';
                                }
                                break;
                            case 'file':
                                values[input.name] = input.files;
                            default:
                                values[input.name] = input.value;
                        }

                       return values;
                    }, {});

                    options.onSubmit(formValues)
                }
                //Trường hợp submit với hành vi mặc định
                else{
                    formElement.submit();
                }
            }
        }
        // Lặp qua mỗi rules và xử lí (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach( (rule) => {

            // Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach( (inputElement) => {
                // Xử lí trường hợp blur khỏi input
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }

                // Xử lí mỗi khi người dùng nhập vào input
                inputElement.oninput = () => {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }
}

// Định nghĩa các rules
// Nguyên tắc của các rules:
// 1. khi có lỗi => trả ra message lỗi
// 2. khi không có lỗi thì không trả ra gì cả ( undefined )
Validator.isRequired = function(selector,message) {
    return {
        selector,
        // kiểm tra người dùng đã nhập hay chưa
        test: function(value) {
            return value ? undefined :message || 'Vui long nhap truong ki tu';
        }
    };
}

Validator.isEmail = function(selector,message) {
    return {
        selector,
        test: function(value) {
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined :message || 'Vui long nhap truong email'
        }
    };
}

Validator.minLength = function(selector, min,message) {
    return {
        selector,
        // kiểm tra người dùng đã nhập hay chưa
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui long nhap toi thieu ${min}`
        }
    };
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Gía trị nhập vào không chính xác';
        }
    }
}