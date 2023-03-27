function checkTable() {
  
    var input = document.getElementById("input");

    // var table = document.getElementsByTagName("table");

    var sOption = operators.value;
    
    if (input.value != "") {
        errorMsg.innerHTML = ""
        table.innerHTML = "";


        if (sOption == "Multiplication") {
            var answer = 1

            for (var i = 1; i  <= 12; i++) {
                answer = input.value *  i;
                table.innerHTML += `
                    <tr>
                        <td> ${input.value} * ${i} = ${answer} </td>
                    </tr>
                `
            }
        } else if (sOption == "Addition") {
            var answer = 0;
    
            for (var i = 1; i  <= 12; i++) {
                answer = Number(input.value) +  i;
                table.innerHTML += `
                    <tr>
                        <td> ${input.value} + ${i} = ${answer} </td>
                    </tr>
                `
            }
        } else if (sOption == "Subtraction") {
            var answer = 0;
    
            for (var i = 1; i  <= 12; i++) {
                answer = Number(input.value) -  i;
                table.innerHTML += `
                    <tr>
                        <td> ${input.value} - ${i} = ${answer} </td>
                    </tr>
                `
            }
        } else {
            var answer = 1;
    
            for (var i = 1; i  <= 12; i++) {
                answer = Number(input.value) /  i;
                table.innerHTML += `
                    <tr>
                        <td> ${input.value} / ${i} = ${parseFloat(answer)} </td>
                    </tr>
                `
            }
        }
    }

    else {
        table.innerHTML = "";

        errorMsg.innerHTML = "If you are not a fool, you will know that empty input cant give answer"
    }
}