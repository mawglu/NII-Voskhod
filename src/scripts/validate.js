(function () {
    /**
     * @type {HTMLElement}
     */
    const form = $('form');

    /**
     * @return {boolean}
     *
     * reset form field
     */
    function formReset() {
        form.find('input').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
        form.find('textarea').val('');
        return false;
    }

    /**
     * validate & submit handler forms
     */
    form.each(function () {
        $(this).validate({
            ignore: [],
            rules: {
                form_data_name: {required: true},
                form_data_email: {required: true, email: true},
                form_data_tel: {required: true},
                form_data_po_name: {required: true},
                form_data_po_type: {required: true},
                form_data_application_text: {required: true},
            },
            messages: {
                form_data_name: 'Заполните поле',
                form_data_email: {
                    required: 'Заполните поле',
                    email: 'Адрес электронной почты должен быть в формате name@domain.com'
                },
                form_data_tel: 'Заполните поле',
                form_data_po_name: 'Заполните поле',
                form_data_po_type: 'Заполните поле',
                form_data_application_text: 'Заполните поле',
            },
            errorPlacement: function (error, element) {
                element.parent().before(error);
            },
            highlight: function (element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            submitHandler: function (f, e) {
                e.preventDefault();
                $.ajax({
                    type: f.method,
                    url: f.action,
                    data: $(f).serialize(),
                    dataType: 'json',
                }).done(function (data) {
                    formReset();
                    alert(data.message);
                }).fail(function (data) {
                    alert(data.message);
                });
            }
        });
    });
}());