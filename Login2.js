const users = JSON.parse(localStorage.getItem('users'))


$('.place').on('input', function () {
    if (
        $('#name').val().length >= 8 &&
        $('#password').val().length >= 6 
    ) {
        $('.btn').attr('disabled', false);
    } else {
        $('.btn').attr('disabled', true);
    }
});


$('form').on('submit', function(event){
    event.preventDefault


    let userExist = users.some(
        (user) =>
        user.name === $('#name').val() && user.password === $('#password').val()
    )

    if(userExist){
       localStorage.setItem('currentUser', $('#name').val())
       $('.place').val('')
       location.href = '../../Register.html'
    } else {
        alert('Your password or name is incorrect')
    }
})