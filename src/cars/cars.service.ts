import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand :'TOYOTA',
            model : 'covic' 
        },
        {
            id:2,
            brand :'HONDA',
            model : 'otro'
        },
        {
            id:3,
            brand :'FORD',
            model : 'fiesta'
        }
    ];
    findAll() {
        return this.cars;
    }
    findOneById(id:number) {
        const car = this.cars.find(car => car.id === id);
        return car ;
    }
}


