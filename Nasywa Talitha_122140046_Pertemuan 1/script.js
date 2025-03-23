// aplikasi to-do list
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("todo-input");
    const submitButton = document.getElementById("submit-button");
    const todoList = document.getElementById("todo-list");
    const submitOutput = document.getElementById("submit-output");

    function saveToLocalStorage() {
        const todo = [];
        document.querySelectorAll("#todo-list li").forEach(item => {
            todo.push({
                text: item.querySelector("span").innerText,
                completed: item.classList.contains("line-through")
            });
        });
        localStorage.setItem("todo", JSON.stringify(todos));
    }

    function loadFromLocalStorage() {
        const savedTodo = JSON.parse(localStorage.getItem("todos")) || [];
        savedTodo.forEach(todo => addTodoItem(todo.text, todo.completed));
    }

    function addTodoItem(todoText, completed = false) {
        if (todoText.trim() === "") {
            submitOutput.innerText = "Masukkan aktivitas terlebih dahulu!";
            submitOutput.classList.add("text-red-500");
            return;
        }

        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-100 p-2 rounded mb-2";

        if (completed) li.classList.add("line-through");

        const span = document.createElement("span");
        span.innerText = todoText;
        span.className = "flex-1 cursor-pointer";
        
        span.addEventListener("click", function () {
            li.classList.toggle("line-through");
            saveToLocalStorage();
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Hapus";
        deleteButton.className = "text-red-500 hover:text-red-700 text-sm ml-3";
        deleteButton.addEventListener("click", function () {
            li.remove();
            saveToLocalStorage();
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        submitOutput.innerText = "Aktivitas berhasil ditambahkan!";
        submitOutput.classList.remove("text-red-500");
        submitOutput.classList.add("text-green-500");

        saveToLocalStorage();
    }

    submitButton.addEventListener("click", function () {
        addTodoItem(inputField.value);
        document.getElementById("todo-input").reset();
    });

    loadFromLocalStorage();
});

// kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = angka1 ** angka2;
            break;
        case "modulus":
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-pangkat").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "pangkat");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-akarkuadrat").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    
    if (isNaN(angka1) || angka1 < 0) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = Math.sqrt(angka1);
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: √${angka1} = ${hasil}</p>`;
    }
});

document.getElementById("btn-mod").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "modulus");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} modulo ${angka2} = ${hasil}</p>`;
    }
});

// form pendaftaran
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const namaError = document.getElementById("nama-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const successMessage = document.getElementById("success-message");

    namaError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    if (nama.length <= 3){
        namaError.textContent = "Nama harus lebih dari 3 karakter.";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        emailError.textContent = "Email yang dimasukkan tidak valid."
        valid = false;
    }

    if (password.length < 8){
        passwordError.textContent = "Password harus minimal 8 karakter."
        valid = false;
    }

    if (valid){
        successMessage.textContent = "Pendaftaran berhasil!";
        document.getElementById("form").reset();
    }
})
