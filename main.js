let Gender = ""

function GetGender() {
    var choice = document.getElementsByName('GenderBtn');

    for (i = 0; i < choice.length; i++) {
        if (choice[i].checked)
            Gender = choice[i].value
    }

    alert(Gender)
}