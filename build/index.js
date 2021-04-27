"use strict";
var sampleString = "(Name)John Doe\n(Age)20\n(City)Ashtabula, OH\n(Flags)NYN\n\n(Name)Jane Doe\n(Flags)YNY\n(City)N Kingsville, OH\n\n(Name)Sally Jones\n(Age)25\n(City)Paris\n(Flags)YYY\n";
var stringArray = sampleString.split('\n');
console.log(stringArray);
var output = [];
stringArray.map(function (item) {
    var current = 0;
    if (item.includes('(Name)')) {
        console.log(item);
        //     console.log(item);
        var name = item.replace('(Name)', '');
        //     console.log(name);
        output[current] = {
            name: name,
        };
        //     current += 1;
        //   }
    }
    if (item === '') {
        current += 1;
    }
});
console.log(output);
