// script.js
function openComposeDialog() {
    document.getElementById('compose-modal').style.display = 'block';
}

function closeComposeDialog() {
    document.getElementById('compose-modal').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function () {
    // Dummy emails for display
    const dummyEmails = [
        { from: 'john.doe@example.com', subject: 'Meeting Tomorrow', body: 'Don\'t forget about the meeting tomorrow.' },
        { from: 'alice.smith@example.com', subject: 'Project Update', body: 'Here is the latest update on the project.' },
    ];

    // Display dummy emails in the email list
    const emailList = document.getElementById('email-list');
    dummyEmails.forEach((email, index) => {
        const emailThumbnail = document.createElement('div');
        emailThumbnail.className = 'email-thumbnail';
        emailThumbnail.innerHTML = `<strong>${email.from}</strong><br>${email.subject}`;
        emailThumbnail.addEventListener('click', () => openEmailDialog(index));
        emailList.appendChild(emailThumbnail);
    });

    // Handle compose form submission
    const composeForm = document.getElementById('compose-form');
    composeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const to = document.getElementById('to').value;
        const cc = document.getElementById('cc').value;
        const bcc = document.getElementById('bcc').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').innerHTML;

        // Validate the "To" field
        const toValue = to.trim();
        if (!validateEmail(toValue)) {
            alert('Invalid email address in the "To" field');
            return;
        }

        // we can add logic here to handle form submission (send email, etc.)
        // For now, let's log the values to the console
        console.log('To:', to);
        console.log('CC:', cc);
        console.log('BCC:', bcc);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Clear form fields
        composeForm.reset();

        // Close the compose modal
        closeComposeDialog();
    });
});

// Simple Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function openEmailDialog(emailIndex) {
    //  logic to display the full email using the emailIndex
    alert(`Display Logic For full email for index ${emailIndex}`);
}

// Add text editing features (bold, italic) if needed
function applyTextFormatting(format) {
    const selection = window.getSelection();
    console.log(selection)
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style[format] = 'true';
    
    range.surroundContents(span);
}