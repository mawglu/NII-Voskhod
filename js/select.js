(function () {
    /**
     * @type {Element}
     *
     * dropdown wrapper
     */
    const dropdownElem = document.querySelector('.dropdown');

    /**
     * @param elem
     * @param className
     *
     * switch the class of the element
     */
    function switchClass(elem, className) {
        elem.classList.toggle(className)
    }

    /**
     * dropdown handler
     */
    dropdownElem.addEventListener('click', function (event) {
        const elem = event.target;
        const input = this.querySelector('input');
        let value;

        /**
         * dropdown toggle
         */
        if (event.target.nodeName === 'INPUT') {
            if (!this.classList.contains('show')) {
                switchClass(this, 'show')
            } else {
                switchClass(this, 'show')
            }
        }

        /**
         * dropdown select
         */
        if (elem.classList.contains('dropdown-item')) {
            value = elem.value;
            input.value = value;

            if (input.value.length > 0) {
                this.classList.remove('show');
            } else {
                console.error('Нет значения!');
            }
        }
    });
}());

