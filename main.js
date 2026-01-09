document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu-btn');

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden'); // Show menu
            mobileMenu.classList.add('flex'); // Ensure it uses flex layout
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Hide menu
            mobileMenu.classList.remove('flex');
        });
    }

    // Modal Logic
    const modalHTML = `
    <div id="buy-modal" class="fixed inset-0 z-[300] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center transition-opacity duration-300 opacity-0">
        <div class="bg-cardBg border border-neonPurple/50 rounded-2xl p-6 w-[90%] max-w-md relative shadow-[0_0_30px_rgba(217,0,255,0.3)] transform transition-all duration-300 scale-90">
            <button id="close-modal-btn" class="absolute top-4 right-4 text-gray-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div class="text-center">
                <h3 id="modal-product-name" class="text-xl font-bold text-white mb-4 font-pixel"></h3>
                <div class="relative mb-4 group/modal">
                    <img id="modal-product-image" src="" alt="Product" class="w-full h-48 object-cover rounded-xl border border-white/10 shadow-lg group-hover/modal:shadow-neonPurple/50 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
                    <div class="absolute bottom-2 right-2 bg-neonPurple text-white text-xs font-bold px-2 py-1 rounded">Selected</div>
                </div>
                
                <h4 class="text-xl font-bold text-white mb-2">جاز لك المنتج؟ تستاهله والله ! 🤍</h4>
                <p class="text-gray-300 mb-2 text-base leading-relaxed font-bold">
                    لو حاب تطلبه أو عندك أي سؤال بخاطرك، يا هلا والله ومسهلا فيك <span class="text-neonBlue">بسيرفرنا ديسكورد</span>..
                </p>
                <p class="text-gray-300 mb-6 text-base leading-relaxed font-bold">
                    كل اللي عليك تفتح <span class="text-neonBlue">تذكرة (Ticket)</span> وفريقنا بيضبطك ويرد عليك <span class="text-neonGreen">بأسرع وقت ⚡️</span>
                </p>
                
                <p class="text-xs text-gray-400 mb-2">لدخول السيرفر</p>
                <a href="https://discord.gg/dfq8cU8bnW" target="_blank" class="w-full bg-neonGreen hover:bg-white text-black font-bold py-3 rounded-xl transition transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,163,0.4)] flex items-center justify-center gap-2 no-underline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    اضغط هنا
                </a>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('buy-modal');
    const modalContent = modal.querySelector('div'); // The inner container
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImage = document.getElementById('modal-product-image');
    const modalName = document.getElementById('modal-product-name');
    const buyBtns = document.querySelectorAll('.buy-now-btn');

    function openModal(imageSrc, name) {
        modalImage.src = imageSrc;
        modalName.textContent = name;
        modal.classList.remove('hidden');
        // Trigger reflow for animation
        void modal.offsetWidth;
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-90');
        modalContent.classList.add('scale-100');
    }

    function closeModal() {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-90');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Event Delegation for Buy Now Buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.buy-now-btn');
        if (btn) {
            e.preventDefault();
            // Try to find the card container. 
            // - .group: used in listing pages
            // - .bg-cardBg: used in listing pages
            // - [class*="bg-cardBg"]: handles bg-cardBg/50 in product-details.html
            const card = btn.closest('.group') || btn.closest('.bg-cardBg') || btn.closest('[class*="bg-cardBg"]');
            
            if (card) {
                const imgElement = card.querySelector('img');
                // Prioritize h1 (used in product details) over h3 (used in listings)
                // This prevents picking up "Game Features" (h3) in product details page
                const titleElement = card.querySelector('h1') || card.querySelector('h3');
                
                if (imgElement && titleElement) {
                    const img = imgElement.src;
                    const name = titleElement.innerText.replace('HOT', '').replace('جديد', '').trim(); // Basic cleanup
                    openModal(img, name);
                }
            }
        }
    });
});
