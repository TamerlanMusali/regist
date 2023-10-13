const users = [];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}



$('.place').on('input', function () {
    if (
        $('#name').val().length >= 8 &&
        $('#password').val().length >= 6 &&
        $('#check').is(':checked')
    ) {
        $('.btn').attr('disabled', false);
    } else {
        $('.btn').attr('disabled', true);
    }
});



$('#check').click(function () {
    if (
        $('#name').val().length >= 8 &&
        $('#password').val().length >= 6 &&
        $('#check').is(':checked')
    ) {
        $('.btn').attr('disabled', false);
    } else {
        $('.btn').attr('disabled', true);
    }
});


$('.btn').click(function (event) {
    event.preventDefault()
    console.log(localStorage.getItem('users'))

    let localUsers = JSON.parse(localStorage.getItem('users'))

    let newUser = {
        name: $('#name').val(),
        password: $('#password').val(),
        items: []
    }


    let alreadyExcist = localUsers.some((user) => user.name === $('#name').val());

    if (alreadyExcist) {
        alert('This is user already registered');
        $('#name').css({
            'outline-color': 'red',
            'border-color': 'red',
        })
    } else {
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        $('.place').val('')
    }



})