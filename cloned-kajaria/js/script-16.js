const contactForm = {
    init: () => {
        contactForm.countryCodeSelectInit();
        contactForm.countrySelectInit();
        $('#country').on('change', function (e) {
            var selectedValue = $(this).val();

            contactForm.getStates(selectedValue);
            // Do something with the selected value
        });
        $('#state').on('change', function (e) {
            var stateID = $(this).val();

            $('#state_meta').val($('#state').find(":selected").text())
            var countryID = $('#country').val();
            contactForm.getCities(stateID, countryID);
            // Do something with the selected value
        });

        $('#city').on('change', function (e) {
            $('#city_meta').val($('#city').find(":selected").text())
        });
        $('#state').append($('<option>', { 'value': 0 })
            .text('Select State'))
        $('#city').append($('<option>', { 'value': 0 })
            .text('Select City'))
    },
    countryCodeSelectInit: () => {
        $('#country_code').select2({
            ajax: {
                url: '/country-data?q=',
                processResults: function (data) {
                    return {
                        results: $.map(data, function (country) {
                            return {
                                id: country.phone_code,
                                country_code: '+' + country.phone_code.replace('+', ''),
                                country_sm_name: country.iso2.toLowerCase(),
                                country_name: country.iso3,
                                country_full_name: country.name
                            };
                        })
                    };
                },
                cache: true
            },
            placeholder: "Select Country Code",
            templateResult: contactForm.formatCountryCodeSelectOption,
            templateSelection: contactForm.formatCountryCodeSelectOption,
        });


    },
    countrySelectInit: () => {
        $('#country').select2({
            ajax: {
                url: '/country-data?q=',
                processResults: function (data) {
                    return {
                        results: $.map(data, function (country) {
                            return {
                                id: country.iso2,
                                text: country.name,
                                country_code: '+' + country.phone_code.replace('+', ''),
                                country_sm_name: country.iso2.toLowerCase(),
                                country_name: country.iso3,
                                country_full_name: country.name,
                            };
                        })
                    };
                },
                cache: true
            },
            placeholder: "Select Country",
            templateResult: contactForm.formatCountrySelectOption,
            templateSelection: contactForm.formatCountrySelectOption,
        });
    },
    formatCountryCodeSelectOption: (country) => {
        if (!country.id) {
            return country.text;
        }


        var $country = $(
            '<span><i class="flag-icon flag-icon-' + country.country_sm_name + '"></i>  ' + country.country_code + ' </span>');

        return $country;
    },
    formatCountrySelectOption: (country) => {
        if (!country.id) {
            return country.text;
        }
        var $country = $(
            '<span><i class="flag-icon flag-icon-' + country.country_sm_name + '"></i>  ' + country.country_full_name + ' </span>');
        $('#country_meta').val(country.country_full_name)
        return $country;
    },
    getStates: (countryID) => {
        var settings = {
            "url": "https://api.countrystatecity.in/v1/countries/" + countryID + '/states',
            "method": "GET",
            "headers": {
                "X-CSCAPI-KEY": "ZVdWYjJuMVIxcWxtbW1mTUVqUDdKQnNBdjgzTzNYQ3VYaEZPUnN2OA=="
            },
        };

        $.ajax(settings).done(function (response) {
            $.each(response, function (key, value) {
                $('#state')
                    .append($('<option>', { 'value': value.iso2 })
                        .text(value.name));
            });
        });
    },
    getCities: (stateID, countryID) => {
        var settings = {
            "url": "https://api.countrystatecity.in/v1/countries/" + countryID + '/states/' + stateID + '/cities',
            "method": "GET",
            "headers": {
                "X-CSCAPI-KEY": "ZVdWYjJuMVIxcWxtbW1mTUVqUDdKQnNBdjgzTzNYQ3VYaEZPUnN2OA=="
            },
        };

        $.ajax(settings).done(function (response) {
            $.each(response, function (key, value) {
                $('#city')
                    .append($('<option>', { 'value': value.id })
                        .text(value.name));
            });
        });
    }
}