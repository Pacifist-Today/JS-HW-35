"use strict";

void function () {
    const unparsedData = localStorage.getItem("#form")
    if (!unparsedData) return alert("empty data")
    const data = JSON.parse(unparsedData)

    let ulCreating = document.createElement("ul")

    nodata:
        for (let printing in data) {
            if (data[printing] === "") {
                continue;
            } else {
                let liCreating = document.createElement("li")
                liCreating.innerHTML = `${data[printing]}`
                ulCreating.append(liCreating)
            }
            console.log(data["option"])
        }
    document.body.append(ulCreating)
}()

    // nodata:
    // for (let printing in data) {
    //     if (data[printing] === "") {
    //         continue nodata
    //     }   else if (data[printing].length >= 1) {
    //         let liCreating = document.createElement("li")
    //         liCreating.innerHTML = `${data[printing]}`
    //         ulCreating.append(liCreating)
    //     }   else if (data["option"] === "0") {
    //         if (data["option"] === "0") {
    //             alert("no data")
    //         }
    //     }
    //     console.log(data["option"])
    // }
    //
    // document.body.append(ulCreating)