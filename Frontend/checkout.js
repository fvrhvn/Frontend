new Vue({
    el: '#app',
    data: {
        cart: [],
        checkoutForm: {
            name: '',
            email: '',
            phone: '',
            address: '',
            payment: ''
        }
    },
    computed: {
        total() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    },
    methods: {
        loadCart() {
            // Load cart from localStorage
            const savedCart = localStorage.getItem('classCart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
        },
        goBackToCart() {
            // Go back to main page
            window.location.href = 'index.html';
        },
        completeOrder() {
            // Check if form is filled
            if (!this.checkoutForm.name || !this.checkoutForm.email || !this.checkoutForm.phone || !this.checkoutForm.address || !this.checkoutForm.payment) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Check if cart is empty
            if (this.cart.length === 0) {
                alert('Your cart is empty. Please add some items first.');
                window.location.href = 'index.html';
                return;
            }
            
            // Show order confirmation
            alert('Order completed successfully!\n\nCustomer: ' + this.checkoutForm.name + '\nEmail: ' + this.checkoutForm.email + '\nTotal: $' + this.total + '\nPayment: ' + this.checkoutForm.payment);
            
            // Clear cart and redirect to main page
            localStorage.removeItem('classCart');
            window.location.href = 'index.html';
        }
    },
    mounted() {
        this.loadCart();
    }
});
