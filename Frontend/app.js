// SECTION 1: VUE 2.7.8 OPTIONS API IMPLEMENTATION
// This file contains the main Vue instance for the shopping cart
// Uses Vue 2 Options API (not Composition API)
// Demonstrates core Vue 2 features: data, computed, methods

new Vue({
    // SECTION 1A: VUE INSTANCE MOUNTING
    // This section handles: Connecting Vue to HTML element
    // el: '#app' tells Vue to mount this instance to the div with id="app"
    // This is how Vue 2 attaches to HTML elements
    el: '#app',
    
    // SECTION 2: VUE 2 REACTIVE DATA
    // This section handles: Application state management
    // data() returns reactive data object
    // All properties in data are reactive - changes trigger UI updates
    // This is the Model in MVC pattern
    data: {
        // SECTION 2A: PRODUCTS DATA ARRAY
        // This section handles: Educational lessons catalog
        // Static array of 10 educational lessons
        // Each product has: id, name, description, price, inCart status
        // inCart tracks whether item is in shopping cart
        products: [
            {
                id: 1,
                name: 'Mobile App Development',
                description: 'Learn how to build apps for Android and iOS using frameworks.',
                price: 299,
                inCart: false
            },
            {
                id: 2,
                name: 'Artificial Intelligence & Machine Learning',
                description: 'Learn how to train models using Python libraries',
                price: 349,
                inCart: false
            },
            {
                id: 3,
                name: 'Cloud Computing with AWS or Azure Lab Course',
                description: 'Get familiar with cloud platforms, deployment models, and services.-on chemistry experiments',
                price: 399,
                inCart: false
            },
            {
                id: 4,
                name: 'Cybersecurity Basics',
                description: 'Understand the core principles of cybersecurity',
                price: 279,
                inCart: false
            },
            {
                id: 5,
                name: 'UI/UX Design Principles',
                description: 'user interface and user experience designClassic literature analysis and writing',
                price: 229,
                inCart: false
            },
            {
                id: 6,
                name: '',
                description: 'Ancient civilizations to modern times',
                price: 249,
                inCart: false
            },
            {
                id: 7,
                name: 'Computer Science',
                description: 'Programming fundamentals and algorithms',
                price: 449,
                inCart: false
            },
            {
                id: 8,
                name: 'Database Design & SQL',
                description: 'Understand how data is structured and stored.',
                price: 199,
                inCart: false
            },
            {
                id: 9,
                name: 'Backend Development with Node.js',
                description: 'Build server-side applications using Node.js and Express',
                price: 219,
                inCart: false
            },
            {
                id: 10,
                name: 'Python Programming',
                description: 'Master Python from the ground up',
                price: 329,
                inCart: false
            }
        ],
        
        // SECTION 2B: SHOPPING CART STATE
        // This section handles: Cart items storage
        // cart[] stores items added to shopping cart
        // Initially empty, populated when user adds items
        // This is the main state for cart functionality
        cart: []
    },
    
    // SECTION 3: VUE 2 COMPUTED PROPERTIES
    // This section handles: Derived state calculations
    // Computed properties are reactive and cached
    // They recalculate only when dependencies change
    // total() calculates sum of all cart items
    computed: {
        // SECTION 3A: CART TOTAL CALCULATION
        // This section handles: Price calculation for cart items
        // cart.reduce() sums up all item prices
        // This is pure JavaScript, not Vue-specific
        // Returns total price of all items in cart
        total() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    },
    
    // SECTION 4: VUE 2 METHODS
    // This section handles: Event handlers and business logic
    // methods object contains all event handlers and functions
    // These are the Controller in MVC pattern
    // All methods have access to this.data and this.computed
    methods: {
        // SECTION 4A: ADD TO CART FUNCTIONALITY
        // This section handles: Adding products to shopping cart
        // Called when user clicks "Add to Cart" button
        // Modifies reactive data (cart and product.inCart)
        // Vue automatically updates UI when data changes
        addToCart(product) {
            // Check if product is already in cart
            if (!product.inCart) {
                // Add product to cart array
                this.cart.push(product);
                // Mark product as in cart
                product.inCart = true;
                // Save cart to localStorage for persistence
                this.saveCart();
            }
        },
        
        // SECTION 4B: REMOVE FROM CART FUNCTIONALITY
        // This section handles: Removing products from shopping cart
        // Called when user clicks "Remove" button
        // Removes item from cart and updates product status
        removeFromCart(item) {
            // Find index of item in cart array
            const index = this.cart.indexOf(item);
            if (index > -1) {
                // Remove item from cart using splice()
                this.cart.splice(index, 1);
                // Mark product as not in cart
                item.inCart = false;
                // Save updated cart to localStorage
                this.saveCart();
            }
        },
        
        // SECTION 4C: CHECKOUT NAVIGATION
        // This section handles: Navigating to checkout page
        // Called when user clicks "Proceed to Checkout"
        // Saves cart to localStorage and navigates to checkout page
        // This demonstrates multi-page application navigation
        goToCheckout() {
            // Save cart to localStorage for persistence
            this.saveCart();
            // Navigate to checkout page using window.location
            window.location.href = 'checkout.html';
        },
        
        // SECTION 4D: CART PERSISTENCE
        // This section handles: Saving cart data to browser storage
        // Saves cart data to browser's localStorage
        // Allows cart to persist between page refreshes
        // Uses JSON.stringify to convert array to string
        saveCart() {
            // Save cart array to localStorage with key 'classCart'
            localStorage.setItem('classCart', JSON.stringify(this.cart));
        }
    }
    
    // SECTION 5: VUE 2 FEATURES NOT USED
    // This section handles: Compliance with requirements
    // No watchers (watch: {})
    // No emits ($emit)
    // No props (props: [])
    // No expose (expose: [])
    // No slots (<slot>)
    // No mixins (mixins: [])
    // No Vuex or Pinia state management
    // No Vue CLI or Vue Router
    // No Composition API (setup, ref, reactive)
    // No Vue 3 features
    // No .vue single file components
    // No <template> tags
});

// SECTION 6: ARCHITECTURE SUMMARY
// This section handles: Complete implementation overview
// 1. Vue 2.7.8 Options API with CDN
// 2. Reactive data binding with {{ }} interpolation
// 3. Event handling with @click directives
// 4. Conditional rendering with v-if directives
// 5. List rendering with v-for directives
// 6. Computed properties for derived state
// 7. Methods for event handling and business logic
// 8. localStorage for data persistence
// 9. Multi-page navigation with window.location
// 10. Simple, defensible implementation using core Vue 2 features only