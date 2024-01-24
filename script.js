document.addEventListener("DOMContentLoaded", () => {
  const signBtn = document.querySelector("#Signbutt");
  const firstInput = document.querySelector("#FirstName");
  const errMessage = document.querySelector("#FirstNameError");
  const surInput = document.querySelector("#Surename");
  const surError = document.querySelector("#SurenameError");
  const emInput = document.querySelector("#emailMoboleInput");
  const emerror = document.querySelector("#enterError");

  const signupFunction = () => {
    const isFirstNameValid = firstInput.value.trim().length > 0;
    // This line checks if the value entered in the first name input field (firstInput) is valid.
    // gets the value of the input, removes leading and trailing whitespaces with trim()
    const isSurNameValid = surInput.value.trim().length > 0;
    // This line checks if the value entered in the first name input field (firstInput) is valid.
    // gets the value of the input, removes leading and trailing whitespaces with trim()
    const isEmailMobileValid = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(emInput.value.trim());
    // This line uses a regular expression (/^(?:\d{10}|\w+@\w+\.\w{2,3})$/) to validate the email or mobile input (emInput).
    // emInput.value.trim() gets the input value and trims it.
    // 

    errMessage.style.display = isFirstNameValid ? "none" : "block";
    surError.style.display = isSurNameValid ? "none" : "block";
    emerror.style.display = isEmailMobileValid ? "none" : "block";
  };

  signBtn.addEventListener("click", () => {
    signupFunction();
  });

  firstInput.addEventListener("input", () => {
    errMessage.style.display =
      firstInput.value.trim().length < 1 ? "block" : "none";
  });

  surInput.addEventListener("input", () => {
    surError.style.display =
      surInput.value.trim().length < 1 ? "block" : "none";
  });

   emInput.addEventListener("input", () => {
     emerror.style.display =
       /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(emInput.value.trim())
         ? "none"
         : "block";
   });
});
