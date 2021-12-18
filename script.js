let cat = {
    weight: 10,
    ShowWeight: function() {
        console.log( "Вес кота равен " + this.weight + "кг.");
    },
    StopFeeting: function() {
        console.log("Перестаем кормить кота!");
        this.weight -= 2;
    },
    StartFeeting: function() {
        console.log("Начинаем кормить кота!");
        this.weight +=1;
    }
    /*
    StopFeeting: function() {
        if (this.weight >= 6) {
            console.log("Перестаем кормить кота!");
            this.weight -= 2;
        }
        else {
            console.log("Пора кормить кота! Вес кота уже равен " + this.weight + "кг.");
        }
    },
    StartFeeting: function() {
        if (this.weight < 6) {
            console.log("Начинаем кормить кота!");
            this.weight +=1;
        }
        else {
            console.log("Пора кормить кота! Вес кота уже равен " + this.weight + "кг.");
        }
    }
    */
};
function Feeting() {
    if (this.weight >= 6) {
        cat.StopFeeting();
    }
    else {
        cat.StartFeeting();
    }
}

Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();
Feeting();