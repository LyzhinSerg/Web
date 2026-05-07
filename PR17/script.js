function User(login, password) {
    this.login = login;
    this.password = password;
     this.hello = function() {
        alert(`Добро пожаловать, ${login}`);
    }
}
const admin = new User("admin", "qwerty");
admin.hello();

if (admin.login === "admin" && admin.password ==="qwerty")
    alert("Пароль и логин верны")
else
    alert("Пароль и логин неверны")