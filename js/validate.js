(function () {
    /**
     * @type {HTMLElement}
     */
    const form = $('form');

    /**
     * mask for input type=tel
     */
    $('input[type=tel]').mask('+7 (999) 999-99-99');

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
     * validate forms
     */
    form.each(function () {
        const $self = $(this);

        $self.validate({
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
            submitHandler: function (form, ev) {
                ev.preventDefault();

                formReset();
                alert('Submitted!');

                // $.ajax({
                //     type: $self.attr('method'),
                //     url: $self.attr('action'),
                //     data: $self.serialize(),
                //     dataType: 'json',
                // }).done(function () {
                //     console.log('success');
                // }).fail(function () {
                //     console.log('fail');
                // });
            }
        });
    });
}());