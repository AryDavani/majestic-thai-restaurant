This project was bootstrapped with [Create React App].

## Majestic Thai Restuarant App


### todo's:
- homepage includes slideshow of images, About section under that, then Contact section under that.
- make route to menu page. Menu page displays menu only, no slideshow.
- make route to "Place Order" page that includes complete summary of order and a form to fill out name, phone number, ect.
- nav menu stays fixed on top and 'smooth scrolls' to About and Contact sections.


<div key={ randNum }>
  <h1>{ item.name }</h1>
</div>


<div className="card flex">
  <div className="flex-grow">
    <p className="dish">Total</p>
  </div>
  <div className="center-flex">
    <p className="price">{ this.state.displayOrder ? "$" + this.state.order.total.toFixed([2]) : null }</p>
  </div>
</div>
