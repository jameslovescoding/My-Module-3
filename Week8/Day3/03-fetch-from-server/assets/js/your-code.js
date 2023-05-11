export function getAllDogs() {
    // Your code here
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    // Your code here
    return fetch("/dogs/2")
}

export function postNewDog() {
    // Your code here
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application\/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: "Kai",
            age: 2
        })
    });
}

export function postNewDogV2(name, age) {
    // Your code here
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: "ckyussk1q0000oiv5842u3dri",
            age: 2
        })
    });
}

export function deleteDog(id) {
    // Your code here
    return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        headers: {
            auth: "ckyut5wau0000jyv5bsrud90y"
        }
    });
}