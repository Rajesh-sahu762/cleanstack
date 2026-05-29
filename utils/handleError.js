function handleError(error, step) {

    console.log(
        '\n❌ Error in:',
        step
    );

    console.log(
        error.message
    );

    console.log(
        '\nSetup stopped.\n'
    );

    process.exit(1);
}

module.exports = {
    handleError
};