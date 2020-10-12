var submit = document.querySelector(".submit");
var password = document.getElementById("password");
var email = document.getElementById("email");
var firstName = document.getElementById("first");
var lastName = document.getElementById("last");

const validateInput = (name) => {
	let isValid;
	const errorMessage = document.querySelector(`.${name}--display`);

	if (name === "email") {
		const email = document.getElementById("email").value;
		isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	} else {
		isValid = document.getElementById(`${name}`).value;
	}

	if (!isValid && !errorMessage) {
		setError(`${name}`);
	}
};

const setErrorStyle = (name) => {
	document.querySelector(`.${name}`).firstElementChild.classList.toggle("hide");
	document.querySelector(`#${name}`).classList.add("input--error-border");
};

const setError = (name) => {
	const el = document.createElement("span");
	["form__error", `${name}--display`].forEach((c) => el.classList.add(c));

	name === "first"
		? (el.innerText = "First Name cannot be empty")
		: name === "last"
		? (el.innerText = "Last Name cannot be empty")
		: name === "password"
		? (el.innerText = "Password cannot be empty")
		: (el.innerText = "Looks like this is not an email.");

	document.querySelector(`.${name}`).append(el);
	setErrorStyle(name);
};

const resetForm = (id) => {
	const el = document.querySelector(`.${id}--display`);
	if (el) {
		el.remove();
		resetErrStyle(id);
	}
};

const resetErrStyle = (name) => {
	document.querySelector(`.${name}`).firstElementChild.classList.toggle("hide");
	document.querySelector(`#${name}`).classList.remove("input--error");
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	["first", "last", "password", "email"].forEach((i) => validateInput(i));
});

[firstName, lastName, email, password, email].forEach((i) =>
	i.addEventListener("click", () => {
		resetForm(i.id);
	})
);
