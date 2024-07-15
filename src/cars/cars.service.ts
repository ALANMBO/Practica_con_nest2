import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars  : Car[]= [
        {
            id:uuid(),
            brand :'TOYOTA',
            model : 'covic' 
        },
        {
            id:uuid(),
            brand :'HONDA',
            model : 'otro'
        },
        {
            id:uuid(),
            brand :'FORD',
            model : 'fiesta'
        }
    ];
    findAll() {
        return this.cars;
    }
    findOneById(id:string) {
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new Error('Car not found');
        return car ;
    }
    create(CreateCarDto : CreateCarDto){
        const car : Car = {
            id:uuid(),
            ...CreateCarDto
        }
        this.cars.push(car)
        return car ;
    }
    update(id : string , updateCarDto : UpdateCarDto){
        
    let carDB = this.findOneById(id);
    if(updateCarDto.id && updateCarDto.id !== id){
        throw new BadRequestException('Car id is not valid');
    }
    this.cars = this.cars.map(car =>{
        if(car.id === id){
            carDB = {...carDB, ...updateCarDto, id}
            return carDB;
        }
        return car;
    });
    return carDB;
    }
    delete(id : string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        
    } 
}


