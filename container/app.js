const productsSet = Array.from(document.querySelectorAll('.product'));
const container = document.getElementById('internal-container-id');
let currentFeature = ""

const featureProducts = {
    feature1: productsSet.filter(product => product.classList.contains('feature1')),
    feature2: productsSet.filter(product => product.classList.contains('feature2')),
    feature3: productsSet.filter(product => product.classList.contains('feature3')),
};

// Helper function to pause execution for a specified time
function sleep(milliSeconds) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds));
}

// Helper function to get all product elements
const getElements = () => Array.from(document.querySelectorAll('.product'));

// Function to update and display products based on input array
function updateProducts(products) {
    getElements().forEach(product => {
        product.classList.remove('show');
        container.removeChild(product);
    });
    products.forEach(product => container.appendChild(product));

    // Display new products with a slight delay for animation
    getElements().forEach(async product => {
        await sleep(10);
        product.classList.add('show');
    });
}

document.getElementById('button1').addEventListener('click', () => {
    if(currentFeature !="all"){
        currentFeature = "all"
        updateProducts(productsSet);
    }
});

document.getElementById('button2').addEventListener('click', () => {
    if(currentFeature !="feature1"){
        currentFeature = "feature1"
        updateProducts(featureProducts.feature1);
    }
    
});

document.getElementById('button3').addEventListener('click', () => {
    if(currentFeature !="feature2"){
        currentFeature = "feature2"
        updateProducts(featureProducts.feature2);
    }
});

document.getElementById('button4').addEventListener('click', () => {
    if(currentFeature !="feature3"){
        currentFeature = "feature3"
        updateProducts(featureProducts.feature3);
    }
})
