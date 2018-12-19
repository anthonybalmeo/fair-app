export const vehicle1 = {
  chrome_image_url: 'www.fair.com',
    id: '123',
    make: 'Honda',
    mileage: 10000,
    model: 'Civic',
    model_year: '2019',
    product_financials: [{
      id: 123,
      monthly_payment_cents: 30000,
      start_fee_cents: 90000,
    }],
    isFavorite: true,
}

export const vehicle2 = {
  chrome_image_url: 'www.fair.com',
    id: '345',
    make: 'Honda',
    mileage: 10000,
    model: 'Civic',
    model_year: '2019',
    product_financials: [{
      id: 345,
      monthly_payment_cents: 30000,
      start_fee_cents: 90000,
    }],
    isFavorite: true,
}

export const vehicleWithFavorite1 = {
    ...vehicle1,
    isFavorite: true,
}

export const vehicleWithFavorite2 = {
  ...vehicle1,
  isFavorite: false,
}

export const vehiclesWithFavorite = [
  vehicleWithFavorite1,
  vehicleWithFavorite2,
]