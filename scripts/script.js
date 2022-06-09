"use strict";

void function () {
    const formSelector = "#form"
    const formSearching = document.querySelector(formSelector)
    const inputs = document.querySelectorAll(`input, select, textarea`)

    const submitHandler = (event) => {
        const data = {}

        for (const input of inputs) {
            data[input.name] = input.value
        }

        localStorage.setItem(formSelector, JSON.stringify(data))
        // window.location.href = "../pages/page.html"
    }

    const loadHandler = () => {
        const unparsedData = localStorage.getItem(formSelector)
        if (!unparsedData) return
        const data = JSON.parse(unparsedData)

        for (const input of inputs) {
            input.value = data[input.name]
        }
    }

    formSearching.addEventListener('submit', submitHandler)

    document.addEventListener('DOMContentLoaded', loadHandler)

    // const submitClick = function () {
    //     window.location.href = "../pages/page.html"
    // }
    //
    // const submitSelector = document.querySelector(".btn .btn-primary")
    //
    // submitSelector.addEventListener("submit", submitClick())
}()