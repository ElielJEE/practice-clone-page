export default function validateComments(values) {
    let errors = {}

    if (!values.alias.trim()) {
        errors = "This field is required";
    }

    if (!values.comment.trim()) {
        errors = "This field is required";
    }

    return errors;
}