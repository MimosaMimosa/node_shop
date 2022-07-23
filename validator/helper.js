exports.formatedError = async (...arg) => {
    const [req, res, next, schema] = arg;
    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        let details = error.details;
        let format = {};
        details.forEach(function (error) {
            format[error.context.label] = error.message;
        });
        res.status(422).json({
            errors: {
                data: format,
            },
        });
    }
};
