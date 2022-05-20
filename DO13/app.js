//FETCH
let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		document.body.innerHTML = data
			.map((user) => `<p>${user.name}</p>`)
			.join(" ");
	});

url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("posts").innerHTML = data
			.map(
				(post) => `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`
			)
			.join(" ");
	});

let istApi = "https://ist-developers-platform.vercel.app/api/team";
fetch(istApi)
	.then((response) => response.json())
	.then((data) => console.log(data));

let loginApi = "https://ist-developers-platform.vercel.app/api/login";

document.getElementById("login").addEventListener("submit", (e) => {
	e.preventDefault();
	let name = document.getElementById("fullName").value;
	let password = document.getElementById("password").value;

	fetch(loginApi, {
		method: "POST",
		body: JSON.stringify({
			name,
			password,
		}),
	})
		.then((response) => response.json())
		.then((user) => {
			if (user.name) {
				document.body.innerHTML = `<h1>Welcome back ${user.name}</h1>`;
			} else {
				alert("Sorry please sign up");
			}
		});
});