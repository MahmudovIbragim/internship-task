/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCT {
  type GetProductResponse = {
    _id: number;
    img: string;
    name: string;
    brand: string;
    power: string;
    price: string;
    mileage: string;
    engineSize: string;
    engineType: string;
    isFavorite: boolean;
    yearOfIssue: string;
  }[];
  type GetProductRequest = void;

  type GetProductByIdRequest = number;
  type GetProductByIdResponse = {
    _id: number;
    img: string;
    name: string;
    brand: string;
    power: string;
    price: string;
    mileage: string;
    engineSize: string;
    engineType: string;
    isFavorite: boolean;
    yearOfIssue: string;
  };

}
