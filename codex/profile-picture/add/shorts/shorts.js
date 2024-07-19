document.addEventListener('DOMContentLoaded', function () {
    // Get the short option and short section elements
    const shortOption = document.getElementById('addShort');
    const shortSection = document.getElementById('shortSection');
    const closeShortSection = document.getElementById('closeShortSection');

    // Show the short section when the short option is clicked
    shortOption.addEventListener('click', function () {
        shortSection.style.display = 'block';
    });

    // Hide the short section when the close arrow is clicked
    closeShortSection.addEventListener('click', function () {
        shortSection.style.display = 'none';
    });
});
