
/* Asynchornous functionality 
*/
const MAX_PRIME = 1000000;

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

async function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        try {
            const candidate = random(MAX_PRIME);
            if (isPrime(candidate))
                primes.push(candidate);
        } catch (error) {
            console.error("Error generating prime:", error);
        }
    }
    return primes;
}

function loadStmt() {
    console.log('generating large Prime Numbers...')
}

async function getPrime() {

    const primes = await generatePrimes(MAX_PRIME);
    console.log(`Finished generating ${primes.length} primes!`);
};

console.log('started request');
getPrime();
loadStmt();
