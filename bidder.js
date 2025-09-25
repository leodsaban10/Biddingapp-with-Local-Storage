let bidder1Total = 0;
let bidder2Total = 0;

// display elements
const bidder1TotalDisplay = document.getElementById('bidder1-total');
const bidder2TotalDisplay = document.getElementById('bidder2-total');
const highestBidderDisplay = document.getElementById('highest-bidder');
const highestBidDisplay = document.getElementById('highest-bid');

// input elements
const bidder1Input = document.getElementById('bidder1-input');
const bidder2Input = document.getElementById('bidder2-input');

// button elements
const bidder1Btn = document.getElementById('bidder1-btn');
const bidder2Btn = document.getElementById('bidder2-btn');
const clearBtn = document.getElementById('clear-bids-btn');

function placeBidder1 () {
    const bidAmount = parseInt(bidder1Input.value);
    if (!isNaN(bidAmount) && bidAmount > 0) {
        bidder1Total = bidAmount;
        bidder1TotalDisplay.textContent = `Bidder1 Total: $${bidder1Total}`;
        bidder1Input.value = '';
    } else {
        alert('Please enter a valid number for Bidder 1');
    }
}
bidder1Btn.addEventListener('click', placeBidder1);