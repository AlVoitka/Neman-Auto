function clientCard() {




    class ClientCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1.1;
            this.changeToEUR();
        }


        changeToEUR() {
            this.price = this.price * this.transfer;
        }


        render() {
            const element = document.createElement('div');
            element.innerHTML =`
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> usd/year</div>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    new ClientCard(
        "./scss/blocks/main/clientCard/silver.png",
        "silver",
        'Card "Silver"',
        'Product of active and healthy people. This is a brand new product with the best price and high quality!',
        20,
        '.container_1'
    ).render();  

    new ClientCard(
        "./scss/blocks/main/clientCard/gold.png",
        "gold",
        'Card “Gold”',
        'Product of active and healthy people. This is a brand new product with the best price and high quality!',
        40,
        '.container_1'
    ).render();  

    new ClientCard(
        "./scss/blocks/main/clientCard/platinum.jpg",
        "platinum",
        'Card "Platinum"',
        'Product of active and healthy people. This is a brand new product with the best price and high quality!',
        500,
        '.container_1'
    ).render();  
    






}

module.exports = clientCard;