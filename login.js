document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.getElementById('google-login');
    const emailSubmit = document.getElementById('email-login-submit');
    const emailInput = document.getElementById('email-input');

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            googleBtn.disabled = true;
            // Spinner customized for white background button
            googleBtn.innerHTML = `<span class="inline-flex items-center gap-2 text-gray-800"><svg class="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5A8 8 0 1120 12h-4"></path></svg> جاري الاتصال...</span>`;
            
            setTimeout(() => {
                setUser({ name: 'مستخدم قوقل', email: 'user@gmail.com', role: 'user' });
                window.location.href = 'index.html';
            }, 2000);
        });
    }

    if (emailSubmit) {
        emailSubmit.addEventListener('click', () => {
            const email = emailInput ? emailInput.value.trim() : '';
            
            if (!email) {
                emailInput.focus();
                emailInput.classList.add('border-red-500');
                return;
            }

            const role = email.toLowerCase() === 'admin@dlt.store' ? 'admin' : 'user';
            // Generate a display name from the email
            const name = email.split('@')[0]; 

            emailSubmit.innerHTML = 'جاري الإرسال...';
            emailSubmit.disabled = true;

            setTimeout(() => {
                setUser({ name: name, email: email, role: role });
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            emailInput.classList.remove('border-red-500');
        });
    }
});
