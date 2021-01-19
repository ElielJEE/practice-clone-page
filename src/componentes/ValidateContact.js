export default function validateForm(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = "This field is required"
    }

    // email
    if (!values.email) {
        errors.email = "This field is requiered"
    }

    return errors;
}