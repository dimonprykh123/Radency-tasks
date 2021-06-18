const formValidation = (formValues) => {
    let errors = ""

    if (formValues.title.trim() === "") {
        errors += "Write some title \n"
    }
    if (formValues.dates.trim() === "") {
        errors += "Select some date \n"
    }
    if (formValues.category === "none") {
        errors += "Select some category \n"
    }
    if (formValues.content.trim() === "") {
        errors += "Write some content \n"
    }
    return errors;
};

export default formValidation