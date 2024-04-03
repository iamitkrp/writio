

document.getElementById('clear_prompt_btn').addEventListener('click', function() {
    document.getElementById('prompt').value = '';
});

document.getElementById('copy_prompt_btn').addEventListener('click', function() {
    const promptTextarea = document.getElementById('prompt');
    promptTextarea.select();
    document.execCommand('copy');
    promptTextarea.setSelectionRange(0, 0);
});

document.getElementById('generate_btn').addEventListener('click', async function() {
    // Code for generating output
});

document.getElementById('clear_output_btn').addEventListener('click', function() {
    document.getElementById('output').value = '';
});

document.getElementById('copy_output_btn').addEventListener('click', function() {
    const outputTextarea = document.getElementById('output');
    outputTextarea.select();
    document.execCommand('copy');
    outputTextarea.setSelectionRange(0, 0);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark_mode_toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
