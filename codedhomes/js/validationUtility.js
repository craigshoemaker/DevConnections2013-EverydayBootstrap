var ValidationUtility = function() {
    var _validationElements = $('[data-role="validate"]');
    var
        _elementCount,
        _successCallback,
        _failCallback;

    _validationElements.popover({
        placement: 'top'
    });

    _validationElements.on('invalid', function() {
        if (_elementCount > 0) {
            return;
        }

        _elementCount++;
        $('#' + this.id).popover('show');
        _failCallback(this);
    });

    _validationElements.on('blur', function() {
        $('#' + this.id).popover('hide');
    });

    var validate = function(formSelector, successCallback, failCallback) {
        _elementCount = 0;

        _successCallback = successCallback;
        _failCallback = failCallback;

        $('.has-error').removeClass('has-error');

        if (formSelector.indexOf('#') === -1) {
            formSelector = '#' + formSelector;
        }

        if ($(formSelector).get(0).checkValidity()) {
            _successCallback();
        }
    };

    return {
        validate: validate
    };
};